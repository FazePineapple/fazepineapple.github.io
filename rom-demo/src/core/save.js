const storageKey = 'romgame.save.v1';
const version = 1;

/**
 * Versioned localStorage save slot. Storage can be unavailable (private
 * windows, file:// URLs in some browsers), so every access is guarded and the
 * game keeps working without persistence.
 */
export function createSaveStore(storage = globalThis.localStorage) {
  function read() {
    try {
      const saved = JSON.parse(storage?.getItem(storageKey));
      return saved?.version === version ? saved : null;
    } catch {
      return null;
    }
  }

  let data = read();
  return {
    get data() { return data; },
    write(snapshot) {
      data = {...snapshot, version, savedAt: Date.now()};
      try { storage?.setItem(storageKey, JSON.stringify(data)); } catch { /* Keep playing without a save. */ }
    },
    clear() {
      data = null;
      try { storage?.removeItem(storageKey); } catch { /* Nothing stored. */ }
    },
  };
}
