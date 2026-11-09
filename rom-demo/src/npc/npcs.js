import {characters} from '../../content/characters.js';
import {buildCharacter} from './character-model.js';

/**
 * Spawns the characters from content/characters.js, keeps them breathing and
 * turning toward Rom, makes them solid, and offers "Talk to …" interactions.
 */
export function createNpcs(game) {
  const {T, build, scene, interior, collision, rom} = game;
  const npcs = new Map();

  function place(id) {
    const def = characters[id];
    if (npcs.has(id) || !game.story.meets(def.requires)) return;
    const {place: spot} = def;
    const point = spot.floor === undefined ? spot : interior.floorPoint(spot.floor, spot.x, spot.z);
    const model = buildCharacter(build, {...def.look, name:def.name});
    const y = collision.groundAt(point.x, point.z);
    model.root.position.set(point.x, y, point.z);
    model.root.rotation.y = spot.facing ?? 0;
    scene.add(model.root);
    const actor = {x:point.x, z:point.z, y, radius:.45};
    const npc = {id, def, model, actor, facing:spot.facing ?? 0, phase:Math.random() * 6, removeActor:collision.addActor(actor)};
    npcs.set(id, npc);
  }

  function spawnAll() {
    for (const id of Object.keys(characters)) place(id);
  }

  const toPlayer = new T.Vector3();
  function update(dt) {
    const player = rom.player.position;
    for (const npc of npcs.values()) {
      const {root, body, head, arms} = npc.model;
      if (!root.visible) continue;
      npc.phase += dt;
      body.position.y = Math.sin(npc.phase * 1.7) * .008;
      for (const arm of arms) arm.rotation.x = Math.sin(npc.phase * 1.7) * .03;
      toPlayer.copy(player).sub(root.position);
      const distance = Math.hypot(toPlayer.x, toPlayer.z);
      const wanted = distance < 6 ? Math.atan2(toPlayer.x, toPlayer.z) : npc.facing;
      const turn = Math.atan2(Math.sin(wanted - root.rotation.y), Math.cos(wanted - root.rotation.y));
      root.rotation.y += turn * (1 - Math.exp(-dt * 4));
      head.rotation.y = T.MathUtils.lerp(head.rotation.y, 0, .1);
    }
  }

  function updateVisibility(isVisible) {
    for (const npc of npcs.values()) {
      const p = npc.model.root.position;
      npc.model.root.visible = isVisible(p.x, p.z, p.y);
    }
  }

  function nearest(range = 2.4) {
    let best = null;
    for (const npc of npcs.values()) {
      if (!npc.def.dialogue || !npc.model.root.visible) continue;
      const distance = npc.model.root.position.distanceTo(rom.player.position);
      if (distance < range) { range = distance; best = npc; }
    }
    return best;
  }

  return {
    spawnAll, update, updateVisibility, nearest,
    get:id => npcs.get(id),
    position:id => npcs.get(id)?.model.root.position ?? null,
    all:() => [...npcs.values()],
  };
}
