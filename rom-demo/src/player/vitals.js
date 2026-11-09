/**
 * Body meters (bladder, gas, bowel) and timed effects (dizzy, gas, bladder
 * urge) applied by food and drinks, plus gas clouds and restroom visits.
 */
export function createVitals(game) {
  const {state, rom, audio} = game;
  const {meters, timers} = state;
  const clampMeter = value => Math.min(100, Math.max(0, value));

  /** Applies an item's `use.effects` list (see content/items.js). */
  function applyEffects(effects = []) {
    for (const effect of effects) {
      if (effect.stamina) {
        state.stamina = Math.min(100, state.stamina + effect.stamina);
        if (state.stamina >= 22) state.exhausted = false;
      }
      if (effect.health) state.health = Math.min(100, state.health + effect.health);
      if (effect.timer) timers[effect.timer] = effect.seconds;
      if (effect.meter) meters[effect.meter] = clampMeter(meters[effect.meter] + effect.add);
    }
  }

  function emitGas() {
    meters.gas = Math.max(0, meters.gas - 32);
    state.gasDelay = 2.2; state.puffTime = 1;
    const cloud = rom.gasCloud.position, body = rom.player;
    cloud.copy(body.position);
    cloud.y += .88;
    cloud.x -= Math.sin(body.rotation.y) * .41;
    cloud.z -= Math.cos(body.rotation.y) * .41;
    audio.play('fart');
    if (game.combat.nearbyReaction(cloud, 'gas')) {
      audio.play('scream');
      game.notice('Prrrt! Nearby practice bots are choking');
    } else game.notice('Prrrt!');
  }

  function relieveBladder(atRestroom) {
    meters.bladder = 0; state.pressureTime = 0; timers.bladder = 0;
    if (!atRestroom && game.combat.nearbyReaction(rom.player.position, 'pee')) {
      audio.play('scream'); game.notice('A practice bot spotted Rom!');
    } else game.notice(atRestroom ? 'Restroom used' : 'Bladder emptied');
  }

  function useRestroom() {
    if (meters.bowel) { meters.bowel = 0; game.notice('Bowel meter cleared'); }
    if (meters.bladder) game.animation.startEmote('pee', {atRestroom:true});
    game.bus.emit('player:restroom');
  }

  function update(dt) {
    for (const key of Object.keys(timers)) timers[key] = Math.max(0, timers[key] - dt);
    state.gasDelay = Math.max(0, state.gasDelay - dt);
    if (timers.gas) meters.gas = Math.min(100, meters.gas + dt * 4);
    if (!state.emote && meters.gas >= 32 && state.running && state.moving && !state.gasDelay) game.animation.startEmote('fart');
    state.puffTime = Math.max(0, state.puffTime - dt);
    rom.gasCloud.visible = state.puffTime > 0;
    rom.cloudMaterial.opacity = state.puffTime * .48;
    rom.gasCloud.scale.setScalar(1 + (1 - state.puffTime) * 2.2);
    if (state.puffTime) rom.gasCloud.position.y += dt * .25;
    if (timers.bladder) meters.bladder = Math.min(100, meters.bladder + dt * .86);
    state.pressureTime = meters.bladder >= 100 ? state.pressureTime + dt : 0;
    if (state.pressureTime >= 2) {
      state.pressureTime -= 2;
      game.damage(4, 'Bladder pressure');
    }
    game.hud.setEffects([
      timers.dizzy && 'Dizzy',
      meters.gas >= 32 && 'Gassy',
      (meters.bladder >= 70 || meters.bowel >= 55) && 'Needs the WC',
    ].filter(Boolean).join(' · '));
  }

  function reset() {
    for (const key of Object.keys(timers)) timers[key] = 0;
    for (const key of Object.keys(meters)) meters[key] = 0;
    state.pressureTime = 0; state.gasDelay = 0; state.puffTime = 0;
    rom.gasCloud.visible = false;
  }

  return {applyEffects, emitGas, relieveBladder, useRestroom, update, reset};
}
