/**
 * A drivable car (issue #68). E next to it gets in; W/S accelerate and brake
 * or reverse, A/D steer, Space is the handbrake and E gets out. Hitting bots
 * at speed damages or knocks them out ('bot:defeated' with source 'car').
 * Rom is hidden while driving and the camera follows the car.
 */
const MAX_SPEED = 15, MAX_REVERSE = 5;

export function createVehicles(game) {
  const {T, build, scene, collision, rom, state, combat, audio} = game;
  const {box, mesh, shared} = build;

  function buildCar(color) {
    const group = new T.Group();
    const body = new T.Group();
    group.add(body);
    box(0,.52,0,1.86,.67,3.95,color,body);
    box(0,.995,-.14,1.64,.56,2.05,0x526773,body);
    box(0,1.29,-.14,1.63,.08,1.96,color,body);
    box(0,.62,1.99,1.7,.12,.06,0x2b2f33,body);
    for (const side of [-1, 1]) {
      box(side*.61,.58,1.987,.36,.16,.05,0xf7e3b1,body);
      box(side*.61,.58,-1.987,.36,.16,.05,0xad3830,body);
    }
    const wheelShape = shared('car:wheel', () => new T.CylinderGeometry(.33,.33,.17,14));
    const wheels = [];
    for (const side of [-1, 1]) for (const axle of [-1.25, 1.25]) {
      const pivot = new T.Group();
      pivot.position.set(side*.88, .34, axle);
      group.add(pivot);
      const wheel = mesh(wheelShape, 0x26282b, 0, 0, 0, pivot);
      wheel.rotation.z = Math.PI / 2;
      box(0,0,0,.18,.2,.06,0x9aa1a5,wheel);
      wheels.push({pivot, wheel, front:axle > 0});
    }
    scene.add(group);
    return {group, body, wheels};
  }

  const car = {
    ...buildCar(0xd9a42b),
    heading:0, speed:0, steer:0,
    obstacle:{x:0, z:0, radius:1.55},
  };
  const removeObstacle = collision.addObstacle(car.obstacle);
  const forward = new T.Vector3(), corner = new T.Vector3();

  function place(x, z, heading) {
    car.group.position.set(x, collision.groundAt(x, z), z);
    car.heading = heading; car.speed = 0;
    car.group.rotation.y = heading;
    car.obstacle.x = x; car.obstacle.z = z;
  }
  place(-41.6, 24, Math.PI);

  function near(range = 3) {
    if (state.vehicle) return null;
    const p = rom.player.position, c = car.group.position;
    return Math.hypot(p.x - c.x, p.z - c.z) < range && p.y < c.y + 1.5 ? car : null;
  }

  function enter() {
    if (state.vehicle || state.deathTime || state.climbing || state.emote) return;
    if (state.seat) game.seating.stand();
    if (state.jetpack) game.movement.setJetpack(false, true);
    state.vehicle = car;
    state.airborne = false; state.verticalSpeed = 0;
    rom.rig.visible = false;
    game.notice('Vairuoji · W/S – greitis · A/D – vairas · Tarpas – stabdys · E – išlipti');
    game.bus.emit('vehicle:entered');
  }

  function exit() {
    if (!state.vehicle) return;
    const c = car.group.position;
    state.vehicle = null;
    car.speed = 0;
    audio.engine(0);
    // Step out on the driver's side, or the other side if that is blocked.
    for (const side of [1, -1, 0]) {
      const x = c.x + Math.cos(car.heading) * 1.9 * side, z = c.z - Math.sin(car.heading) * 1.9 * side;
      const tx = side ? x : c.x - Math.sin(car.heading) * 3, tz = side ? z : c.z - Math.cos(car.heading) * 3;
      if (!collision.playerBlocked(tx, tz, 0)) { rom.player.position.set(tx, collision.groundAt(tx, tz), tz); break; }
    }
    rom.player.rotation.y = car.heading;
    rom.rig.visible = !state.firstPerson;
    game.bus.emit('vehicle:exited');
  }

  /** True if the car would overlap something with its centre at x/z. */
  function blockedAt(x, z, heading) {
    const sin = Math.sin(heading), cos = Math.cos(heading);
    for (const [along, across] of [[2, .9], [2, -.9], [-2, .9], [-2, -.9], [2, 0], [-2, 0], [0, .95], [0, -.95]]) {
      corner.set(x + sin * along + cos * across, 0, z + cos * along - sin * across);
      if (collision.block(corner.x, corner.z, car.obstacle) || collision.inside(corner.x, corner.z) || collision.hitsActor(corner.x, corner.z, .2)) return true;
    }
    return false;
  }

  let crashCooldown = 0;
  function update(dt, input) {
    crashCooldown = Math.max(0, crashCooldown - dt);
    if (state.vehicle !== car) { audio.engine(0); return; }
    const throttle = input.axis('KeyW', 'ArrowUp', 'KeyS', 'ArrowDown');
    const steer = -input.axis('KeyD', 'ArrowRight', 'KeyA', 'ArrowLeft');
    const handbrake = input.down('Space');
    if (throttle > 0) car.speed = car.speed < 0 ? Math.min(0, car.speed + 16 * dt) : Math.min(MAX_SPEED, car.speed + 8 * dt);
    else if (throttle < 0) car.speed = car.speed > .3 ? car.speed - 16 * dt : Math.max(-MAX_REVERSE, car.speed - 6 * dt);
    else car.speed -= car.speed * Math.min(1, 1.1 * dt);
    if (handbrake) car.speed -= car.speed * Math.min(1, 5 * dt);
    if (Math.abs(car.speed) < .05 && !throttle) car.speed = 0;
    car.steer = T.MathUtils.lerp(car.steer, steer, 1 - Math.exp(-dt * 8));
    const grip = T.MathUtils.clamp(car.speed / 5, -1, 1);
    const heading = car.heading + car.steer * 1.7 * grip * dt;
    forward.set(Math.sin(heading), 0, Math.cos(heading));
    const c = car.group.position;
    const nx = c.x + forward.x * car.speed * dt, nz = c.z + forward.z * car.speed * dt;
    if (blockedAt(nx, nz, heading)) {
      if (Math.abs(car.speed) > 5 && !crashCooldown) { audio.play('crash'); game.notice('Bum!'); crashCooldown = .8; }
      car.speed *= -.25;
    } else {
      c.x = nx; c.z = nz;
      car.heading = heading;
    }
    c.y = T.MathUtils.lerp(c.y, collision.groundAt(c.x, c.z), 1 - Math.exp(-dt * 12));
    car.group.rotation.y = car.heading;
    car.obstacle.x = c.x; car.obstacle.z = c.z;
    car.body.rotation.x = T.MathUtils.lerp(car.body.rotation.x, -throttle * .025 * Math.sign(car.speed || 1), .1);
    for (const {pivot, wheel, front} of car.wheels) {
      wheel.rotation.x += car.speed * dt / .33;
      if (front) pivot.rotation.y = car.steer * .45;
    }
    // Run over bots.
    if (Math.abs(car.speed) > 3) {
      corner.set(c.x + forward.x * 1.6 * Math.sign(car.speed), 0, c.z + forward.z * 1.6 * Math.sign(car.speed));
      const hits = combat.ram(corner, forward, 1.3, car.speed);
      if (hits.length) { audio.play('crash'); game.notice('Partrenkei: ' + hits.join(', ')); car.speed *= .75; }
    }
    // Rom rides along: the camera and minimap follow his position.
    rom.player.position.set(c.x, c.y, c.z);
    rom.player.rotation.y = car.heading;
    // Swing the camera behind the car while it moves.
    if (Math.abs(car.speed) > 1) {
      const target = car.heading + Math.PI;
      const delta = Math.atan2(Math.sin(target - state.yaw), Math.cos(target - state.yaw));
      state.yaw += delta * (1 - Math.exp(-dt * 2.5));
    }
    audio.engine(.1 + Math.abs(car.speed) / MAX_SPEED * .9);
  }

  return {
    car, near, enter, exit, update, place,
    dispose:removeObstacle,
    /** Minimap/HUD position of the car. */
    get position() { return car.group.position; },
    get heading() { return car.heading; },
  };
}
