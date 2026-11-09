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
  {id:'floor-3', name:'School · Floor 3', test:c => c.floor === 2, point:{floor:2, x:0, z:0}},
  {id:'floor-2', name:'School · Floor 2', test:c => c.floor === 1, point:{floor:1, x:0, z:0}},
  {id:'classroom', name:'Classroom', test:c => c.floor === 0 && c.plan.x < -5, point:{floor:0, x:-9.5, z:-2}},
  {id:'restroom', name:'Restroom', test:c => c.floor === 0 && c.plan.x > 5 && c.plan.z > 5.5, point:{floor:0, x:9.5, z:10}},
  {id:'assembly-hall', name:'Assembly hall', test:c => c.floor === 0 && c.plan.x > 5, point:{floor:0, x:9.5, z:-4}},
  {id:'corridor', name:'School corridor', test:c => c.floor === 0, point:{floor:0, x:0, z:8}},
  {id:'roof', name:'School roof', test:c => c.onRoof},
  {id:'approach', name:'School approach', test:c => c.x < -33, point:{x:-40, z:5}},
  {id:'perimeter', name:'Pine perimeter', test:c => c.z < -25 || c.x > 30 || c.z > 33, point:{x:34, z:28}},
  {id:'courtyard', name:'School courtyard', test:() => true, point:{x:-4, z:8}},
];
