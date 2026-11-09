import {emotes} from './emotes.js';

/**
 * Walking, sprinting, jumping, landing, wall climbing, the jetpack, and
 * standing up from chairs.
 */
export function createMovement(game) {
  const {T, state, rom, collision, campus} = game;
  const UP = T.Object3D.DEFAULT_UP;
  const movement = new T.Vector3();
  const position = rom.player.position;

  function jump() {
    if (state.seat) { game.seating.stand(); return; }
    if (state.climbing) { toggleClimb(); return; }
    if (state.airborne || state.emote || state.deathTime || state.stamina < 9) return;
    state.airborne = true; state.verticalSpeed = 6.4; state.stamina -= 9; state.recovery = .45;
    game.bus.emit('player:jump');
  }

  function toggleClimb() {
    if (state.climbing) { state.climbing = null; state.airborne = true; state.verticalSpeed = 0; return; }
    const {x, y, z} = position;
    if (collision.inside(x, z, y) || state.seat || state.emote || state.pickupMotion || state.deathTime || state.stamina < 8) return;
    let best = .95, grip = null;
    for (const b of campus.buildings) {
      if (y >= b.h + .10) continue;
      const px = T.MathUtils.clamp(x, b.x - b.w / 2, b.x + b.w / 2);
      const pz = T.MathUtils.clamp(z, b.z - b.d / 2, b.z + b.d / 2);
      const dx = x - px, dz = z - pz, distance = Math.hypot(dx, dz);
      if (distance > .02 && distance < best) {
        best = distance;
        grip = {b, px, pz, nx:dx / distance, nz:dz / distance};
      }
    }
    if (!grip) { game.notice('Prieik arčiau išorinės sienos'); return; }
    if (state.jetpack) setJetpack(false, true);
    state.climbing = grip; state.airborne = false; state.verticalSpeed = 0;
    rom.player.rotation.y = Math.atan2(-grip.nx, -grip.nz);
    game.notice('Lipi · W / S – aukštyn ir žemyn · C – paleisti');
  }

  function updateClimb(dt, vertical) {
    const {b, px, pz, nx, nz} = state.climbing;
    position.x = px + nx * .43; position.z = pz + nz * .43;
    if (vertical) {
      state.stamina = Math.max(0, state.stamina - dt * 7.5);
      position.y += vertical * dt * 2.8;
      state.recovery = .65; state.stride += dt * 8;
    }
    if (position.y >= b.h + .23) {
      position.set(px - nx * .55, b.h + .23, pz - nz * .55);
      state.climbing = null; game.notice('Užlipai ant stogo');
      game.bus.emit('player:climbed', {height:b.h});
    } else if ((vertical < 0 && position.y <= collision.groundAt(position.x, position.z)) || !state.stamina) {
      state.climbing = null; state.airborne = true; state.verticalSpeed = 0;
    }
  }

  function setJetpack(on, silent = false) {
    state.jetpack = on;
    rom.jetRig.visible = on; rom.exhaust.visible = false;
    rom.backpack.visible = !on;
    game.hud.setFlight(on);
    if (!silent) game.notice(on ? 'Reaktyvinė kuprinė užsidėta · Laikyk šuolio klavišą' : 'Reaktyvinė kuprinė nusiimta');
  }

  function toggleJetpack() {
    if (collision.inside(position.x, position.z, position.y) || state.seat || state.climbing || state.emote || state.pickupMotion || state.deathTime) return;
    if (!state.equipment.jetpack) { game.notice('Pirmiau surask reaktyvinę kuprinę lauke'); return; }
    setJetpack(!state.jetpack);
  }

  function update(dt, input) {
    const forward = input.axis('KeyW', 'ArrowUp', 'KeyS', 'ArrowDown');
    const strafe = input.axis('KeyD', 'ArrowRight', 'KeyA', 'ArrowLeft');
    if (state.seat) {
      // Seated: rest (stamina recovers faster) until Rom moves.
      if (!forward && !strafe) {
        state.moving = false; state.running = false; state.thrust = false; rom.exhaust.visible = false;
        state.stamina = Math.min(100, state.stamina + 24 * dt);
        if (state.stamina >= 22) state.exhausted = false;
        return;
      }
      game.seating.stand();
    }
    // Walking interrupts long emotes such as dancing or push-ups.
    if (state.emote && emotes[state.emote].cancelable && (forward || strafe)) game.animation.stopEmote();
    const thrust = state.jetpack && !state.climbing && !state.emote && !state.pickupMotion && !state.drinkMotion &&
      state.stamina > 0 && position.y < 32 && input.down('Space');
    state.thrust = thrust;
    rom.exhaust.visible = thrust;
    if (thrust) { state.airborne = true; state.stamina = Math.max(0, state.stamina - 14 * dt); state.recovery = .65; }
    const running = !state.climbing && !state.pickupMotion && (!state.emote || state.emote === 'fart') &&
      Boolean(forward || strafe) && !state.exhausted && !state.airborne && input.down('ShiftLeft', 'ShiftRight');
    const posing = state.climbing || state.pickupMotion || state.drinkMotion || (state.emote && state.emote !== 'fart');
    movement.set(posing ? 0 : strafe, 0, posing ? 0 : -forward).normalize().applyAxisAngle(UP, state.yaw);
    const x = position.x, z = position.z;
    const step = (running ? 7.6 : 4.05) * dt;
    if (!collision.playerBlocked(x + movement.x * step, z, position.y)) position.x += movement.x * step;
    if (!collision.playerBlocked(position.x, z + movement.z * step, position.y)) position.z += movement.z * step;
    const travelled = Math.hypot(position.x - x, position.z - z);
    const moving = travelled > 0;
    if (state.climbing) updateClimb(dt, forward);

    const floor = Math.max(collision.groundAt(position.x, position.z), collision.roofAt(position.x, position.z, position.y));
    if (!state.climbing && !state.airborne && position.y - floor > .22) { state.airborne = true; state.verticalSpeed = 0; }
    if (state.airborne && !state.climbing) {
      state.verticalSpeed = thrust ? Math.min(7, state.verticalSpeed + 24 * dt) : state.verticalSpeed - 16 * dt;
      if (state.jetpack) state.verticalSpeed = Math.max(-7, state.verticalSpeed);
      position.y += state.verticalSpeed * dt;
      if (position.y <= floor && state.verticalSpeed <= 0) {
        state.landingTime = Math.min(.32, .08 - state.verticalSpeed * .015);
        const impact = Math.max(0, -state.verticalSpeed - 8) * 8;
        state.airborne = false; state.verticalSpeed = 0; position.y = floor;
        if (impact > 0) game.damage(impact, 'Skaudus nusileidimas');
      }
    } else if (!state.climbing) position.y = floor;

    if (running && moving) {
      state.stamina = Math.max(0, state.stamina - 21 * dt); state.recovery = .7;
      if (state.stamina === 0) state.exhausted = true;
    } else if (!state.climbing && !thrust) {
      state.recovery = Math.max(0, state.recovery - dt);
      if (!state.recovery) state.stamina = Math.min(100, state.stamina + 16 * dt);
      if (state.stamina >= 22) state.exhausted = false;
    }
    if (moving && !state.climbing) {
      const angle = Math.atan2(movement.x, movement.z);
      const turn = rom.player.rotation;
      turn.y += Math.atan2(Math.sin(angle - turn.y), Math.cos(angle - turn.y)) * (1 - Math.exp(-dt * 16));
      state.stride += dt * (running ? 13 : 9);
    }
    state.landingTime = Math.max(0, state.landingTime - dt);
    state.moving = moving; state.running = running;
    if (moving && !state.airborne && !state.climbing) game.bus.emit('player:moved', {distance:travelled, running});
  }

  return {update, jump, toggleClimb, toggleJetpack, setJetpack};
}
