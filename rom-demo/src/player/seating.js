/**
 * Sitting on furniture (items with `sit` in content/items.js, e.g. chairs).
 * E next to a chair sits down; while seated E picks the chair up, and moving
 * or jumping stands Rom up again.
 */
export function createSeating(game) {
  const {state, rom, collision, items} = game;

  function sit(pickup) {
    if (!pickup || !items[pickup.id]?.sit || state.seat || state.airborne || state.climbing || state.deathTime || state.emote) return false;
    if (state.jetpack) game.movement.setJetpack(false, true);
    state.seat = {pickup};
    const p = pickup.model.position;
    rom.player.position.set(p.x, p.y, p.z);
    rom.player.rotation.y = pickup.model.rotation.y;
    state.airborne = false; state.verticalSpeed = 0;
    game.notice('Sėdi · Judėk arba spausk tarpą, kad atsistotum');
    game.bus.emit('player:sat', {item:pickup.id});
    return true;
  }

  function stand() {
    if (!state.seat) return;
    state.seat = null;
    const {position, rotation} = rom.player;
    const x = position.x + Math.sin(rotation.y) * .55, z = position.z + Math.cos(rotation.y) * .55;
    if (!collision.playerBlocked(x, z, position.y)) position.set(x, collision.groundAt(x, z), z);
    game.bus.emit('player:stood');
  }

  /** Nearest free seat lying in the world within reach, or null. */
  function nearestSeat(range = 1.7) {
    let best = null;
    for (const pickup of game.pickups.list) {
      if (pickup.velocity || !items[pickup.id].sit) continue;
      const distance = pickup.model.position.distanceTo(rom.player.position);
      if (distance < range) { range = distance; best = pickup; }
    }
    return best;
  }

  return {sit, stand, nearestSeat};
}
