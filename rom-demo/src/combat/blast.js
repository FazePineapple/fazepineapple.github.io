/**
 * Pure helpers for planted explosives (issue #73): how hard a blast hits at
 * a distance and how fast an armed charge beeps as its fuse runs out.
 */

/** Share of full blast damage at `distance` from the centre: 1 at the centre, 0 at `radius` and beyond. */
export function blastFalloff(distance, radius) {
  if (!(radius > 0) || !(distance < radius)) return 0;
  const t = 1 - Math.max(0, distance) / radius;
  // Eased so the edge of the blast only scratches and the core is deadly.
  return t * (.35 + .65 * t);
}

/** Damage dealt at `distance`, rounded; 0 outside the radius. */
export function blastDamage(distance, radius, damage) {
  return Math.round(damage * blastFalloff(distance, radius));
}

/** Seconds until the next beep: 1 s on a fresh fuse, speeding up to 0.12 s just before it goes off. */
export function beepInterval(remaining, fuse) {
  if (!(fuse > 0)) return .12;
  return Math.min(1, Math.max(.12, remaining / fuse));
}
