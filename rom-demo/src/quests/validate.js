/**
 * Content checks. Catches typos in ids (a quest pointing at an item or
 * character that does not exist) before they become silent soft-locks.
 * Runs in the unit tests and logs warnings in the browser console at boot.
 */
export function validateContent({items, spawns, characters, dialogues, quests, zones}) {
  const problems = [];
  const zoneIds = new Set(zones.map(zone => zone.id));
  const questIds = new Set();

  for (const [id, item] of Object.entries(items)) {
    if (!item.name) problems.push(`Item "${id}" has no name`);
    if (item.use && !Array.isArray(item.use.effects)) problems.push(`Item "${id}" use.effects must be a list`);
    if (item.weapon && !(item.weapon.damage >= 0 && item.weapon.range > 0)) problems.push(`Item "${id}" weapon needs damage and range`);
  }
  const spawnIds = new Set();
  for (const spawn of spawns) {
    if (spawnIds.has(spawn.id)) problems.push(`Duplicate spawn id "${spawn.id}"`);
    spawnIds.add(spawn.id);
    if (!items[spawn.item]) problems.push(`Spawn "${spawn.id}" uses unknown item "${spawn.item}"`);
  }
  for (const [id, character] of Object.entries(characters)) {
    if (!character.place) problems.push(`Character "${id}" has no place`);
    if (character.dialogue && !dialogues[character.dialogue]) problems.push(`Character "${id}" uses unknown dialogue "${character.dialogue}"`);
  }
  for (const [id, dialogue] of Object.entries(dialogues)) {
    if (typeof dialogue.entry !== 'function') problems.push(`Dialogue "${id}" needs an entry(api) function`);
    for (const [nodeId, node] of Object.entries(dialogue.nodes ?? {})) {
      for (const choice of node.choices ?? []) {
        if (choice.next && !dialogue.nodes[choice.next]) problems.push(`Dialogue "${id}" node "${nodeId}" points to missing node "${choice.next}"`);
        if (!choice.next && !choice.end) problems.push(`Dialogue "${id}" node "${nodeId}" has a choice with neither next nor end`);
      }
    }
  }
  for (const quest of quests) {
    if (questIds.has(quest.id)) problems.push(`Duplicate quest id "${quest.id}"`);
    questIds.add(quest.id);
  }
  for (const quest of quests) {
    if (!['main', 'side'].includes(quest.kind)) problems.push(`Quest "${quest.id}" kind must be main or side`);
    if (!quest.steps?.length) problems.push(`Quest "${quest.id}" has no steps`);
    for (const required of quest.requires ?? []) if (!questIds.has(required)) problems.push(`Quest "${quest.id}" requires unknown quest "${required}"`);
    for (const [item] of quest.rewards?.items ?? []) if (!items[item]) problems.push(`Quest "${quest.id}" rewards unknown item "${item}"`);
    const stepIds = new Set();
    for (const step of quest.steps ?? []) {
      if (!step.id || stepIds.has(step.id)) problems.push(`Quest "${quest.id}" has a missing or duplicate step id`);
      stepIds.add(step.id);
      if (!step.on && !step.when) problems.push(`Quest "${quest.id}" step "${step.id}" needs "on" or "when"`);
      const target = typeof step.target === 'function' ? null : step.target;
      if (target?.npc && !characters[target.npc]) problems.push(`Quest "${quest.id}" step "${step.id}" targets unknown character "${target.npc}"`);
      if (target?.item && !items[target.item]) problems.push(`Quest "${quest.id}" step "${step.id}" targets unknown item "${target.item}"`);
      if (target?.zone && !zoneIds.has(target.zone)) problems.push(`Quest "${quest.id}" step "${step.id}" targets unknown zone "${target.zone}"`);
      const match = typeof step.match === 'object' ? step.match : null;
      if (step.on === 'npc:talked' && match?.npc && !characters[match.npc]) problems.push(`Quest "${quest.id}" step "${step.id}" listens for unknown character "${match.npc}"`);
      if (step.on?.startsWith('item:') && match?.id && !items[match.id]) problems.push(`Quest "${quest.id}" step "${step.id}" listens for unknown item "${match.id}"`);
    }
  }
  return problems;
}
