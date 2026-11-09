/**
 * Graphics quality.
 *
 *   auto         Adaptive resolution: watches the real frame rate and lowers
 *                the render pixel ratio when the GPU cannot keep up (raising
 *                it again when there is headroom).
 *   high         Full resolution, never scaled down.
 *   performance  Lower resolution and no real-time shadows, for weak GPUs.
 */
export function createQualityScaler(renderer, sun, {target = 55} = {}) {
  const max = Math.min(devicePixelRatio || 1, 1.5);
  const min = .6;
  let mode = 'auto', ratio = max;
  let elapsed = 0, frames = 0, settle = 1.5;

  function apply(next) {
    if (Math.abs(next - ratio) < .01 && renderer.getPixelRatio() === ratio) return;
    ratio = next;
    renderer.setPixelRatio(ratio);
  }

  function setMode(next) {
    mode = ['auto', 'high', 'performance'].includes(next) ? next : 'auto';
    const shadows = mode !== 'performance';
    if (sun.castShadow !== shadows) sun.castShadow = shadows;
    apply(mode === 'performance' ? Math.min(max, .75) : max);
    elapsed = 0; frames = 0; settle = 1.5;
  }
  renderer.setPixelRatio(ratio);

  return {
    get ratio() { return ratio; },
    get mode() { return mode; },
    setMode,
    /** Call once per rendered frame with the unclamped frame time in seconds. */
    update(seconds) {
      if (mode !== 'auto' || !(seconds > 0) || seconds > .5) return; // Ignore tab switches and stalls.
      elapsed += seconds; frames++;
      if (elapsed < settle) return;
      const fps = frames / elapsed;
      elapsed = 0; frames = 0; settle = 1.5;
      let next = ratio;
      if (fps < target - 8) next = Math.max(min, ratio * (fps < target * .6 ? .8 : .9));
      else if (fps > target + 3 && ratio < max) next = Math.min(max, ratio * 1.08);
      if (Math.abs(next - ratio) > .01) {
        apply(next);
        settle = 2.5; // Give the new resolution a moment before judging it.
      }
    },
  };
}
