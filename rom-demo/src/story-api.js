/**
 * THE STORY API — the only thing quest and dialogue content should touch.
 * Keeping content behind this small surface means game internals can change
 * without rewriting every mission.
 *
 *   Items      has(id, n=1)  count(id)  give(id, n=1)  take(id, n=1)
 *   Flags      setFlag(f)  clearFlag(f)  hasFlag(f)
 *   Quests     startQuest(id)  isQuestActive(id)  isQuestDone(id)  questStep(id)
 *   Player     heal(n)  area()  zone()  hasEquipment('jetpack')
 *   World      time()  hour()  minute()  isLesson()
 *   Messages   notice(text)  emit('story:something', payload)
 */
export function createStoryApi(game) {
  const flags = new Set();
  const api = {
    has:(id, amount = 1) => game.inventory.has(id, amount),
    count:id => game.inventory.count(id),
    give(id, amount = 1) {
      const added = game.inventory.give(id, amount);
      if (added < amount) game.notice('Kuprinė pilna');
      if (added) { game.equipment.refresh(); game.bus.emit('item:received', {id, count:added}); }
      return added;
    },
    take(id, amount = 1) {
      const removed = game.inventory.remove(id, amount);
      if (removed) game.equipment.refresh();
      return removed;
    },
    setFlag(flag) {
      if (flags.has(flag)) return;
      flags.add(flag);
      game.bus.emit('flag:set', {flag});
    },
    clearFlag:flag => { flags.delete(flag); },
    hasFlag:flag => flags.has(flag),
    startQuest:id => game.quests.start(id),
    isQuestActive:id => game.quests.isActive(id),
    isQuestDone:id => game.quests.isDone(id),
    questStep:id => game.quests.stepId(id),
    heal(amount) { game.state.health = Math.min(100, game.state.health + amount); },
    area:() => game.zones.current?.area ?? 'outdoor',
    zone:() => game.zones.current?.id ?? null,
    hasEquipment:name => Boolean(game.state.equipment[name]),
    time:() => game.sky.time(),
    minute:() => game.sky.minute(),
    hour:() => game.sky.hour(),
    isLesson:() => game.schedule.isLesson(),
    notice:text => game.hud.toast(text),
    emit:(type, payload = {}) => game.bus.emit(type, payload),
  };
  return {
    api,
    flags,
    /** Checks a content `requires` block: {flag}, {quest} (started or done), or {questDone}. */
    meets(requires) {
      if (!requires) return true;
      if (requires.flag && !flags.has(requires.flag)) return false;
      if (requires.quest && !['active', 'done'].includes(game.quests.status(requires.quest))) return false;
      if (requires.questDone && !game.quests.isDone(requires.questDone)) return false;
      return true;
    },
  };
}
