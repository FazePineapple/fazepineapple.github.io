/**
 * Pure numbers for car damage (issue #71): how much a crash hurts, how long
 * a car burns before it explodes and how big that explosion is.
 */
export const CAR_HP = 100;
/** Seconds between the car catching fire (0 HP) and exploding. */
export const FIRE_SECONDS = 5;
/** Seconds the burnt wreck stays before a fresh car appears in the car park. */
export const WRECK_SECONDS = 25;
export const CAR_BLAST = {radius:8, damage:160};

/** Damage from hitting a wall at `speed` m/s: nothing below 5 m/s, 45 at full speed (15 m/s). */
export function crashDamage(speed) {
  const s = Math.abs(speed);
  return s <= 5 ? 0 : Math.round((s - 5) * 4.5);
}

/** Damage to the car for running over `count` bots at `speed` m/s. */
export function rammingDamage(count, speed) {
  return Math.round(count * Math.abs(speed) * .25);
}
