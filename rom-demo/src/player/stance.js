/**
 * Crouching (held Ctrl): pure helpers shared by movement, animation and the
 * camera, kept free of Three.js so they can be unit tested.
 */

/** How far Rom's hips drop when fully crouched (metres). */
export const CROUCH_DROP = .25;
/** How much lower the camera sits when fully crouched (metres). */
export const CROUCH_CAMERA_DROP = .5;
/** Hip-to-sole length of Rom's legs (see rom-model.js). */
const LEG_LENGTH = .9;

/** True when Rom is free to crouch (on foot, on the ground, not busy). */
export function canCrouch(state) {
  return !(state.vehicle || state.seat || state.climbing || state.airborne || state.thrust ||
    state.deathTime || (state.emote && state.emote !== 'fart'));
}

/** Ground speed in m/s. Crouching is slowest and cancels sprinting. */
export function moveSpeed({running = false, crouching = false, energized = false} = {}) {
  if (crouching) return 1.9;
  if (running) return energized ? 9.2 : 7.6;
  return 4.05;
}

/** Leg swing (radians) that keeps the feet on the ground with the hips lowered by `drop`. */
export function crouchLegAngle(drop = CROUCH_DROP) {
  return Math.acos(Math.min(1, Math.max(0, (LEG_LENGTH - drop) / LEG_LENGTH)));
}

/** Eases the crouch blend (0 standing … 1 crouched) toward the target. */
export function blendCrouch(current, crouching, dt) {
  const target = crouching ? 1 : 0;
  return current + (target - current) * (1 - Math.exp(-dt * 14));
}
