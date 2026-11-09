import {$} from '../core/dom.js';

/**
 * One modal panel at a time (inventory, emotes, dialogue, journal). Opening a
 * panel pauses movement and frees the mouse; closing it recaptures the mouse
 * so play continues without an extra click.
 */
export function createPanels(game) {
  const panels = new Map();
  let current = null;

  function register(name, {element, onOpen, onClose, focus}) {
    panels.set(name, {element, onOpen, onClose, focus});
  }

  function open(name) {
    if (current === name) return;
    if (current) close({relock:false});
    const panel = panels.get(name);
    current = name;
    game.input.release();
    game.hud.setReticle(false);
    game.hud.setWaypoint(null);
    game.hud.clearPrompt();
    panel.element.hidden = false;
    panel.onOpen?.();
    if (document.pointerLockElement) document.exitPointerLock();
    (typeof panel.focus === 'function' ? panel.focus() : panel.element.querySelector('button'))?.focus();
  }

  function close({relock = true} = {}) {
    if (!current) return;
    const panel = panels.get(current);
    current = null;
    panel.element.hidden = true;
    panel.onClose?.();
    if (relock && game.active) game.input.lockPointer();
  }

  return {
    register,
    open,
    close,
    toggle(name) { if (current === name) close(); else open(name); },
    isOpen:name => (name ? current === name : current !== null),
    get current() { return current; },
  };
}

/** Emote wheel (B). */
export function createEmotesUI(game) {
  const element = $('emotes');
  game.panels.register('emotes', {element});
  for (const button of element.querySelectorAll('button')) {
    button.onclick = () => {
      const atRestroom = game.interactions.nearest()?.id === 'restroom';
      game.panels.close();
      if (button.dataset.emote) game.animation.startEmote(button.dataset.emote, {atRestroom});
    };
  }
}
