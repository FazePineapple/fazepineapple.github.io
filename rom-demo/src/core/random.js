/**
 * Seeded linear congruential generator. The campus layout (window glass,
 * tree positions, flower beds) depends on the call order, so build steps that
 * use it must keep their order to keep the world identical between builds.
 */
export function createRandom(seed) {
  return () => ((seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0) / 4294967296);
}
