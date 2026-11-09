import {emotes} from './emotes.js';

/**
 * Procedural body animation: walk cycle, falling and landing poses, climbing,
 * attack swings, sitting on chairs, emotes (see emotes.js), picking items up
 * and drinking.
 */
export function createAnimation(game) {
  const {T, state, rom, audio, collision} = game;
  const {limbs, rig, torso, rightArm} = rom;
  const handPoint = new T.Vector3();
  const body = {rig, torso, limbs, rightArm, time:0, phase:0, envelope:0, hold:0};

  function startEmote(name, options = {}) {
    const def = emotes[name];
    if (!def || state.airborne || state.deathTime || state.seat) return false;
    if (state.emote && !options.force) return false;
    if (def.canStart && !def.canStart(game, options)) return false;
    state.emote = name; state.emoteTime = 0; state.emoteMidpoint = false; state.swing = 0;
    if (def.sound) audio.play(def.sound);
    def.start?.(game, options);
    game.bus.emit('player:emote', {name, atRestroom:Boolean(options.atRestroom)});
    return true;
  }

  function stopEmote() {
    state.emote = null;
    for (const {arm} of limbs) arm.rotation.z = 0;
  }

  function updateEmote(dt) {
    rig.rotation.set(0, 0, 0); rig.position.y = 0;
    for (const drop of rom.drops) drop.visible = false;
    if (state.seat) {
      // Sitting on a chair: hips on the seat, legs forward.
      rig.position.y = (game.items[state.seat.pickup.id].sit?.height ?? .47) - .86;
      for (const {arm, leg} of limbs) { leg.rotation.x = -1.4; arm.rotation.x = -.45; arm.rotation.z = 0; }
      return;
    }
    if (!state.emote) return;
    const def = emotes[state.emote];
    state.emoteTime += dt;
    const time = state.emoteTime;
    const phase = Math.min(1, time / def.duration);
    Object.assign(body, {
      time, phase,
      envelope:Math.sin(Math.PI * phase),
      hold:Math.min(1, phase * 6, (1 - phase) * 6),
    });
    def.pose(body);
    if (!state.emoteMidpoint && phase >= .55) { state.emoteMidpoint = true; def.midpoint?.(game); }
    if (state.emote === 'pee') {
      const {position, rotation} = rom.player;
      rom.drops.forEach((drop, i) => {
        const flight = (time * 2.5 + i / rom.drops.length) % 1;
        const distance = .21 + flight * .91;
        const x = position.x + Math.sin(rotation.y) * distance;
        const z = position.z + Math.cos(rotation.y) * distance;
        drop.visible = phase > .09 && phase < .87 && !collision.block(x, z);
        drop.position.set(x, position.y + .93 + .13 * flight - flight * flight * 1.05, z);
      });
    }
    if (phase === 1) stopEmote();
  }

  function updateBody() {
    const fall = state.airborne && !state.thrust ? T.MathUtils.clamp(-state.verticalSpeed / 13, 0, 1) : 0;
    const landing = Math.sin(Math.PI * state.landingTime / .32);
    for (const {leg, arm, side} of limbs) {
      const stride = state.airborne ? side * .32 : state.moving ? Math.sin(state.stride) * side * (state.running ? .9 : .58) : 0;
      leg.rotation.x = T.MathUtils.lerp(leg.rotation.x, stride, .24);
      arm.rotation.x = -leg.rotation.x * .76;
      arm.rotation.z = side * fall * .88;
      if (fall) { arm.rotation.x = -.28 - fall * .69; leg.rotation.x -= fall * .27; }
      if (state.climbing) { arm.rotation.x = -2.15 + Math.sin(state.stride) * side * .42; leg.rotation.x = Math.sin(state.stride) * side * .43; }
    }
    if (state.swing) rightArm.rotation.x = -Math.sin(state.swing / .26 * Math.PI) * 1.8;
    torso.rotation.set(.22 * fall, 0, 0);
    torso.position.y = (state.moving ? Math.abs(Math.sin(state.stride)) * .045 : 0) - landing * .18;
  }

  function startPickup(model) {
    const from = model.position.clone();
    const body = rom.player;
    const offset = Math.atan2(from.x - body.position.x, from.z - body.position.z) - body.rotation.y;
    state.pickupMotion = {model, from, turn:Math.atan2(Math.sin(offset), Math.cos(offset)), time:0};
  }

  function updatePickup(dt) {
    const motion = state.pickupMotion;
    if (!motion) return;
    motion.time += dt;
    const t = Math.min(1, motion.time / .64);
    const reach = Math.sin(t * Math.PI);
    torso.rotation.y = motion.turn * reach;
    torso.rotation.x = .54 * reach;
    torso.position.y = -.25 * reach;
    rightArm.rotation.x = -1.08 * reach;
    if (t >= .31) {
      rightArm.localToWorld(handPoint.set(.025, -.42, .03));
      motion.model.position.lerpVectors(motion.from, handPoint, Math.min(1, (t - .31) / .24));
      motion.model.scale.setScalar(1 - Math.max(0, (t - .79) / .21));
    }
    if (t === 1) cancelPickup();
  }

  function cancelPickup() {
    if (!state.pickupMotion) return;
    state.pickupMotion.model.removeFromParent();
    state.pickupMotion = null;
  }

  function startDrink(id) {
    game.itemModels.build(id, rom.drinkProp);
    state.drinkMotion = {id, time:0};
  }

  function updateDrink(dt) {
    const motion = state.drinkMotion;
    if (!motion) return;
    motion.time += dt;
    const t = Math.min(1, motion.time / 1.4);
    const lift = Math.min(1, t / .29, (1 - t) / .29);
    rightArm.rotation.x = -2.63 * lift;
    rightArm.rotation.z = -.47 * lift;
    rom.drinkProp.rotation.x = 1.25 * lift;
    rom.firstHeld.position.set(.22 - .19 * lift, -.21 + .13 * lift, -.69 + .31 * lift);
    rom.firstHeld.rotation.x = 1.16 * lift;
    if (t === 1) { cancelDrink(); audio.play('burp'); }
  }

  function cancelDrink() {
    rom.drinkProp.clear();
    state.drinkMotion = null;
    rom.firstHeld.position.set(.22, -.21, -.69);
    rom.firstHeld.rotation.x = 0;
    game.equipment.refresh();
  }

  function update(dt) {
    updateBody();
    updateEmote(dt);
    updatePickup(dt);
    updateDrink(dt);
  }

  function reset() {
    cancelPickup();
    if (state.drinkMotion) cancelDrink();
    state.emote = null;
    for (const {arm} of limbs) arm.rotation.z = 0;
    updateEmote(0);
  }

  return {startEmote, stopEmote, startPickup, startDrink, update, updateEmote, reset};
}
