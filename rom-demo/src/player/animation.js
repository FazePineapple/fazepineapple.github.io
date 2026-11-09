/**
 * Procedural body animation: walk cycle, falling and landing poses, climbing,
 * attack swings, emotes (wave, somersault, fall, laugh, fart, pee), picking
 * items up and drinking.
 */
export const emoteDurations = {wave:1.65, flip:.85, fall:1.55, laugh:1.55, fart:.72, pee:1.55};

export function createAnimation(game) {
  const {T, state, rom, audio, collision} = game;
  const {limbs, rig, torso, rightArm} = rom;
  const handPoint = new T.Vector3();

  function startEmote(name, {atRestroom = false} = {}) {
    if (!emoteDurations[name] || state.emote || state.airborne || state.deathTime) return false;
    if (name === 'pee' && !state.meters.bladder) { game.notice('Rom does not need the WC'); return false; }
    state.emote = name; state.emoteTime = 0; state.swing = 0;
    if (name === 'fart') game.vitals.emitGas();
    if (name === 'laugh') audio.play('laugh');
    if (name === 'pee') game.vitals.relieveBladder(atRestroom);
    game.bus.emit('player:emote', {name, atRestroom});
    return true;
  }

  function updateEmote(dt) {
    rig.rotation.set(0, 0, 0); rig.position.y = 0;
    for (const drop of rom.drops) drop.visible = false;
    if (!state.emote) return;
    state.emoteTime += dt;
    const time = state.emoteTime;
    const phase = Math.min(1, time / emoteDurations[state.emote]);
    const envelope = Math.sin(Math.PI * phase);
    if (state.emote === 'wave') {
      rightArm.rotation.x = -1.8 * envelope;
      rightArm.rotation.z = (.85 + Math.sin(time * 19) * .35) * envelope;
    } else if (state.emote === 'flip') {
      rig.rotation.x = phase * Math.PI * 2;
      rig.position.y = envelope * 1.18 + (1 - Math.cos(rig.rotation.x)) * .91;
      for (const {arm, leg} of limbs) { leg.rotation.x = -envelope * .94; arm.rotation.x = -envelope * 1.2; }
    } else if (state.emote === 'fall') {
      rig.rotation.x = -Math.min(1, phase * 4, (1 - phase) * 4) * 1.47;
    } else if (state.emote === 'laugh') {
      rig.rotation.x = Math.sin(time * 19) * .11 * envelope;
      for (const {arm} of limbs) arm.rotation.x = -.7 * envelope;
    } else if (state.emote === 'fart') {
      rig.rotation.x = .25 * envelope;
      rig.position.y = -.10 * envelope;
      for (const {leg} of limbs) leg.rotation.x = -.24 * envelope;
    } else if (state.emote === 'pee') {
      for (const {arm} of limbs) arm.rotation.x = -.44 * envelope;
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
    if (phase === 1) state.emote = null;
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

  return {startEmote, startPickup, startDrink, update, updateEmote, reset};
}
