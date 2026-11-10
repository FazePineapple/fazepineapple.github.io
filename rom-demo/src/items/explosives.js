import {beepInterval, blastDamage} from '../combat/blast.js';

/**
 * Planted explosives (issue #73, C4). An item with `explosive:{fuse, radius,
 * damage}` and `use.action:'plant'` is put down in front of Rom, blinks red
 * and beeps faster and faster, then explodes: bots in range are hurt and
 * thrown by distance, Rom takes damage (and can die) if he is too close, and
 * other charges caught in the blast go off too. Emits 'explosive:planted'
 * and 'explosive:detonated'.
 */
export function createExplosives(game) {
  const {T, scene, items, itemModels, collision, audio, combat, rom, state} = game;
  const charges = [];
  const ledShape = new T.SphereGeometry(.022, 8, 6);
  const ledOff = new T.MeshBasicMaterial({color:0x3a0b0b});
  const ledOn = new T.MeshBasicMaterial({color:0xff2a1f});
  // Fireball (hot core + orange shell) and a cluster of rising smoke puffs, recycled.
  const ball = new T.SphereGeometry(1, 16, 12);
  const PUFFS = 7;
  const flashes = Array.from({length:4}, () => {
    const meshFor = (color, additive) => {
      const model = new T.Mesh(ball, new T.MeshBasicMaterial({color, transparent:true, depthWrite:false,
        blending:additive ? T.AdditiveBlending : T.NormalBlending}));
      model.visible = false; scene.add(model);
      return model;
    };
    const smoke = Array.from({length:PUFFS}, () => ({model:meshFor(0x3a3532), drift:new T.Vector3(), size:1}));
    return {core:meshFor(0xfff0a8, true), fire:meshFor(0xff8a2a), smoke, origin:new T.Vector3(), life:0, radius:1};
  });
  let nextFlash = 0;
  const centre = new T.Vector3();

  function plant(id, x, y, z, facing = 0) {
    const {fuse = 10, radius = 7, damage = 120} = items[id].explosive ?? {};
    const model = new T.Group();
    model.position.set(x, y, z);
    model.rotation.y = facing;
    itemModels.build(id, model);
    const led = new T.Mesh(ledShape, ledOn);
    led.position.set(.05, .135, .07);
    model.add(led);
    scene.add(model);
    const charge = {id, model, led, time:fuse, fuse, radius, damage, beep:0, blink:.08};
    charges.push(charge);
    audio.play('beep');
    game.bus.emit('explosive:planted', {id});
    return charge;
  }

  function explode(charge) {
    charges.splice(charges.indexOf(charge), 1);
    charge.model.removeFromParent();
    const {hits, hurt} = blast(charge.model.position, charge.radius, charge.damage);
    game.bus.emit('explosive:detonated', {id:charge.id, hits:hits.length, playerDamage:hurt});
  }

  /**
   * A blast at `p` (C4, a burning car): fireball and smoke, bots and Rom hurt
   * and thrown by distance, the car damaged, nearby charges set off.
   * Returns {hits, hurt}.
   */
  function blast(p, radius, damage, label = 'Sprogimas') {
    audio.play('explosion');
    const flash = flashes[nextFlash++ % flashes.length];
    flash.origin.copy(p); flash.core.position.copy(p); flash.fire.position.copy(p);
    flash.life = 1; flash.radius = Math.min(radius, 8);
    for (const puff of flash.smoke) {
      const angle = Math.random() * Math.PI * 2, out = .4 + Math.random() * .8;
      puff.drift.set(Math.cos(angle) * out, .9 + Math.random() * 1.1, Math.sin(angle) * out);
      puff.size = .6 + Math.random() * .5;
      puff.model.position.copy(p).addScaledVector(puff.drift, .4);
    }
    // Bots: damage and knock-back by distance, not through walls.
    const hits = combat.explode(p, radius, damage);
    // Rom (also inside the car): hurt by distance from his chest.
    centre.copy(rom.player.position); centre.y += .9;
    const distance = centre.distanceTo(p);
    const hurt = collision.clearPath(p, rom.player.position) ? blastDamage(distance, radius, damage) : 0;
    if (hurt) game.damage(hurt, label);
    // The car takes a beating too (and may catch fire).
    game.vehicles?.blast(p, radius, damage);
    // Chain reaction: nearby charges go off a moment later.
    for (const other of charges) {
      if (other.model.position.distanceTo(p) < radius * .6) other.time = Math.min(other.time, .18);
    }
    if (hits.length) game.notice(label + ' · ' + hits.join(', '));
    else if (!hurt) game.notice(label + '!');
    return {hits, hurt};
  }

  function update(dt) {
    for (const charge of [...charges]) {
      charge.time -= dt;
      if (charge.time <= 0) { explode(charge); continue; }
      charge.beep -= dt;
      charge.blink = Math.max(0, charge.blink - dt);
      if (charge.beep <= 0) {
        charge.beep = beepInterval(charge.time, charge.fuse);
        charge.blink = Math.min(.09, charge.beep * .5);
        audio.play('beep');
      }
      charge.led.material = charge.blink > 0 || charge.time < .6 ? ledOn : ledOff;
    }
    for (const flash of flashes) {
      if (!flash.life) continue;
      flash.life = Math.max(0, flash.life - dt * .9);
      const age = 1 - flash.life, r = flash.radius;
      const grow = Math.min(1, age * 8);
      flash.fire.scale.setScalar(Math.max(.01, r * .42 * grow));
      flash.fire.material.opacity = Math.max(0, .9 - age * 3);
      flash.fire.visible = flash.fire.material.opacity > 0;
      flash.core.scale.setScalar(Math.max(.01, r * .26 * grow));
      flash.core.material.opacity = Math.max(0, 1 - age * 5);
      flash.core.visible = flash.core.material.opacity > 0;
      for (const puff of flash.smoke) {
        puff.model.position.addScaledVector(puff.drift, dt * (.6 + flash.life));
        puff.model.scale.setScalar(r * .16 * puff.size * (1 + age * 1.6));
        puff.model.material.opacity = Math.min(.8, age * 6) * flash.life;
        puff.model.visible = flash.life > 0;
      }
    }
  }

  /** Shows charges only in the part of the world that is being rendered. */
  function updateVisibility(isVisible) {
    for (const charge of charges) {
      const p = charge.model.position;
      charge.model.visible = isVisible(p.x, p.z, p.y);
    }
  }

  return {charges, plant, blast, update, updateVisibility, explode};
}
