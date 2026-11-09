/**
 * EMOTES. Each entry becomes a button in the emote menu (B) unless
 * `menu:false`. To add one, give it a Lithuanian `label`, a `duration` in
 * seconds and a `pose(body)` that rotates Rom's parts:
 *
 *   body.rig      whole body (rotation.x > 0 leans forward; position.y lifts)
 *   body.torso    upper body
 *   body.limbs    [{leg, arm, side}] for the left (side −1) and right (side +1)
 *                 arm/leg.rotation.x < 0 swings forward/up; arm.rotation.z = side·k raises it sideways
 *   body.time     seconds since the emote started
 *   body.phase    0 → 1 over the duration
 *   body.envelope 0 → 1 → 0 (smooth in and out)
 *   body.hold     ramps in, holds at 1, ramps out (for poses held a while)
 *
 * Optional hooks: canStart(game, options) → false cancels with its own
 * notice; start(game, options); midpoint(game) runs once halfway;
 * `cancelable:true` lets walking interrupt it; `sound` plays on start.
 */
export const emotes = {
  wave: {
    label:'Pamojuoti', duration:1.65,
    pose({limbs, time, envelope}) {
      const arm = limbs[1].arm;
      arm.rotation.x = -1.8 * envelope;
      arm.rotation.z = (.85 + Math.sin(time * 19) * .35) * envelope;
    },
  },
  dance: {
    label:'Šokti', duration:3.4, cancelable:true,
    pose({rig, limbs, time, hold}) {
      rig.rotation.y = Math.sin(time * 5) * .6 * hold;
      rig.position.y = Math.abs(Math.sin(time * 10)) * .1 * hold;
      for (const {arm, leg, side} of limbs) {
        arm.rotation.x = (-1.1 + Math.sin(time * 10 + side) * .7) * hold;
        arm.rotation.z = side * (.5 + Math.sin(time * 10) * .35) * hold;
        leg.rotation.x = Math.sin(time * 10 + (side > 0 ? Math.PI : 0)) * .35 * hold;
      }
    },
  },
  clap: {
    label:'Ploti', duration:1.9, sound:'clap', cancelable:true,
    pose({limbs, time, hold}) {
      for (const {arm, side} of limbs) {
        arm.rotation.x = -1.3 * hold;
        arm.rotation.z = -side * (.22 + Math.abs(Math.sin(time * 14)) * .22) * hold;
      }
    },
  },
  salute: {
    label:'Saliutuoti', duration:1.7,
    pose({limbs, hold}) {
      const arm = limbs[1].arm;
      arm.rotation.x = -2.55 * hold;
      arm.rotation.z = -.75 * hold;
    },
  },
  shrug: {
    label:'Gūžtelėti pečiais', duration:1.3,
    pose({rig, limbs, envelope}) {
      rig.position.y = .04 * envelope;
      for (const {arm, side} of limbs) { arm.rotation.x = -.55 * envelope; arm.rotation.z = side * .55 * envelope; }
    },
  },
  flip: {
    label:'Salto', duration:.85,
    pose({rig, limbs, phase, envelope}) {
      rig.rotation.x = phase * Math.PI * 2;
      rig.position.y = envelope * 1.18 + (1 - Math.cos(rig.rotation.x)) * .91;
      for (const {arm, leg} of limbs) { leg.rotation.x = -envelope * .94; arm.rotation.x = -envelope * 1.2; }
    },
  },
  pushups: {
    label:'Atsispaudimai', duration:3.6, cancelable:true,
    pose({rig, limbs, time, hold}) {
      rig.rotation.x = 1.42 * hold;
      rig.position.y = (.18 + (Math.sin(time * 6) + 1) * .08) * hold;
      for (const {arm} of limbs) { arm.rotation.x = -1.5 * hold; arm.rotation.z = 0; }
    },
  },
  sit: {
    label:'Sėstis ant žemės', duration:4, cancelable:true,
    pose({rig, limbs, hold}) {
      rig.position.y = -.82 * hold;
      for (const {arm, leg} of limbs) { leg.rotation.x = -1.5 * hold; arm.rotation.x = -.35 * hold; }
    },
  },
  fall: {
    label:'Nugriūti', duration:1.55,
    pose({rig, phase}) { rig.rotation.x = -Math.min(1, phase * 4, (1 - phase) * 4) * 1.47; },
  },
  laugh: {
    label:'Juoktis', duration:1.55, sound:'laugh',
    pose({rig, limbs, time, envelope}) {
      rig.rotation.x = Math.sin(time * 19) * .11 * envelope;
      for (const {arm} of limbs) arm.rotation.x = -.7 * envelope;
    },
  },
  cry: {
    label:'Verkti', duration:2.3, sound:'cry', cancelable:true,
    pose({rig, limbs, time, hold}) {
      rig.rotation.x = (.22 + Math.sin(time * 17) * .04) * hold;
      for (const {arm, side} of limbs) { arm.rotation.x = -2.25 * hold; arm.rotation.z = -side * .5 * hold; }
    },
  },
  fart: {
    label:'Pabezdėti', duration:.72,
    start:game => game.vitals.emitGas(),
    pose({rig, limbs, envelope}) {
      rig.rotation.x = .25 * envelope;
      rig.position.y = -.10 * envelope;
      for (const {leg} of limbs) leg.rotation.x = -.24 * envelope;
    },
  },
  pee: {
    label:'Pasišlapinti', duration:1.55,
    canStart(game) {
      if (game.state.meters.bladder) return true;
      game.notice('Romui dabar nereikia');
      return false;
    },
    start:(game, {atRestroom}) => game.vitals.relieveBladder(atRestroom),
    pose({limbs, envelope}) { for (const {arm} of limbs) arm.rotation.x = -.44 * envelope; },
  },
  poop: {
    label:'Pasituštinti', duration:2.4,
    canStart(game) {
      if (game.state.meters.bowel >= 5) return true;
      game.notice('Romui dabar nereikia');
      return false;
    },
    midpoint:game => game.vitals.poop(),
    pose({rig, limbs, hold, time}) {
      rig.position.y = -.42 * hold;
      rig.rotation.x = (.32 + Math.sin(time * 9) * .03) * hold;
      for (const {arm, leg} of limbs) { leg.rotation.x = -1.25 * hold; arm.rotation.x = -.85 * hold; }
    },
  },
  vomit: {
    label:'Vemti', duration:1.9, menu:false,
    start:game => game.vitals.vomit(),
    pose({rig, limbs, time, hold}) {
      rig.rotation.x = (.62 + Math.sin(time * 16) * .05) * hold;
      for (const {arm} of limbs) arm.rotation.x = -.55 * hold;
    },
  },
};
