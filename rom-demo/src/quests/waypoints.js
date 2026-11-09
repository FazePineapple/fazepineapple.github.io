import {characters} from '../../content/characters.js';

/**
 * Turns the tracked objective's `target` into a point in the world, routed
 * through the school door or stairs when the target is in another area.
 */
export function createWaypoints(game) {
  const {rom, collision, interior, items} = game;
  const door = game.campus.door;

  function resolve(target) {
    if (!target) return null;
    if (target.npc) {
      const p = game.npcs.position(target.npc);
      return p && {x:p.x, z:p.z, y:p.y + 2.4, label:characters[target.npc]?.name ?? target.npc};
    }
    if (target.item) {
      const player = rom.player.position;
      let best = null, bestDistance = Infinity;
      for (const p of game.pickups.find(target.item)) {
        const distance = p.distanceTo(player);
        if (distance < bestDistance) { best = p; bestDistance = distance; }
      }
      return best && {x:best.x, z:best.z, y:best.y + .8, label:items[target.item]?.name ?? target.item};
    }
    if (target.zone) {
      const p = game.zones.point(target.zone);
      return p && {x:p.x, z:p.z, y:collision.groundAt(p.x, p.z) + 1.6, label:target.label ?? null};
    }
    if (target.point) {
      const spot = target.point;
      const p = spot.floor === undefined ? spot : interior.floorPoint(spot.floor, spot.x, spot.z);
      return {x:p.x, z:p.z, y:collision.groundAt(p.x, p.z) + 1.6, label:target.label ?? null};
    }
    return null;
  }

  /** Next leg of the route: the target itself, or the door/stairs toward it. */
  function route(point) {
    const player = rom.player.position;
    const here = collision.areaOf(player.x, player.z, player.y);
    const there = collision.areaOf(point.x, point.z, 0);
    if (here === there) return point;
    if (here === 'outdoor') return {x:door.x, z:door.z + 3.1, y:2.2, label:'Mokyklos durys'};
    const floor = interior.floors[here];
    const goingUp = there !== 'outdoor' && there > here;
    if (here === 0 && !goingUp) return {x:door.x, z:door.z - .9, y:2.2, label:'Išėjimas'};
    const stair = floor.stairs.find(entry => entry.direction === (goingUp ? 1 : -1));
    return stair ? {x:stair.x, z:stair.z, y:(floor.baseY ?? 0) + 1.8, label:goingUp ? 'Laiptai aukštyn' : 'Laiptai žemyn'} : point;
  }

  return {
    /** Current waypoint for the tracked objective, or null. */
    current() {
      const objective = game.quests.objective();
      const point = objective && resolve(objective.target);
      return point ? route(point) : null;
    },
  };
}
