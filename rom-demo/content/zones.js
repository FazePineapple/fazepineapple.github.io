/**
 * NAMED ZONES. Checked top to bottom; the first match names the player's
 * location on the HUD and fires 'zone:entered' {zone, previous} for quests.
 *
 * `test` receives {x, z, y, area, floor, plan:{x,z}, onRoof}:
 *   area  'outdoor' or 'school'
 *   floor school floor index (0 = ground floor) or null outdoors
 *   plan  floor-plan coordinates inside the school (-14..14)
 * `point` (optional) is where quest waypoints point for this zone, given as
 * world {x,z} outdoors or {floor, x, z} in floor-plan coordinates.
 */
export const zones = [
  {id:'floor-3', name:'Mokykla · 3 aukštas', test:c => c.floor === 2, point:{floor:2, x:0, z:0}},
  {id:'floor-2', name:'Mokykla · 2 aukštas', test:c => c.floor === 1, point:{floor:1, x:0, z:0}},
  {id:'classroom', name:'Klasė', test:c => c.floor === 0 && c.plan.x < -5, point:{floor:0, x:-9.5, z:-2}},
  {id:'restroom', name:'Tualetas', test:c => c.floor === 0 && c.plan.x > 5 && c.plan.z > 5.5, point:{floor:0, x:9.5, z:10}},
  {id:'assembly-hall', name:'Aktų salė', test:c => c.floor === 0 && c.plan.x > 5, point:{floor:0, x:9.5, z:-4}},
  {id:'corridor', name:'Mokyklos koridorius', test:c => c.floor === 0, point:{floor:0, x:0, z:8}},
  {id:'roof', name:'Mokyklos stogas', test:c => c.onRoof},
  {id:'approach', name:'Privažiavimas', test:c => c.x < -33, point:{x:-40, z:5}},
  {id:'perimeter', name:'Pušynas', test:c => c.z < -25 || c.x > 30 || c.z > 33, point:{x:34, z:28}},
  {id:'courtyard', name:'Mokyklos kiemas', test:() => true, point:{x:-4, z:8}},
];
