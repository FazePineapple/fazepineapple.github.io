/**
 * World queries: walkable height, wall/tree collision, roof tops, indoor
 * detection and camera clearance. The interior lives far away at x > 200
 * (upper floors) or inside the right-hand wing (ground floor lobby).
 */
export function createCollision(T, campus, interior) {
  const {door, buildings, schoolShell, parkedCars, trees, outdoorGround, roofAt} = campus;
  const exteriorColliders = [...buildings.filter(b => b.x !== door.x), ...schoolShell, ...parkedCars];
  const groundColliders = exteriorColliders.filter(b => !b.bottom);
  /** Round colliders added at runtime (NPCs). Only the player collides with them. */
  const actors = new Set();

  // Trees are checked constantly (bot line of sight, thrown props, foam), so
  // bucket them in a coarse grid instead of scanning all of them.
  const cell = 4, treeRadius = .58;
  const treeGrid = new Map();
  const cellKey = (cx, cz) => cx * 4096 + cz;
  for (const tree of trees) {
    const key = cellKey(Math.floor(tree.x / cell), Math.floor(tree.z / cell));
    if (!treeGrid.has(key)) treeGrid.set(key, []);
    treeGrid.get(key).push(tree);
  }
  function hitsTree(x, z) {
    const cx = Math.floor(x / cell), cz = Math.floor(z / cell);
    for (let dx = -1; dx <= 1; dx++) for (let dz = -1; dz <= 1; dz++) {
      const bucket = treeGrid.get(cellKey(cx + dx, cz + dz));
      if (bucket?.some(t => (x - t.x) ** 2 + (z - t.z) ** 2 < treeRadius ** 2)) return true;
    }
    return false;
  }

  function inside(x, z, y = 0) {
    return x > 200 || (Math.abs(x - door.x) < 5.91 && z < door.z && z > door.z - 14.94 && y < 4.3);
  }
  function groundAt(x, z) {
    return inside(x, z) ? interior.stairHeight(x, z) : outdoorGround(x, z);
  }
  function doorBlocked(x, z) {
    return Math.abs(x - door.x) < door.width / 2 && Math.abs(z - door.z) < .3 && door.opening < .58;
  }
  const hits = (walls, x, z) => walls.some(b => Math.abs(x - b.x) < b.w / 2 + .38 && Math.abs(z - b.z) < b.d / 2 + .38);
  const outOfBounds = (x, z) => Math.abs(x) > 63 || Math.abs(z) > 58;

  /** Ground-level blocking used by bots, thrown props and effects. */
  function block(x, z) {
    if (doorBlocked(x, z)) return true;
    if (inside(x, z)) return hits(interior.floorAt(x).walls, x, z);
    return outOfBounds(x, z) || hits(groundColliders, x, z) || hitsTree(x, z);
  }
  /** Player blocking, which respects height (roofs, the door lintel) and NPCs. */
  function playerBlocked(x, z, y) {
    if (y < 2.8 && doorBlocked(x, z)) return true;
    for (const actor of actors) {
      if (actor.solid !== false && Math.abs(y - actor.y) < 1.6 && (x - actor.x) ** 2 + (z - actor.z) ** 2 < actor.radius ** 2) return true;
    }
    if (inside(x, z, y)) return hits(interior.floorAt(x).walls, x, z);
    return outOfBounds(x, z) ||
      exteriorColliders.some(b => y >= (b.bottom ?? 0) - .04 && y < b.h + .16 && Math.abs(x - b.x) < b.w / 2 + .38 && Math.abs(z - b.z) < b.d / 2 + .38) ||
      hitsTree(x, z);
  }
  function clearPath(from, to) {
    const dx = to.x - from.x, dz = to.z - from.z;
    const distance = Math.hypot(dx, dz);
    for (let step = .3; step < distance - .3; step += .3) {
      if (block(from.x + dx * step / distance, from.z + dz * step / distance)) return false;
    }
    return true;
  }

  const obstacle = new T.Box3(), intersection = new T.Vector3();
  /** Shortens a follow-camera distance so it stays in front of walls. */
  function cameraDistance(ray, origin, distance, indoors, playerX) {
    const floor = indoors ? interior.floorAt(playerX) : null;
    for (const b of indoors ? floor.walls : exteriorColliders) {
      obstacle.min.set(b.x - b.w / 2 - .26, b.bottom ?? (indoors ? -1.15 : 0), b.z - b.d / 2 - .26);
      obstacle.max.set(b.x + b.w / 2 + .26, b.top ?? (indoors ? (floor.baseY ?? 0) + 3.6 : b.h + .21), b.z + b.d / 2 + .26);
      if (ray.intersectBox(obstacle, intersection)) distance = Math.min(distance, Math.max(.65, origin.distanceTo(intersection) - .12));
    }
    return distance;
  }

  /** 'outdoor' or the school floor index (0 = ground floor lobby). */
  function areaOf(x, z, y = 0) {
    return inside(x, z, y) ? interior.floors.indexOf(interior.floorAt(x)) : 'outdoor';
  }

  return {
    inside, groundAt, block, playerBlocked, clearPath, roofAt, cameraDistance, areaOf, hitsTree,
    addActor(actor) { actors.add(actor); return () => actors.delete(actor); },
  };
}
