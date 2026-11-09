import {defaultThrow} from '../../content/items.js';
import {isBusy} from './state.js';

const fists = {name:'Fists', damage:18, range:2, aim:.42, cooldown:.48};

/**
 * Item actions: the primary (left click / X) action of the held item, using
 * food and drinks, throwing, melee and ranged attacks, and the continuous
 * extinguisher spray.
 */
export function createActions(game) {
  const {T, state, rom, inventory, items, equipment, audio, combat, collision, scene} = game;
  const {hotbar} = equipment;
  const UP = T.Object3D.DEFAULT_UP;

  function primaryAction() {
    const item = equipment.held;
    if (item?.weapon?.spray) return; // Spraying is continuous; see updateSpray.
    if (item?.use) useItem();
    else if (item?.throw && !item.weapon) throwItem();
    else attack();
  }

  function attack() {
    if (state.attackTime > 0 || state.climbing || isBusy(state)) return;
    const item = equipment.held;
    const weapon = item?.weapon ? {name:item.name, ...item.weapon} : fists;
    if (weapon.spray) return;
    state.attackTime = weapon.cooldown; state.swing = .26;
    if (weapon.ranged) audio.play('shot');
    game.notice(weapon.name + ' · ' + combat.attack(rom.player.position, state.yaw, weapon, state.pitch));
  }

  /** Uses one item from `index` (default: the selected hotbar slot). */
  function useItem(index = hotbar.selected) {
    if (isBusy(state)) return;
    const slot = inventory.slots[index];
    if (!slot) { game.notice('Selected slot is empty'); return; }
    const item = items[slot.id];
    if (item.weapon) {
      if (index < 9) { equipment.select(index); game.panels.close(); }
      else game.notice('Move the weapon to your hotbar');
      return;
    }
    if (!item.use) { game.notice('Use throw to toss this item'); return; }
    const id = inventory.take(index);
    game.vitals.applyEffects(item.use.effects);
    if (item.use.animation === 'drink') {
      game.animation.startDrink(id);
      game.panels.close();
    }
    if (item.use.message) game.notice(item.use.message);
    hotbar.grabbed = null;
    equipment.refresh();
    game.bus.emit('item:used', {id});
  }

  function throwItem(index = hotbar.selected) {
    if (isBusy(state) || state.climbing) return;
    const slot = inventory.slots[index];
    if (!slot) { game.notice('Selected slot is empty'); return; }
    if (items[slot.id].questItem) { game.notice('You might need this'); return; }
    const id = inventory.take(index);
    const physics = {...defaultThrow, ...items[id].throw};
    const position = rom.player.position;
    const force = new T.Vector3(-Math.sin(state.yaw), 0, -Math.cos(state.yaw));
    const x = position.x + force.x * .7, z = position.z + force.z * .7;
    force.multiplyScalar(physics.speed);
    force.y = physics.aimed ? physics.lift - Math.sin(state.pitch) * 10 : physics.lift;
    const obstructed = collision.block(x, z);
    game.pickups.spawn(id, obstructed ? position.x : x, obstructed ? position.z : z, {y:position.y + 1.28, velocity:force});
    hotbar.grabbed = null;
    equipment.refresh();
    game.bus.emit('item:thrown', {id});
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
      sprayDirection.set(0, -Math.sin(state.pitch), -Math.cos(state.pitch)).applyAxisAngle(UP, state.yaw);
      sprayOrigin.copy(rom.player.position); sprayOrigin.y += 1.36;
      if (!sprayTime) {
        sprayTime = weapon.cooldown;
        if (combat.spray(sprayOrigin, sprayDirection, weapon)) game.notice('Practice bot coughing');
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
  }

  function update(dt, sprayHeld) {
    state.attackTime = Math.max(0, state.attackTime - dt);
    state.swing = Math.max(0, state.swing - dt);
    updateSpray(dt, sprayHeld);
  }

  return {primaryAction, attack, useItem, throwItem, update, reset};
}
