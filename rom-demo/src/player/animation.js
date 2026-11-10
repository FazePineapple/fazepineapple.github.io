import {emotes} from './emotes.js';
import {CROUCH_DROP, crouchLegAngle} from './stance.js';

/**
 * Procedural body animation: walk cycle, crouching, falling and landing poses, climbing,
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
    if (!def || state.airborne || state.deathTime || state.seat || state.vehicle) return false;
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
    rom.held.rotation.set(0, 0, 0);
    if (state.attack) poseAttack();
  }

  // Attack animations by weapon `animation`: 'stab' (dagger), 'punch' (fists),
  // 'swing' (other melee) and 'recoil' (blaster and other ranged weapons).
  const attackDurations = {stab:.42, punch:.3, swing:.36, recoil:.25};
  function startAttack(type = 'swing') {
    state.attack = {type, time:0, duration:attackDurations[type] ?? .36};
    state.swing = 0;
  }
  function poseAttack() {
    const {type, time, duration} = state.attack;
    const t = Math.min(1, time / duration);
    const first = rom.firstHeld, hands = rom.firstHands;
    if (type === 'stab') {
      // Wind up (pull the blade back and turn), then lunge forward.
      const wind = t < .35 ? Math.sin(t / .35 * Math.PI / 2) : Math.max(0, 1 - (t - .35) / .15);
      const thrust = t >= .35 ? Math.sin(Math.min(1, (t - .35) / .5) * Math.PI) : 0;
      rightArm.rotation.x = .75 * wind - 1.65 * thrust;
      rightArm.rotation.z = -.25 * thrust;
      rom.held.rotation.x = -1.35 * thrust;
      torso.rotation.y = -.4 * wind + .35 * thrust;
      torso.rotation.x += .18 * thrust;
      limbs[0].arm.rotation.x = .4 * thrust;
      first.position.z = -.69 - .32 * thrust + .12 * wind;
      first.rotation.x = -.6 * thrust;
      hands.position.z = -.18 * thrust;
    } else if (type === 'punch') {
      const jab = Math.sin(t * Math.PI);
      rightArm.rotation.x = -1.6 * jab;
      torso.rotation.y = .3 * jab;
      hands.position.z = -.22 * jab;
    } else if (type === 'recoil') {
      const kick = t < .2 ? t / .2 : 1 - (t - .2) / .8;
      rightArm.rotation.x = -1.45 + .35 * kick;
      first.position.z = -.69 + .08 * kick;
      first.rotation.x = .25 * kick;
    } else {
      const arc = Math.sin(t * Math.PI);
      rightArm.rotation.x = -1.9 * arc;
      rightArm.rotation.z = (t - .5) * -1.4 * arc;
      torso.rotation.y = .35 * (t - .5) * arc * 2;
      first.rotation.z = (t - .5) * 1.2 * arc;
    }
  }
  function updateAttack(dt) {
    if (!state.attack) return;
    state.attack.time += dt;
    if (state.attack.time < state.attack.duration) return;
    state.attack = null;
    rom.firstHeld.position.z = -.69; rom.firstHeld.rotation.set(0, 0, 0);
    rom.firstHands.position.z = 0;
  }

  /**
   * Reach down and take an item. `onGrab` runs when the hand closes on it, so
   * the item only enters the inventory (and Rom's hand) at that moment.
   */
  function startPickup(model, onGrab = null) {
    const from = model.position.clone();
    const body = rom.player;
    const offset = Math.atan2(from.x - body.position.x, from.z - body.position.z) - body.rotation.y;
    state.pickupMotion = {model, from, onGrab, turn:Math.atan2(Math.sin(offset), Math.cos(offset)), time:0};
    rom.held.visible = false; // Empty hand while reaching.
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
    if (t >= .55) grab(motion);
    if (t === 1) cancelPickup();
  }

  function grab(motion) {
    if (motion.grabbed) return;
    motion.grabbed = true;
    motion.onGrab?.();
  }

  function cancelPickup() {
    const motion = state.pickupMotion;
    if (!motion) return;
    grab(motion);
    motion.model.removeFromParent();
    state.pickupMotion = null;
    game.equipment.refresh();
  }

  /** Eat or drink item `id` from Rom's hand ('eat' takes bites, 'drink' tips it back). */
  function startConsume(id, kind = 'drink') {
    rom.drinkProp.clear();
    game.itemModels.build(id, rom.drinkProp);
    rom.drinkProp.scale.setScalar(1);
    state.drinkMotion = {id, kind, time:0, bites:0};
    game.equipment.refresh();
  }

  function updateConsume(dt) {
    const motion = state.drinkMotion;
    if (!motion) return;
    motion.time += dt;
    if (motion.kind === 'eat') {
      const duration = 1.7;
      const t = Math.min(1, motion.time / duration);
      const lift = Math.min(1, t / .2, (1 - t) / .14);
      // Three bites: the hand bobs to the mouth and the food gets smaller.
      const bites = Math.min(3, Math.floor(Math.max(0, t - .18) / .22) + (t > .18 ? 1 : 0));
      const bob = t > .18 && t < .86 ? Math.abs(Math.sin((t - .18) / .22 * Math.PI)) : 0;
      if (bites > motion.bites) { motion.bites = bites; audio.play('chew'); }
      rightArm.rotation.x = -2.35 * lift + .25 * bob;
      rightArm.rotation.z = -.62 * lift;
      rom.drinkProp.rotation.x = .4 * lift;
      rom.drinkProp.scale.setScalar(Math.max(.15, 1 - motion.bites * .27));
      rom.head && (rom.head.rotation.x = .12 * bob);
      rom.firstHeld.position.set(.22 - .2 * lift, -.21 + .1 * lift - .03 * bob, -.69 + .3 * lift);
      rom.firstHeld.rotation.x = .5 * lift;
      rom.firstHeld.scale.setScalar(.68 * Math.max(.15, 1 - motion.bites * .27));
      if (t === 1) cancelConsume();
      return;
    }
    const t = Math.min(1, motion.time / 1.4);
    const lift = Math.min(1, t / .29, (1 - t) / .29);
    rightArm.rotation.x = -2.63 * lift;
    rightArm.rotation.z = -.47 * lift;
    rom.drinkProp.rotation.x = 1.25 * lift;
    rom.firstHeld.position.set(.22 - .19 * lift, -.21 + .13 * lift, -.69 + .31 * lift);
    rom.firstHeld.rotation.x = 1.16 * lift;
    if (t === 1) { cancelConsume(); audio.play('burp'); }
  }

  function cancelConsume() {
    rom.drinkProp.clear();
    rom.drinkProp.scale.setScalar(1);
    state.drinkMotion = null;
    rom.firstHeld.position.set(.22, -.21, -.69);
    rom.firstHeld.rotation.set(0, 0, 0);
    rom.firstHeld.scale.setScalar(.68);
    game.equipment.refresh();
  }

  // Crouch: hips drop, one leg forward and one back (feet stay on the
  // ground), torso leans in. Applied after updateEmote, which resets the rig.
  const crouchAngle = crouchLegAngle();
  function updateCrouch() {
    const c = state.crouch;
    if (c < .001 || state.seat || state.vehicle || (state.emote && state.emote !== 'fart')) return;
    rig.position.y = -CROUCH_DROP * c;
    const step = state.moving ? Math.sin(state.stride) * .3 : 0;
    for (const {leg, arm, side} of limbs) {
      leg.rotation.x = T.MathUtils.lerp(leg.rotation.x, side * crouchAngle + step, c);
      if (arm !== rightArm || (!state.swing && !state.attack && !state.pickupMotion && !state.drinkMotion))
        arm.rotation.x = T.MathUtils.lerp(arm.rotation.x, -.35 - step * side * .5, c);
    }
    torso.rotation.x += .32 * c;
  }

  // Kick (issue #72): the leg on the right-arm side winds back, then snaps
  // forward while the torso leans back and the arms swing for balance.
  const kicker = limbs.find(limb => limb.arm === rightArm) ?? limbs[0];
  function updateKick() {
    if (!state.kick) return;
    const t = Math.min(1, state.kick.time / .42);
    const back = t < .3 ? Math.sin(t / .3 * Math.PI) * .45 : 0;
    const out = t > .2 ? Math.sin(Math.min(1, (t - .2) / .8) * Math.PI) : 0;
    kicker.leg.rotation.x = back - 1.65 * out;
    for (const {arm, side} of limbs) { arm.rotation.x = .5 * out * (arm === rightArm ? 1 : -1); arm.rotation.z = side * .5 * out; }
    torso.rotation.x -= .22 * out;
  }

  function update(dt) {
    updateAttack(dt);
    updateBody();
    updateEmote(dt);
    updateCrouch();
    updateKick();
    updatePickup(dt);
    updateConsume(dt);
  }

  function reset() {
    cancelPickup();
    if (state.drinkMotion) cancelConsume();
    state.attack = null;
    state.emote = null;
    for (const {arm} of limbs) arm.rotation.z = 0;
    updateEmote(0);
  }

  return {startEmote, stopEmote, startPickup, startConsume, startAttack, update, updateEmote, reset};
}
