/**
 * WORLD ITEM PLACEMENTS.
 *
 * `id` must be unique and stable: the save file remembers which spawns were
 * collected so they do not reappear. Coordinates are world metres; the
 * courtyard spawn point is around (-9, 22) and the right-hand school door is
 * at (22, -2.5). Indoor floors are easiest to place with `floor`:
 *   {id:'library-book', item:'crate', floor:1, x:-10, z:-8}
 * where x/z are floor-plan coordinates (each floor spans -14..14).
 * `facing` (radians) turns furniture such as chairs.
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
  {id:'straw-spawn', item:'straw', x:-5, z:20.5},
  {id:'chair-courtyard', item:'chair', x:-7, z:24.5, facing:Math.PI},
  {id:'chair-benches', item:'chair', x:-10.5, z:3, facing:0},
  {id:'chair-classroom', item:'chair', floor:0, x:-11, z:3, facing:Math.PI / 2},
  {id:'oz-courtyard', item:'oz', x:-14, z:16},
  {id:'oz-hall', item:'oz', floor:0, x:9, z:-1},
  {id:'rubberband', item:'rubberband', x:-2, z:19},
  {id:'chalk-courtyard', item:'chalk', x:-9.5, z:12},
  {id:'glue', item:'glue', floor:0, x:-10, z:-3},
  {id:'scissors', item:'scissors', floor:0, x:-7, z:-3},
  {id:'notebook', item:'notebook', floor:0, x:-12, z:-1},
  {id:'compass', item:'compass', floor:1, x:-9, z:6},
  {id:'chalk-library', item:'chalk', floor:1, x:-8, z:-6},
];
