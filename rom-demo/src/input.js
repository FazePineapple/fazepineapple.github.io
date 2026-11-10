import {$} from './core/dom.js';

/**
 * Keyboard, mouse and touch. Physical keys are mapped to actions through
 * Settings (so rebinding works everywhere); action codes keep the names of
 * their default keys (e.g. 'KeyE' means "Interact").
 */
export function createInput(game) {
  const {settings, state, renderer} = game;
  const canvas = renderer.domElement;
  const keys = new Set(), touchKeys = new Map();
  let dragging = false, lastX = 0, lastY = 0, sprayPointer = null, mouseHeld = false;

  const down = (...codes) => codes.some(code => keys.has(code) || [...touchKeys.values()].includes(code));
  const pointerLocked = () => document.pointerLockElement === canvas;
  /** setPointerCapture throws if the pointer is no longer active; never let that cancel a click. */
  const capture = (element, id) => { try { element.setPointerCapture(id); } catch { /* Pointer already released. */ } };

  function release() {
    keys.clear(); touchKeys.clear(); dragging = false; sprayPointer = null;
  }

  // Some browsers and embedded views refuse pointer lock. After a refusal,
  // clicks act straight away (drag-to-look still works) and we only retry
  // capturing the mouse every few seconds.
  let lockRetryAt = 0, onLockFailed = null;
  document.addEventListener('pointerlockerror', () => {
    lockRetryAt = performance.now() + 4000;
    onLockFailed?.();
    onLockFailed = null;
  });
  const canTryLock = () => Boolean(canvas.requestPointerLock) && performance.now() >= lockRetryAt;

  function lockPointer(failed = null) {
    if (!canvas.requestPointerLock || pointerLocked() || !game.usesMouseLook) return;
    onLockFailed = failed;
    try {
      const request = canvas.requestPointerLock();
      request?.catch?.(() => { lockRetryAt = performance.now() + 4000; onLockFailed?.(); onLockFailed = null; });
    } catch {
      lockRetryAt = performance.now() + 4000;
      onLockFailed?.(); onLockFailed = null;
    }
  }
  document.addEventListener('pointerlockchange', () => { if (pointerLocked()) { lockRetryAt = 0; onLockFailed = null; } });

  const playing = () => game.active && !state.deathTime && !game.panels.isOpen();

  // Discrete actions on key press. Movement keys are polled through down().
  const pressActions = {
    KeyJ:() => game.movement.toggleJetpack(),
    KeyC:() => game.movement.toggleClimb(),
    KeyV:() => game.cameraRig.toggleView(),
    KeyE:() => game.interactions.press(),
    KeyF:() => game.actions.useItem(),
    KeyQ:() => game.actions.throwItem(),
    KeyX:() => game.actions.primaryAction(),
    KeyR:() => game.unstuck(),
    Space:() => { if (!state.jetpack) game.movement.jump(); },
  };
  const heldKeys = ['KeyW', 'KeyA', 'KeyS', 'KeyD', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ShiftLeft', 'ShiftRight', 'Space', 'KeyX'];

  window.addEventListener('keydown', event => {
    if (!game.active) return;
    if (state.deathTime) { event.preventDefault(); return; }
    const key = settings.key(event.code);
    const panel = game.panels.current;
    if (key === 'Escape') {
      if (panel) game.panels.close({relock:false});
      else game.setActive(false);
      return;
    }
    if (key === 'KeyH') { if (!event.repeat) game.toggleHelp(); return; }
    if (key === 'KeyN') { event.preventDefault(); if (!event.repeat && !panel) game.sky.toggle(); return; }
    // Panel toggles work from inside their own panel too.
    const toggles = {KeyB:'emotes', KeyI:'inventory', KeyL:'journal'};
    if (toggles[key]) {
      event.preventDefault();
      if (!event.repeat && (!panel || panel === toggles[key])) game.panels.toggle(toggles[key]);
      return;
    }
    if (panel) return;
    const digit = /^Digit([1-9])$/.exec(key);
    if (digit) { game.equipment.select(Number(digit[1]) - 1); return; }
    if (heldKeys.includes(key)) { event.preventDefault(); keys.add(key); }
    if (pressActions[key]) {
      event.preventDefault();
      if (!event.repeat) pressActions[key]();
    }
  });
  window.addEventListener('keyup', event => {
    const key = settings.key(event.code);
    keys.delete(key);
    if (key === 'KeyE' && playing()) game.interactions.release();
  });
  window.addEventListener('blur', release);

  // Mouse wheel cycles the hotbar (one slot per notch, throttled for trackpads).
  let wheelReadyAt = 0;
  window.addEventListener('wheel', event => {
    if (!playing() || !event.deltaY) return;
    event.preventDefault();
    const now = performance.now();
    if (now < wheelReadyAt) return;
    wheelReadyAt = now + 70;
    const step = event.deltaY > 0 ? 1 : -1;
    game.equipment.select((game.equipment.hotbar.selected + step + 9) % 9);
  }, {passive:false});

  canvas.addEventListener('pointerdown', event => {
    if (!playing()) return;
    // Drag-to-look works everywhere; mice also get pointer lock.
    dragging = true; lastX = event.clientX; lastY = event.clientY;
    capture(canvas, event.pointerId);
    if (event.pointerType !== 'mouse') return;
    game.usesMouseLook = true;
    if (event.button !== 0) return;
    mouseHeld = true;
    const act = () => { if (mouseHeld) sprayPointer = event.pointerId; game.actions.primaryAction(); };
    // The click that captures the mouse should not also swing or shoot,
    // unless capturing fails, in which case the click acts as normal.
    if (!pointerLocked() && canTryLock()) { lockPointer(act); return; }
    act();
  });
  canvas.addEventListener('lostpointercapture', () => { dragging = false; });
  for (const type of ['pointerup', 'pointercancel']) window.addEventListener(type, event => {
    if (event.pointerId === sprayPointer) sprayPointer = null;
    if (event.pointerType === 'mouse') mouseHeld = false;
    dragging = false;
  });
  document.addEventListener('pointerlockchange', () => {
    if (game.active && !game.panels.isOpen() && !pointerLocked()) game.setActive(false);
  });
  document.addEventListener('pointermove', event => {
    if (!playing()) return;
    const locked = pointerLocked();
    if (!locked && !dragging) return;
    state.yaw -= settings.look(locked ? event.movementX : event.clientX - lastX) * .004;
    state.pitch = Math.min(1.15, Math.max(-1.22, state.pitch + settings.look(locked ? event.movementY : event.clientY - lastY, true) * .003));
    lastX = event.clientX; lastY = event.clientY;
  });

  // On-screen touch controls.
  for (const button of $('touch').querySelectorAll('button')) {
    button.addEventListener('pointerdown', event => {
      capture(button, event.pointerId); touchKeys.set(event.pointerId, button.dataset.key);
    });
    button.addEventListener('lostpointercapture', event => touchKeys.delete(event.pointerId));
  }
  const jumpButton = $('jumpButton');
  jumpButton.onpointerdown = event => { capture(jumpButton, event.pointerId); touchKeys.set(event.pointerId, 'Space'); };
  jumpButton.onlostpointercapture = event => touchKeys.delete(event.pointerId);
  jumpButton.onclick = () => { if (!state.jetpack) game.movement.jump(); };
  $('jetButton').onclick = () => game.movement.toggleJetpack();
  const pickButton = $('pickButton');
  pickButton.onpointerdown = event => { capture(pickButton, event.pointerId); game.interactions.press(); };
  pickButton.onpointerup = () => game.interactions.release();
  pickButton.onpointercancel = () => game.interactions.cancelHold();
  $('useButton').onclick = () => game.actions.useItem();
  $('throwButton').onclick = () => game.actions.throwItem();
  const attackButton = $('attackButton');
  attackButton.onclick = () => game.actions.primaryAction();
  attackButton.onpointerdown = event => { if (event.button === 0) { sprayPointer = event.pointerId; capture(attackButton, event.pointerId); } };
  attackButton.onlostpointercapture = () => { sprayPointer = null; };

  return {
    down,
    /** -1, 0 or 1 from a pair of opposing key groups. */
    axis:(positiveA, positiveB, negativeA, negativeB) => Number(down(positiveA, positiveB)) - Number(down(negativeA, negativeB)),
    /** Left mouse, X or the touch attack button held (for continuous spray). */
    get sprayHeld() { return sprayPointer !== null || keys.has('KeyX'); },
    release,
    lockPointer,
    pointerLocked,
  };
}
