/**
 * A drivable car (issue #68). E next to it gets in; W/S accelerate and brake
 * or reverse, A/D steer, Space is the handbrake and E gets out. Hitting bots
 * at speed launches them as tumbling rigid bodies that take damage (and can be
 * knocked out: 'bot:defeated' with source 'car'); slow contact just pushes them.
 * Rom is hidden while driving and the camera follows the car.
 *
 * Damage (issue #71): wall crashes, ramming bots, bots punching the driver's
 * car and nearby blasts wear down its HP. At 0 HP it catches fire, and five
 * seconds later it explodes (killing Rom if he is still inside, hurting
 * everyone nearby by distance), leaving a wreck until a new car appears in
 * the car park. Emits 'vehicle:damaged', 'vehicle:burning', 'vehicle:exploded'.
 */
import {CAR_HP, FIRE_SECONDS, WRECK_SECONDS, CAR_BLAST, crashDamage, rammingDamage} from './car-health.js';
import {createCarFire} from './car-fire.js';
import {blastDamage} from '../combat/blast.js';

const MAX_SPEED = 15, MAX_REVERSE = 5;
const PARKING = {x:-41.6, z:24, heading:Math.PI};

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
    hp:CAR_HP, burning:0, wreck:0, hop:0,
  };
  const removeObstacle = collision.addObstacle(car.obstacle);
  combat.setCarObstacle(car.obstacle);
  const forward = new T.Vector3(), corner = new T.Vector3(), centre = new T.Vector3(), probe = new T.Vector3();
  const fire = createCarFire(T, car.group);

  // Burnt look: every part of the car swaps to charred materials (and back).
  const parts = [];
  car.group.traverse(object => { if (object.isMesh) parts.push({object, material:object.material}); });
  const charredBody = new T.MeshLambertMaterial({color:0x1d1b1a}), charredGlass = new T.MeshLambertMaterial({color:0x0c0c0c});
  function setCharred(charred) {
    for (const {object, material} of parts) object.material = charred ? (material.color?.getHex() === 0x526773 ? charredGlass : charredBody) : material;
  }

  function place(x, z, heading) {
    car.group.position.set(x, collision.groundAt(x, z), z);
    car.heading = heading; car.speed = 0;
    car.group.rotation.y = heading;
    car.obstacle.x = x; car.obstacle.z = z;
  }
  place(PARKING.x, PARKING.z, PARKING.heading);

  function near(range = 3) {
    if (state.vehicle || car.hp <= 0) return null;
    const p = rom.player.position, c = car.group.position;
    return Math.hypot(p.x - c.x, p.z - c.z) < range && p.y < c.y + 1.5 ? car : null;
  }

  /** Wears the car down; at 0 HP it catches fire. */
  function damage(amount) {
    amount = Math.round(amount);
    if (!(amount > 0) || car.hp <= 0) return;
    car.hp = Math.max(0, car.hp - amount);
    game.bus.emit('vehicle:damaged', {amount, hp:car.hp});
    if (!car.hp) ignite();
  }

  function ignite() {
    car.burning = FIRE_SECONDS;
    fire.set(1);
    audio.play('ignite');
    game.notice(state.vehicle === car ? 'Automobilis dega! Greitai išlipk (E)!' : 'Automobilis užsidegė!', 3);
    game.bus.emit('vehicle:burning');
  }

  function explode() {
    const inside = state.vehicle === car;
    car.burning = 0; car.wreck = WRECK_SECONDS; car.speed = 0; car.hop = 1;
    audio.engine(0);
    // Still inside: no chance. Dying also gets Rom out of the car.
    if (inside) game.damage(state.health, 'Automobilis sprogo');
    setCharred(true);
    fire.set(.5);
    const c = car.group.position;
    game.explosives.blast(centre.set(c.x, c.y + .8, c.z), CAR_BLAST.radius, CAR_BLAST.damage, 'Automobilis sprogo');
    game.bus.emit('vehicle:exploded', {playerInside:inside});
  }

  /** A fresh car in the car park once nobody is standing on the spot. */
  function replace() {
    const p = rom.player.position;
    if (Math.hypot(p.x - PARKING.x, p.z - PARKING.z) < 6) return;
    car.wreck = 0; car.hp = CAR_HP; car.hop = 0;
    car.body.position.y = 0; car.body.rotation.z = 0;
    fire.set(0);
    setCharred(false);
    place(PARKING.x, PARKING.z, PARKING.heading);
    game.notice('Naujas automobilis laukia stovėjimo aikštelėje', 2.5);
  }

  /** Fire, explosion and wreck timers; runs every frame whether or not Rom drives. */
  let crackle = 0;
  function tick(dt) {
    fire.update(dt);
    if (car.burning) {
      car.burning -= dt;
      crackle -= dt;
      if (crackle <= 0) { audio.play('fire'); crackle = .45 + Math.random() * .3; }
      if (car.burning <= 0) explode();
    } else if (car.wreck) {
      car.wreck = Math.max(0, car.wreck - dt);
      if (fire.level && car.wreck < WRECK_SECONDS - 10) fire.set(0);
      if (!car.wreck) { car.wreck = .001; replace(); }
    }
    if (car.hop) {
      // The blast lifts the wreck and drops it back with a tilt.
      car.hop = Math.max(0, car.hop - dt * 1.4);
      const t = 1 - car.hop;
      car.body.position.y = Math.sin(t * Math.PI) * .9;
      car.body.rotation.z = Math.sin(t * Math.PI) * .2 + t * .05;
    }
  }

  function enter() {
    if (car.hp <= 0) return;
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
    // A burning engine no longer pulls: the car just rolls out.
    const throttle = car.hp > 0 ? input.axis('KeyW', 'ArrowUp', 'KeyS', 'ArrowDown') : 0;
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
      if (Math.abs(car.speed) > 5 && !crashCooldown) {
        audio.play('crash'); crashCooldown = .8;
        damage(crashDamage(car.speed));
        if (car.hp > 0) game.notice('Bum! Automobilis · ' + car.hp + ' GY');
      }
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
    // Bots touching the car's body: nudged aside when slow, launched when fast.
    const contact = combat.collideCar({x:c.x, z:c.z, heading:car.heading, speed:car.speed});
    if (contact.hits.length) {
      audio.play('crash');
      game.notice('Partrenkei: ' + contact.hits.join(', '));
      damage(rammingDamage(contact.hits.length, car.speed));
      car.speed *= 1 - contact.slow;
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
    car, near, enter, exit, update, tick, place, damage,
    /** A blast at `position`: the car loses HP by distance from its body (not its centre). */
    blast(position, radius, amount) {
      const c = car.group.position;
      if (car.hp <= 0) return;
      const distance = Math.max(0, probe.set(c.x, c.y + .7, c.z).distanceTo(position) - 1.2);
      damage(blastDamage(distance, radius, amount));
    },
    dispose:removeObstacle,
    /** Minimap/HUD position of the car. */
    get position() { return car.group.position; },
    get heading() { return car.heading; },
  };
}
