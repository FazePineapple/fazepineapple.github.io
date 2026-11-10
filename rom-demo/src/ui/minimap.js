import {$} from '../core/dom.js';

/**
 * Campus radar. The static outdoor layer (lawns, road, trees, buildings) is
 * painted once into an offscreen canvas; each frame only blits it and draws
 * the moving parts (Rom, items, characters, quest waypoint).
 */
export function createMinimap(game) {
  const {campus, interior, rom} = game;
  const canvas = $('radar');
  const map = canvas.getContext('2d');
  const width = canvas.width, height = canvas.height;
  const mx = v => 79 + v * 1.15, mz = v => 63 + v * .98;

  const background = document.createElement('canvas');
  background.width = width; background.height = height;
  const paint = background.getContext('2d');
  paint.fillStyle = '#273e30'; paint.fillRect(0, 0, width, height);
  paint.fillStyle = '#526455'; paint.fillRect(mx(-35), mz(-13), 65, 33);
  paint.fillStyle = '#78847b'; paint.fillRect(mx(-52), 0, 19, height);
  paint.fillStyle = '#91a887';
  for (const tree of campus.trees) paint.fillRect(mx(tree.x), mz(tree.z), 1.6, 1.6);
  paint.fillStyle = '#cda291';
  for (const b of campus.buildings) paint.fillRect(mx(b.x - b.w / 2), mz(b.z - b.d / 2), b.w * 1.15, b.d * .98);
  paint.fillStyle = '#d6fa87';
  paint.fillRect(mx(campus.door.x) - 2, mz(campus.door.z + 3.15) - 2, 4, 4);

  function star(x, y) {
    map.save();
    map.translate(x, y);
    map.fillStyle = '#ffd25e'; map.strokeStyle = '#142119'; map.lineWidth = 1.5;
    map.beginPath();
    for (let i = 0; i < 10; i++) {
      const r = i % 2 ? 2.4 : 5.5, a = i * Math.PI / 5 - Math.PI / 2;
      map.lineTo(Math.cos(a) * r, Math.sin(a) * r);
    }
    map.closePath(); map.stroke(); map.fill();
    map.restore();
  }
  const clampX = x => Math.min(width - 6, Math.max(6, x)), clampY = y => Math.min(height - 6, Math.max(6, y));

  function drawIndoors(x, z, waypoint) {
    const floor = interior.floorAt(x);
    map.fillStyle = '#293830'; map.fillRect(0, 0, width, height);
    map.fillStyle = '#9b876c'; map.fillRect(23, 8, 112, 112);
    map.fillStyle = '#463f33';
    const fx = floor.mapX ?? (value => value - floor.origin), fz = floor.mapZ ?? (value => value);
    for (const b of floor.walls) {
      map.fillRect(79 + fx(b.x - b.w / 2) * 4, 64 + fz(b.z - b.d / 2) * 4,
        Math.max(1, (fx(b.x + b.w / 2) - fx(b.x - b.w / 2)) * 4), Math.max(1, (fz(b.z + b.d / 2) - fz(b.z - b.d / 2)) * 4));
    }
    map.font = 'bold 10px system-ui'; map.fillStyle = '#f6db8c';
    for (const stair of floor.stairs) map.fillText(stair.direction > 0 ? '↑' : '↓', 76 + fx(stair.x) * 4, 67 + fz(stair.z) * 4);
    map.fillStyle = '#7ec8ff';
    for (const npc of game.npcs.all()) {
      const p = npc.model.root.position;
      if (npc.model.root.visible && interior.floorAt(p.x) === floor) map.fillRect(78 + fx(p.x) * 4 - 1, 63 + fz(p.z) * 4 - 1, 4, 4);
    }
    if (waypoint) star(clampX(79 + fx(waypoint.x) * 4), clampY(64 + fz(waypoint.z) * 4));
    map.fillStyle = '#d6fa87'; map.beginPath(); map.arc(79 + fx(x) * 4, 64 + fz(z) * 4, 3, 0, Math.PI * 2); map.fill();
  }

  function drawOutdoors(x, z, waypoint) {
    map.drawImage(background, 0, 0);
    map.fillStyle = '#f0d574';
    for (const {model, velocity} of game.pickups.list) if (!velocity) map.fillRect(mx(model.position.x) - 1, mz(model.position.z) - 1, 2, 2);
    map.fillStyle = '#7ec8ff';
    for (const npc of game.npcs.all()) {
      const p = npc.model.root.position;
      if (npc.present && !game.collision.inside(p.x, p.z, p.y)) map.fillRect(mx(p.x) - 2, mz(p.z) - 2, 4, 4);
    }
    const car = game.vehicles.position;
    map.save(); map.translate(mx(car.x), mz(car.z)); map.rotate(-game.vehicles.heading);
    map.fillStyle = '#ffb347'; map.fillRect(-1.5, -3, 3, 6); map.restore();
    if (waypoint) star(clampX(mx(waypoint.x)), clampY(mz(waypoint.z)));
    map.save(); map.translate(mx(x), mz(z)); map.rotate(-rom.player.rotation.y);
    map.fillStyle = '#d6fa87'; map.beginPath(); map.moveTo(0, 7); map.lineTo(-4, -4); map.lineTo(4, -4); map.fill(); map.restore();
  }

  return {
    draw(waypoint) {
      const {x, y, z} = rom.player.position;
      if (game.collision.inside(x, z, y)) drawIndoors(x, z, waypoint);
      else drawOutdoors(x, z, waypoint);
    },
  };
}
