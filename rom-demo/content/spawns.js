/**
 * WORLD ITEM PLACEMENTS.
 *
 * `id` must be unique and stable: the save file remembers which spawns were
 * collected so they do not reappear. Coordinates are world metres; the
 * courtyard spawn point is around (-9, 22) and the right-hand school door is
 * at (22, -2.5). Indoor floors are easiest to place with `floor`:
 *   {id:'library-book', item:'crate', floor:1, x:-10, z:-8}
 * where x/z are floor-plan coordinates (each floor spans -14..14).
 *
 * Add `requires:{flag:'...'}` or `requires:{quest:'...'}` to make an item
 * appear only after story progress.
 */
export const spawns = [
  {id:'jetpack', item:'jetpack', x:24, z:14},
  {id:'tire', item:'tire', x:-34, z:14},
  {id:'crate', item:'crate', x:-12, z:22},
  {id:'cinnamon', item:'cinnamon', x:-8, z:17},
  {id:'ruler', item:'ruler', x:-12, z:18},
  {id:'extinguisher', item:'extinguisher', x:24, z:-4.5},
  {id:'dagger', item:'dagger', x:-4, z:23},
  {id:'blaster', item:'blaster', x:3, z:24},
  {id:'juice-spawn', item:'juice', x:-9, z:19},
  {id:'bun-spawn', item:'bun', x:-6, z:16.6},
  {id:'beer-spawn', item:'beer', x:-12, z:15},
  {id:'juice-hill', item:'juice', x:8, z:10},
  {id:'bun-flag', item:'bun', x:-27, z:1},
  {id:'beer-hill', item:'beer', x:35, z:14},
];
