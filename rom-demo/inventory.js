export const items = {
  dagger: {name:'Sruguputu',description:'Japonijos mero durklas',icon:'🗡️',stack:1,
    weapon:{name:'Sruguputu',damage:100,range:2.7,aim:.42,cooldown:.55}},
  blaster: {name:'Training blaster',icon:'🔫',stack:1,
    weapon:{name:'Training blaster',damage:35,ranged:true,range:16,aim:.95,cooldown:.65}},
  juice: {name:'Small juice pack', icon:'🧃', stack:64, effects:[{type:'bladder',seconds:50}]},
  bun: {name:'Sausage bun', icon:'🌭', stack:64, effects:[{type:'stamina',amount:40},{type:'gas',seconds:36}]},
  beer: {name:'Beer bottle', icon:'🍺', stack:64, effects:[{type:'dizzy',seconds:24}]},
};

export function createInventory() {
  const slots = Array(36).fill(null);
  return {
    slots,
    add(id) {
      const existing = slots.find(slot => slot?.id === id && slot.count < items[id].stack);
      if (existing) { existing.count++; return true; }
      const index = slots.indexOf(null);
      if (index < 0) return false;
      slots[index] = {id, count:1};
      return true;
    },
    take(index) {
      const slot = slots[index];
      if (!slot) return null;
      if (--slot.count === 0) slots[index] = null;
      return slot.id;
    },
    move(from, to) {
      const source = slots[from], destination = slots[to];
      if (from === to || !source) return;
      if (destination?.id === source.id) {
        const count = Math.min(source.count, items[source.id].stack - destination.count);
        destination.count += count;
        source.count -= count;
        if (!source.count) slots[from] = null;
        return;
      }
      [slots[from], slots[to]] = [destination, source];
    },
  };
}
