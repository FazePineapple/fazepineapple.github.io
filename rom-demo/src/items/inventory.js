/**
 * 36-slot inventory; slots 0–8 are the hotbar. Pure data, no DOM or 3D, so
 * it is covered by unit tests. Stack sizes come from the item catalogue.
 */
export function createInventory(items, size = 36) {
  const slots = Array(size).fill(null);
  const stackOf = id => items[id]?.stack ?? 1;

  function add(id) {
    if (!items[id] || items[id].equipment) return false;
    const existing = slots.find(slot => slot?.id === id && slot.count < stackOf(id));
    if (existing) { existing.count++; return true; }
    const index = slots.indexOf(null);
    if (index < 0) return false;
    slots[index] = {id, count:1};
    return true;
  }

  /** Whether one more id fits (an existing stack or an empty slot). */
  function canAdd(id) {
    if (!items[id] || items[id].equipment) return false;
    return slots.some(slot => slot === null || (slot.id === id && slot.count < stackOf(id)));
  }

  function take(index) {
    const slot = slots[index];
    if (!slot) return null;
    if (--slot.count === 0) slots[index] = null;
    return slot.id;
  }

  function count(id) {
    return slots.reduce((total, slot) => total + (slot?.id === id ? slot.count : 0), 0);
  }

  return {
    slots,
    size,
    add,
    canAdd,
    take,
    count,
    has:(id, amount = 1) => count(id) >= amount,
    /** Adds up to `amount`; returns how many fit. */
    give(id, amount = 1) {
      let added = 0;
      while (added < amount && add(id)) added++;
      return added;
    },
    /** Removes `amount` of an item from anywhere (last slots first). */
    remove(id, amount = 1) {
      if (count(id) < amount) return false;
      for (let index = slots.length - 1; index >= 0 && amount > 0; index--) {
        while (slots[index]?.id === id && amount > 0) { take(index); amount--; }
      }
      return true;
    },
    move(from, to) {
      const source = slots[from], destination = slots[to];
      if (from === to || !source) return;
      if (destination?.id === source.id) {
        const moved = Math.min(source.count, stackOf(source.id) - destination.count);
        destination.count += moved;
        source.count -= moved;
        if (!source.count) slots[from] = null;
        return;
      }
      [slots[from], slots[to]] = [destination, source];
    },
    serialize:() => slots.map(slot => slot && [slot.id, slot.count]),
    restore(saved) {
      if (!Array.isArray(saved)) return;
      slots.fill(null);
      saved.slice(0, size).forEach((entry, index) => {
        const [id, amount] = Array.isArray(entry) ? entry : [];
        if (items[id] && !items[id].equipment && amount > 0) slots[index] = {id, count:Math.min(amount, stackOf(id))};
      });
    },
  };
}
