/**
 * The "E" key. Finds the best thing to interact with near Rom — stairs, the
 * restroom, a chair, a character to talk to, or an item to pick up — and runs
 * it. To add a new kind of interaction, add a provider to `providers`: a
 * function returning {label, run} or null. Earlier providers win.
 * An action may also have `hold:{label, run}`: tapping E runs `run`,
 * holding E for half a second runs `hold.run` instead.
 */
const HOLD_TIME = .45;

export function createInteractions(game) {
  const {state, rom, interior, collision, items} = game;

  function changeFloor(index) {
    if (state.emote) return;
    if (state.seat) game.seating.stand();
    const floor = interior.floors[index];
    rom.player.position.set(floor.origin, (floor.baseY ?? 0) + .03, floor.spawnZ ?? -6.2);
    rom.player.rotation.y = 0;
    state.yaw = Math.PI;
    state.verticalSpeed = 0; state.airborne = false;
    interior.setLighting(floor.origin);
    game.notice('Mokykla · ' + (index + 1) + ' aukštas');
    game.bus.emit('floor:entered', {floor:index});
  }

  const providers = [
    function driving() {
      return state.vehicle ? {id:'exit-car', label:'Išlipti iš automobilio', run:() => game.vehicles.exit()} : null;
    },
    function seated() {
      if (!state.seat) return null;
      return {id:'chair', label:'Pasiimti kėdę', run:() => game.pickups.pickUp(state.seat.pickup)};
    },
    function stairs() {
      const {x, y, z} = rom.player.position;
      if (!collision.inside(x, z, y)) return null;
      const floor = interior.floorAt(x);
      const stair = floor.stairs.find(entry => Math.abs(x - entry.x) < .84 && Math.abs(z - entry.z) < 1.1);
      if (!stair) return null;
      const destination = interior.floors.indexOf(floor) + stair.direction;
      return {label:(stair.direction > 0 ? 'Lipti į ' : 'Nusileisti į ') + (destination + 1) + ' aukštą', run:() => changeFloor(destination)};
    },
    function restroom() {
      const {x, y, z} = rom.player.position;
      if (!collision.inside(x, z, y) || !(state.meters.bladder || state.meters.bowel)) return null;
      if (Math.hypot(x - interior.restroom.x, z - interior.restroom.z) >= 2.35) return null;
      return {id:'restroom', label:'Naudotis tualetu', run:() => game.vitals.useRestroom()};
    },
    function talk() {
      const npc = game.npcs.nearest();
      return npc && {label:'Kalbėtis: ' + npc.def.name, run:() => game.dialogue.open(npc)};
    },
    function car() {
      return game.vehicles.near() && {id:'car', label:'Sėsti į automobilį', run:() => game.vehicles.enter()};
    },
    function sit() {
      const chair = game.seating.nearestSeat();
      return chair && {id:'sit', label:'Sėstis ant kėdės', run:() => game.seating.sit(chair),
        hold:{label:'paimti kėdę', run:() => game.pickups.pickUp(chair)}};
    },
    function pickup() {
      const item = game.pickups.nearest(2.25, entry => !items[entry.id].sit);
      return item && {label:'Paimti: ' + items[item.id].name, run:() => game.pickups.pickUp(item)};
    },
  ];

  function nearest() {
    if (state.deathTime) return null;
    for (const provider of providers) {
      const action = provider();
      if (action) return action;
    }
    return null;
  }

  // Tap-or-hold handling for E (and the touch Interact button).
  let holding = null;
  function press() {
    const action = nearest();
    if (!action) return;
    if (action.hold) holding = {action, time:0};
    else action.run();
  }
  function release() {
    if (holding) holding.action.run();
    holding = null;
  }
  function update(dt) {
    if (!holding) return;
    holding.time += dt;
    if (holding.time < HOLD_TIME) return;
    const {action} = holding;
    holding = null;
    action.hold.run();
  }

  return {
    providers,
    nearest,
    press,
    release,
    update,
    cancelHold() { holding = null; },
    /** 0..1 while E is being held on an action with a hold option. */
    get holdProgress() { return holding ? Math.min(1, holding.time / HOLD_TIME) : 0; },
    interact() { nearest()?.run(); },
    changeFloor,
  };
}
