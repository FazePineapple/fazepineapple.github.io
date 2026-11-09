/**
 * Body meters (bladder, gas, bowel, stomach) and timed effects (dizzy, gas,
 * bladder urge) applied by food and drinks, plus gas clouds, restroom
 * visits, pooping anywhere and vomiting after overeating.
 */
const STOMACH_LIMIT = 100;

export function createVitals(game) {
  const {T, state, rom, audio, scene, collision} = game;
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
      // The stomach may overflow past 100 for a moment: that is what triggers vomiting.
      if (effect.meter === 'stomach') meters.stomach = Math.max(0, meters.stomach + effect.add);
      else if (effect.meter) meters[effect.meter] = clampMeter(meters[effect.meter] + effect.add);
    }
  }

  /** Called after eating or drinking: too much and Rom throws up shortly after. */
  function checkStomach() {
    if (meters.stomach > STOMACH_LIMIT && !state.nausea) {
      state.nausea = 1.1;
      game.notice('Persivalgei… pykina');
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
      game.notice('Prrrt! Šalia esantys robotai dūsta');
    } else game.notice('Prrrt!');
  }

  function relieveBladder(atRestroom) {
    meters.bladder = 0; state.pressureTime = 0; timers.bladder = 0;
    if (!atRestroom && game.combat.nearbyReaction(rom.player.position, 'pee')) {
      audio.play('scream'); game.notice('Robotas pamatė Romą!');
    } else game.notice(atRestroom ? 'Pasinaudota tualetu' : 'Pūslė ištuštinta');
  }

  function useRestroom() {
    if (meters.bowel) { meters.bowel = 0; game.notice('Žarnynas ištuštintas'); }
    if (meters.bladder) game.animation.startEmote('pee', {atRestroom:true});
    game.bus.emit('player:restroom');
  }

  /** Leaves a poop behind Rom that can be picked up and thrown (see the 'poop' emote). */
  function poop() {
    const {position, rotation} = rom.player;
    const x = position.x - Math.sin(rotation.y) * .32, z = position.z - Math.cos(rotation.y) * .32;
    meters.bowel = 0;
    game.pickups.spawn('poop', collision.block(x, z) ? position.x : x, collision.block(x, z) ? position.z : z, {y:position.y});
    audio.play('fart');
    if (game.combat.nearbyReaction(position, 'pee')) { audio.play('scream'); game.notice('Robotas pamatė Romą!'); }
    else game.notice('Palengvėjo · Kakutį galima pakelti ir mesti');
    game.bus.emit('player:pooped');
  }

  // Vomit: a short burst of particles and a puddle that fades away.
  const chunkShape = new T.SphereGeometry(.035, 5, 4);
  const chunkMaterial = new T.MeshLambertMaterial({color:0xb7b04a});
  const chunks = Array.from({length:26}, () => {
    const mesh = new T.Mesh(chunkShape, chunkMaterial);
    mesh.visible = false; scene.add(mesh);
    return {mesh, velocity:new T.Vector3(), life:0};
  });
  const puddleMaterial = new T.MeshBasicMaterial({color:0x9d9a3c, transparent:true, opacity:.85, depthWrite:false});
  const puddles = Array.from({length:4}, () => {
    const mesh = new T.Mesh(new T.CircleGeometry(.42, 18), puddleMaterial.clone());
    mesh.rotation.x = -Math.PI / 2; mesh.visible = false; scene.add(mesh);
    return {mesh, life:0};
  });
  let nextPuddle = 0, spew = 0;
  const mouth = new T.Vector3(), heading = new T.Vector3();

  function vomit() {
    state.nausea = 0;
    meters.stomach = 45;
    state.stamina = Math.max(0, state.stamina - 30);
    timers.dizzy = Math.max(timers.dizzy, 4);
    spew = .9;
    audio.play('vomit');
    const {position, rotation} = rom.player;
    heading.set(Math.sin(rotation.y), -.35, Math.cos(rotation.y)).normalize();
    mouth.copy(position); mouth.y += 1.25;
    if (game.combat.spray(mouth, heading, {damage:10, range:2.8, aim:.55})) game.notice('Fui! Robotas apvemtas');
    else game.notice('Fui…');
    const puddle = puddles[nextPuddle++ % puddles.length];
    const px = position.x + Math.sin(rotation.y) * .9, pz = position.z + Math.cos(rotation.y) * .9;
    puddle.mesh.position.set(px, collision.groundAt(px, pz) + .03, pz);
    puddle.life = 30;
    game.damage(5);
    game.bus.emit('player:vomited');
  }

  function updateVomit(dt) {
    if (spew > 0) {
      spew = Math.max(0, spew - dt);
      const {position, rotation} = rom.player;
      for (const chunk of chunks) {
        if (chunk.life || Math.random() > .35) continue;
        chunk.mesh.position.set(position.x + Math.sin(rotation.y) * .25, position.y + 1.25, position.z + Math.cos(rotation.y) * .25);
        chunk.velocity.set(Math.sin(rotation.y) * 2.6 + (Math.random() - .5), .3 + Math.random() * .6, Math.cos(rotation.y) * 2.6 + (Math.random() - .5));
        chunk.life = .9;
      }
    }
    for (const chunk of chunks) {
      if (!chunk.life) { chunk.mesh.visible = false; continue; }
      chunk.life = Math.max(0, chunk.life - dt);
      chunk.velocity.y -= 9.8 * dt;
      chunk.mesh.position.addScaledVector(chunk.velocity, dt);
      const p = chunk.mesh.position;
      if (p.y < collision.groundAt(p.x, p.z)) chunk.life = 0;
      chunk.mesh.visible = chunk.life > 0;
    }
    for (const puddle of puddles) {
      if (!puddle.life) { puddle.mesh.visible = false; continue; }
      puddle.life = Math.max(0, puddle.life - dt);
      puddle.mesh.visible = true;
      puddle.mesh.material.opacity = Math.min(.85, puddle.life / 6);
    }
  }

  function update(dt) {
    for (const key of Object.keys(timers)) timers[key] = Math.max(0, timers[key] - dt);
    state.gasDelay = Math.max(0, state.gasDelay - dt);
    if (timers.gas) meters.gas = Math.min(100, meters.gas + dt * 4);
    meters.stomach = Math.max(0, meters.stomach - dt * .8);
    if (state.nausea) {
      state.nausea = Math.max(0, state.nausea - dt);
      if (!state.nausea && !game.animation.startEmote('vomit', {force:true})) state.nausea = .3;
    }
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
      game.damage(4, 'Pilna pūslė');
    }
    updateVomit(dt);
    game.hud.setEffects([
      timers.dizzy && 'Svaigsta galva',
      meters.gas >= 32 && 'Pučia pilvą',
      meters.stomach >= 80 && 'Pilnas skrandis',
      (meters.bladder >= 70 || meters.bowel >= 55) && 'Reikia į tualetą',
    ].filter(Boolean).join(' · '));
  }

  function reset() {
    for (const key of Object.keys(timers)) timers[key] = 0;
    for (const key of Object.keys(meters)) meters[key] = 0;
    state.pressureTime = 0; state.gasDelay = 0; state.puffTime = 0; state.nausea = 0;
    rom.gasCloud.visible = false;
    spew = 0;
    for (const chunk of chunks) { chunk.life = 0; chunk.mesh.visible = false; }
  }

  return {applyEffects, checkStomach, emitGas, relieveBladder, useRestroom, poop, vomit, update, reset};
}
