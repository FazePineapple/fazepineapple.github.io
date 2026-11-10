import {spawns} from '../../content/spawns.js';
import {defaultThrow} from '../../content/items.js';

/**
 * Items lying in the world: placed spawns from content/spawns.js, thrown
 * items in flight and items that have settled. Remembers which spawns were
 * collected and where dropped items lie so saves restore the world.
 */
export function createPickups(game) {
  const {T, scene, state, rom, items, itemModels, inventory, collision, interior} = game;
  const list = [];
  const collected = new Set();
  const markerShape = new T.RingGeometry(.25, .29, 20);
  const markerMaterial = new T.MeshBasicMaterial({color:0xe5f49d, side:T.DoubleSide});
  const previous = new T.Vector3(), heading = new T.Vector3();
  const UP = T.Object3D.DEFAULT_UP;

  function spawn(id, x, z, {y = collision.groundAt(x, z), velocity = null, spawnId = null, facing = null} = {}) {
    const model = new T.Group();
    scene.add(model); model.position.set(x, y, z);
    if (facing !== null) model.rotation.y = facing;
    itemModels.build(id, model);
    const marker = new T.Mesh(markerShape, markerMaterial);
    marker.rotation.x = -Math.PI / 2;
    if (items[id].sit) marker.scale.setScalar(1.8);
    marker.position.set(x, collision.groundAt(x, z) + .022, z);
    marker.visible = !velocity;
    scene.add(marker);
    const pickup = {id, model, marker, velocity, spawnId, hit:false, delay:velocity?.y ? .6 : 0};
    list.push(pickup);
    return pickup;
  }

  function remove(pickup) {
    pickup.marker.removeFromParent();
    list.splice(list.indexOf(pickup), 1);
  }

  function spawnWorld(saved) {
    for (const id of saved?.collected ?? []) collected.add(id);
    for (const entry of spawns) {
      if (collected.has(entry.id) || !game.story.meets(entry.requires)) continue;
      if (list.some(pickup => pickup.spawnId === entry.id)) continue;
      const point = entry.floor === undefined ? entry : interior.floorPoint(entry.floor, entry.x, entry.z);
      spawn(entry.item, point.x, point.z, {spawnId:entry.id, facing:entry.facing ?? null});
    }
    for (const [id, x, z, facing = null] of saved?.dropped ?? []) {
      if (items[id] && Number.isFinite(x) && Number.isFinite(z)) spawn(id, x, z, {facing});
    }
  }

  function nearest(range = 2.25, accept = () => true) {
    let best = null;
    for (const pickup of list) {
      if (pickup.delay > 0 || pickup.velocity || pickup === state.seat?.pickup || !accept(pickup)) continue;
      const distance = pickup.model.position.distanceTo(rom.player.position);
      if (distance < range) { range = distance; best = pickup; }
    }
    return best;
  }

  function pickUp(pickup = nearest()) {
    if (!pickup || state.pickupMotion || state.drinkMotion || state.emote || state.deathTime) return false;
    if (pickup === state.seat?.pickup) game.seating.stand();
    const item = items[pickup.id];
    if (!item.equipment && !inventory.canAdd(pickup.id)) { game.notice('Kuprinė pilna'); return false; }
    if (pickup.spawnId) collected.add(pickup.spawnId);
    remove(pickup);
    // The item reaches the inventory (and Rom's hand) only when the hand closes on it.
    game.animation.startPickup(pickup.model, () => {
      if (item.equipment) state.equipment[item.equipment] = true;
      else if (!inventory.add(pickup.id)) spawn(pickup.id, rom.player.position.x, rom.player.position.z);
      game.notice(item.pickupMessage ?? 'Paimta: ' + item.name);
      game.equipment.refresh();
      game.bus.emit('item:picked', {id:pickup.id, spawnId:pickup.spawnId});
    });
    game.equipment.refresh();
    return true;
  }

  function update(dt) {
    for (const pickup of list) {
      pickup.delay = Math.max(0, pickup.delay - dt);
      const {model, velocity} = pickup;
      if (!velocity) continue;
      const physics = {...defaultThrow, ...items[pickup.id].throw};
      const p = model.position;
      velocity.y -= physics.gravity * dt;
      if (collision.block(p.x + velocity.x * dt, p.z)) velocity.x *= -.35;
      if (collision.block(p.x, p.z + velocity.z * dt)) velocity.z *= -.35;
      previous.copy(p);
      p.addScaledVector(velocity, dt);
      const hit = physics.damage && !pickup.hit && velocity.lengthSq() > 4 &&
        game.combat.hitWithProp(previous, p, physics.damage, {stink:physics.stink, radius:.18});
      if (hit) {
        pickup.hit = true; velocity.multiplyScalar(-.24); velocity.y = Math.abs(velocity.y) + .6;
        game.notice(items[pickup.id].name + ' · ' + hit.name + (hit.hp ? ' · ' + hit.hp + ' GY' : ' nugalėtas'));
      }
      if (physics.pointFirst) model.quaternion.setFromUnitVectors(UP, heading.copy(velocity).normalize());
      else { model.rotation.x += dt * 7; model.rotation.z += dt * 2; }
      const floor = collision.groundAt(p.x, p.z);
      if (p.y > floor) continue;
      p.y = floor;
      if (velocity.y < -2.6) {
        velocity.y *= -.31;
        velocity.x *= .65; velocity.z *= .65;
      } else {
        pickup.velocity = null;
        model.quaternion.identity();
        model.rotation.set(0, Math.atan2(velocity.x, velocity.z) + (items[pickup.id].sit ? Math.PI : 0), 0);
        pickup.marker.position.set(p.x, floor + .022, p.z);
      }
    }
  }

  /** Shows pickups only in the part of the world that is being rendered. */
  function updateVisibility(isVisible) {
    for (const pickup of list) {
      const p = pickup.model.position;
      pickup.model.visible = isVisible(p.x, p.z, p.y);
      pickup.marker.visible = pickup.model.visible && !pickup.velocity;
    }
  }

  return {
    list, collected, spawn, spawnWorld, nearest, pickUp, update, updateVisibility,
    /** Positions of items of `id` lying in the world (for quest waypoints). */
    find:id => list.filter(pickup => pickup.id === id && !pickup.velocity).map(pickup => pickup.model.position),
    serialize:() => ({
      collected:[...collected],
      // Thrown or dropped items (untouched spawns are restored from content).
      dropped:list.filter(pickup => !pickup.spawnId).map(({id, model}) => [id, +model.position.x.toFixed(2), +model.position.z.toFixed(2), +model.rotation.y.toFixed(2)]),
    }),
  };
}
