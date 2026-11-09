import {zones} from '../../content/zones.js';

/**
 * Works out which named zone (content/zones.js) Rom is in, shows it on the
 * HUD and emits 'zone:entered' {zone, area, previous} when it changes.
 */
export function createZones(game) {
  const {collision, interior, campus} = game;
  const byId = new Map(zones.map(zone => [zone.id, zone]));
  let current = null;

  function context(x, z, y) {
    const area = collision.areaOf(x, z, y);
    if (area === 'outdoor') return {x, z, y, area:'outdoor', floor:null, plan:null, onRoof:campus.roofAt(x, z, y) > 0};
    const floor = interior.floors[area];
    const plan = {x:floor.mapX ? floor.mapX(x) : x - floor.origin, z:floor.mapZ ? floor.mapZ(z) : z};
    return {x, z, y, area:'school', floor:area, plan, onRoof:false};
  }

  function locate(x, z, y) {
    const info = context(x, z, y);
    const zone = zones.find(entry => entry.test(info)) ?? zones.at(-1);
    return {...zone, area:info.area, floor:info.floor};
  }

  function update(position) {
    const next = locate(position.x, position.z, position.y);
    game.hud.setZone(next.name);
    if (next.id === current?.id) return;
    const previous = current?.id ?? null;
    current = next;
    game.bus.emit('zone:entered', {zone:next.id, area:next.area, floor:next.floor, previous});
  }

  /** World position for a zone's waypoint, or null. */
  function point(id) {
    const spot = byId.get(id)?.point;
    if (!spot) return null;
    return spot.floor === undefined ? {x:spot.x, z:spot.z} : interior.floorPoint(spot.floor, spot.x, spot.z);
  }

  return {update, locate, point, get current() { return current; }, reset() { current = null; }};
}
