import {defaultThrow} from '../../content/items.js';
import {isBusy} from './state.js';

const fists = {name:'Kumščiai', damage:18, range:2, aim:.42, cooldown:.48, animation:'punch'};

/**
 * Item actions: the primary (left click / X) action of the held item, using
 * food and drinks, throwing (aimed where the camera looks), melee and
 * hitscan attacks, projectile weapons (the straw) and the continuous
 * extinguisher spray.
 */
export function createActions(game) {
  const {T, state, rom, inventory, items, equipment, audio, combat, collision, scene} = game;
  const {hotbar} = equipment;
  const UP = T.Object3D.DEFAULT_UP;
  const aim = new T.Vector3();

  /** Unit vector where Rom is looking (camera yaw and pitch). */
  function aimDirection(target = aim) {
    return target.set(0, -Math.sin(state.pitch), -Math.cos(state.pitch)).applyAxisAngle(UP, state.yaw);
  }

  /**
   * Light aim assist for thrown items and projectiles: if a bot is within
   * ~12° of the aim, steer the launch velocity onto it and solve the arc so
   * gravity drops it onto the bot's body.
   */
  function assistAim(origin, velocity, gravity) {
    const horizontal = Math.hypot(velocity.x, velocity.z);
    if (!horizontal) return;
    let best = null, bestAngle = .21;
    for (const target of combat.targets()) {
      const dx = target.x - origin.x, dz = target.z - origin.z, distance = Math.hypot(dx, dz);
      if (distance < .8 || distance > 22) continue;
      const angle = Math.acos(Math.min(1, Math.max(-1, (dx * velocity.x + dz * velocity.z) / (distance * horizontal))));
      if (angle < bestAngle && collision.clearPath(origin, target)) { bestAngle = angle; best = {...target, dx, dz, distance}; }
    }
    if (!best) return;
    velocity.x = best.dx / best.distance * horizontal;
    velocity.z = best.dz / best.distance * horizontal;
    const time = best.distance / horizontal;
    velocity.y = (best.y - origin.y + .5 * gravity * time * time) / time;
  }

  function primaryAction() {
    const item = equipment.held;
    if (item?.weapon?.spray) return; // Spraying is continuous; see updateSpray.
    if (item?.camera) game.photos.take();
    else if (item?.weapon?.projectile) shoot(item);
    else if (item?.use) useItem();
    else if (item?.throw && !item.weapon) throwItem();
    else attack();
  }

  function attack() {
    if (state.attackTime > 0 || state.climbing || isBusy(state)) return;
    const item = equipment.held;
    const weapon = item?.weapon ? {name:item.name, ...item.weapon} : fists;
    if (weapon.spray) return;
    state.attackTime = weapon.cooldown;
    game.animation.startAttack(weapon.animation ?? (weapon.ranged ? 'recoil' : 'swing'));
    if (weapon.ranged) audio.play('shot');
    else audio.play('swish');
    game.notice(weapon.name + ' · ' + combat.attack(rom.player.position, state.yaw, weapon, state.pitch));
  }

  /** Uses one item from `index` (default: the selected hotbar slot). */
  function useItem(index = hotbar.selected) {
    if (isBusy(state)) return;
    const slot = inventory.slots[index];
    if (!slot) { game.notice('Pasirinktas langelis tuščias'); return; }
    const item = items[slot.id];
    if (item.weapon) {
      if (index < 9) { equipment.select(index); game.panels.close(); }
      else game.notice('Perkelk ginklą į greitąją juostą');
      return;
    }
    if (!item.use) { game.notice('Šį daiktą galima tik mesti (Q)'); return; }
    if (item.use.action === 'sit') { placeAndSit(index); return; }
    if (item.use.action === 'plant') { plant(index); return; }
    const id = inventory.take(index);
    game.vitals.applyEffects(item.use.effects);
    if (item.use.animation) {
      game.animation.startConsume(id, item.use.animation);
      game.panels.close();
    }
    if (item.use.message) game.notice(item.use.message);
    hotbar.grabbed = null;
    equipment.refresh();
    game.bus.emit('item:used', {id});
    game.vitals.checkStomach();
  }

  /** Puts furniture (a chair) down in front of Rom and sits on it. */
  function placeAndSit(index) {
    const {x, y, z} = rom.player.position;
    if (state.airborne || state.climbing || collision.roofAt(x, z, y)) { game.notice('Čia kėdės nepastatysi'); return; }
    const forward = aimDirection(new T.Vector3()).setY(0).normalize();
    const px = x + forward.x * .9, pz = z + forward.z * .9;
    if (collision.block(px, pz)) { game.notice('Per mažai vietos kėdei'); return; }
    const id = inventory.take(index);
    hotbar.grabbed = null;
    game.panels.close();
    const pickup = game.pickups.spawn(id, px, pz, {facing:Math.atan2(forward.x, forward.z) + Math.PI});
    equipment.refresh();
    game.seating.sit(pickup);
  }

  /** Puts an explosive (C4) down in front of Rom and arms it. */
  function plant(index) {
    if (state.airborne || state.climbing || state.seat) { game.notice('Čia sprogmens nepadėsi'); return; }
    const {x, y, z} = rom.player.position;
    const forward = aimDirection(new T.Vector3()).setY(0).normalize();
    let px = x + forward.x * .7, pz = z + forward.z * .7;
    if (collision.block(px, pz)) { px = x; pz = z; }
    const id = inventory.take(index);
    hotbar.grabbed = null;
    game.panels.close();
    state.swing = .26;
    game.explosives.plant(id, px, y, pz, Math.atan2(forward.x, forward.z));
    equipment.refresh();
    game.notice(items[id].name + ' padėtas · Bėk! Sprogs po ' + (items[id].explosive?.fuse ?? 10) + ' s');
  }

  function throwItem(index = hotbar.selected) {
    if (isBusy(state) || state.climbing || state.seat) return;
    const slot = inventory.slots[index];
    if (!slot) { game.notice('Pasirinktas langelis tuščias'); return; }
    if (items[slot.id].questItem) { game.notice('Šito dar gali prireikti'); return; }
    const id = inventory.take(index);
    const physics = {...defaultThrow, ...items[id].throw};
    const position = rom.player.position;
    const direction = aimDirection(new T.Vector3());
    const velocity = direction.clone().multiplyScalar(physics.speed);
    velocity.y += physics.lift;
    let x = position.x + direction.x * .55, z = position.z + direction.z * .55;
    if (collision.block(x, z)) { x = position.x; z = position.z; }
    assistAim({x, y:position.y + 1.4, z}, velocity, physics.gravity);
    game.pickups.spawn(id, x, z, {y:position.y + 1.4, velocity});
    state.swing = .26;
    hotbar.grabbed = null;
    equipment.refresh();
    game.bus.emit('item:thrown', {id});
  }

  // Projectiles (spitballs, rubber bands, glue, paper planes): a recycled pool.
  const shots = [];
  const shotShape = new T.SphereGeometry(1, 7, 5);
  const planeShape = (() => {
    // A folded paper plane pointing along +z.
    const geometry = new T.BufferGeometry();
    geometry.setAttribute('position', new T.Float32BufferAttribute([0,0,.18, -.13,0,-.12, 0,-.02,-.08,  0,0,.18, 0,-.02,-.08, .13,0,-.12,  0,0,.18, 0,-.06,-.1, 0,-.02,-.08], 3));
    geometry.computeVertexNormals();
    return geometry;
  })();
  const previous = new T.Vector3(), steer = new T.Vector3(), forwardAxis = new T.Vector3(0, 0, 1);
  function shoot(item) {
    if (state.attackTime > 0 || state.climbing || isBusy(state)) return;
    const {projectile, damage, cooldown} = item.weapon;
    state.attackTime = cooldown;
    game.animation.startAttack('recoil');
    const plane = projectile.model === 'plane';
    let shot = shots.find(entry => !entry.life && entry.plane === plane);
    if (!shot) {
      shot = {plane, model:new T.Mesh(plane ? planeShape : shotShape, new T.MeshLambertMaterial({color:projectile.color ?? 0xffffff, side:T.DoubleSide})), velocity:new T.Vector3(), life:0};
      scene.add(shot.model);
      shots.push(shot);
    }
    shot.model.scale.setScalar(plane ? 1 : projectile.size ?? .06);
    shot.model.material.color.setHex(projectile.color ?? 0xffffff);
    shot.model.position.copy(rom.player.position).add(aim.set(0, 1.62, 0)).addScaledVector(aimDirection(), .45);
    shot.velocity.copy(aimDirection()).multiplyScalar(projectile.speed);
    assistAim(shot.model.position, shot.velocity, projectile.gravity ?? 0);
    shot.damage = damage; shot.gravity = projectile.gravity ?? 0; shot.name = item.name;
    shot.stun = projectile.stun ?? 0; shot.homing = projectile.homing ?? 0; shot.speed = projectile.speed;
    shot.life = projectile.life ?? 2.5; shot.model.visible = true;
    audio.play(plane ? 'swish' : 'spit');
  }
  function updateShots(dt) {
    for (const shot of shots) {
      if (!shot.life) continue;
      shot.life = Math.max(0, shot.life - dt);
      const p = shot.model.position;
      previous.copy(p);
      if (shot.homing) {
        // Paper planes turn toward the nearest bot ahead.
        let best = null, bestDistance = 25;
        for (const target of combat.targets()) {
          const distance = Math.hypot(target.x - p.x, target.y - p.y, target.z - p.z);
          if (distance < bestDistance) { bestDistance = distance; best = target; }
        }
        if (best) {
          steer.set(best.x - p.x, best.y - p.y, best.z - p.z).normalize().multiplyScalar(shot.speed);
          shot.velocity.lerp(steer, Math.min(1, shot.homing * dt)).setLength(shot.speed);
        }
      }
      shot.velocity.y -= shot.gravity * dt;
      p.addScaledVector(shot.velocity, dt);
      if (shot.plane) shot.model.quaternion.setFromUnitVectors(forwardAxis, steer.copy(shot.velocity).normalize());
      const hit = combat.hitWithProp(previous, p, shot.damage, {source:'shot', radius:shot.plane ? .15 : .05, stun:shot.stun});
      if (hit) {
        game.notice(shot.name + ' · ' + hit.name + (hit.stunned && hit.hp ? ' prilipo!' : hit.hp ? ' · ' + hit.hp + ' GY' : ' nugalėtas'));
        shot.life = 0;
      }
      if (p.y < collision.groundAt(p.x, p.z) || (p.y < 11 && collision.block(p.x, p.z))) shot.life = 0;
      shot.model.visible = shot.life > 0;
    }
  }

  // Extinguisher foam: a pool of puffs recycled round-robin.
  let sprayTime = 0, soundTime = 0, puffDelay = 0, nextPuff = 0;
  const sprayDirection = new T.Vector3(), sprayOrigin = new T.Vector3();
  const foamShape = new T.SphereGeometry(.15, 7, 5);
  const puffs = Array.from({length:32}, () => {
    const model = new T.Mesh(foamShape, new T.MeshBasicMaterial({color:0xe4f5ff, transparent:true, depthWrite:false}));
    model.visible = false; scene.add(model);
    return {model, velocity:new T.Vector3(), life:0};
  });

  function updateSpray(dt, held) {
    const weapon = equipment.held?.weapon;
    const spraying = weapon?.spray && held && !state.climbing && !isBusy(state);
    sprayTime = Math.max(0, sprayTime - dt);
    soundTime = Math.max(0, soundTime - dt);
    puffDelay = Math.max(0, puffDelay - dt);
    if (spraying) {
      aimDirection(sprayDirection);
      sprayOrigin.copy(rom.player.position); sprayOrigin.y += 1.36;
      if (!sprayTime) {
        sprayTime = weapon.cooldown;
        if (combat.spray(sprayOrigin, sprayDirection, weapon)) game.notice('Robotas kosti');
      }
      if (!soundTime) { audio.play('foam'); soundTime = .45; }
      if (!puffDelay) {
        puffDelay = .035;
        const puff = puffs[nextPuff++ % puffs.length];
        puff.model.position.copy(sprayOrigin).addScaledVector(sprayDirection, .35);
        puff.velocity.copy(sprayDirection).multiplyScalar(8);
        puff.velocity.x += (Math.random() - .5) * 2.4;
        puff.velocity.y += (Math.random() - .5) * 1.7;
        puff.velocity.z += (Math.random() - .5) * 2.4;
        puff.life = .68;
      }
    }
    for (const puff of puffs) {
      if (!puff.life) continue;
      puff.life = Math.max(0, puff.life - dt);
      const p = puff.model.position;
      p.addScaledVector(puff.velocity, dt);
      if (collision.block(p.x, p.z) || p.y < collision.groundAt(p.x, p.z)) puff.life = 0;
      puff.model.visible = puff.life > 0;
      puff.model.material.opacity = puff.life * .47;
      puff.model.scale.setScalar(1 + (1 - puff.life / .68) * 3.6);
    }
  }

  function reset() {
    for (const puff of puffs) { puff.life = 0; puff.model.visible = false; }
    for (const shot of shots) { shot.life = 0; shot.model.visible = false; }
    state.kick = null;
  }

  // Kick (issue #72): Rom turns to where the camera looks and swings a leg;
  // the hit lands when the foot is out (see updateKick).
  const KICK_TIME = .42, KICK_HIT = .15;
  const kickDirection = new T.Vector3();
  function kick() {
    if (state.kick || state.attackTime > 0 || state.climbing || state.airborne || state.seat || state.jetpack || isBusy(state)) return;
    state.kick = {time:0, hit:false};
    state.attackTime = .2;
    rom.player.rotation.y = state.yaw + Math.PI;
    audio.play('swish');
  }
  function updateKick(dt) {
    const motion = state.kick;
    if (!motion) return;
    motion.time += dt;
    if (!motion.hit && motion.time >= KICK_HIT) {
      motion.hit = true;
      kickDirection.set(-Math.sin(state.yaw), 0, -Math.cos(state.yaw));
      const result = combat.kick(rom.player.position, kickDirection);
      game.notice(result ? 'Spyris · ' + result : 'Spyris · nieko nepasiekei');
    }
    if (motion.time >= KICK_TIME) state.kick = null;
  }

  function update(dt, sprayHeld) {
    state.attackTime = Math.max(0, state.attackTime - dt);
    state.swing = Math.max(0, state.swing - dt);
    updateKick(dt);
    // Automatic weapons keep firing while the button is held.
    const held = equipment.held;
    if (sprayHeld && held?.weapon?.auto && !state.attackTime) shoot(held);
    updateSpray(dt, sprayHeld);
    updateShots(dt);
  }

  return {primaryAction, attack, kick, useItem, throwItem, update, reset, aimDirection, KICK_TIME};
}
