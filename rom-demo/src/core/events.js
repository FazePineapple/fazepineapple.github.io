/**
 * Tiny synchronous event bus. Every gameplay system announces what happened
 * here ("item:picked", "bot:defeated", "zone:entered", ...) so quests, stats
 * tracking and achievements can react without being wired into the code that
 * caused the event. See docs/CONTENT.md for the event catalogue.
 *
 * Subscribe to '*' to receive every event as (payload, type).
 */
export function createEventBus() {
  const handlers = new Map();

  function on(type, handler) {
    if (!handlers.has(type)) handlers.set(type, new Set());
    handlers.get(type).add(handler);
    return () => handlers.get(type)?.delete(handler);
  }

  function call(handler, payload, type) {
    try {
      handler(payload, type);
    } catch (error) {
      // One broken quest or listener must never stop the game loop.
      console.error('Event handler failed for "' + type + '"', error);
    }
  }

  function emit(type, payload = {}) {
    for (const handler of [...(handlers.get(type) ?? [])]) call(handler, payload, type);
    for (const handler of [...(handlers.get('*') ?? [])]) call(handler, payload, type);
  }

  return {on, emit};
}
