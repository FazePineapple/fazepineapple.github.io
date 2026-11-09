/**
 * Quest engine. Drives main story chapters and side quests from the data in
 * content/quests. It listens to every bus event, advances the current step of
 * each active quest when the event matches, grants rewards and unlocks
 * dependent quests. It has no rendering code so it runs in unit tests.
 *
 * Quest status: 'locked' → 'available' → 'active' → 'done'.
 */
export function createQuestEngine({definitions, bus, api, onChange = () => {}}) {
  const quests = new Map();
  for (const def of definitions) {
    if (quests.has(def.id)) throw new Error('Duplicate quest id: ' + def.id);
    quests.set(def.id, {def, status:'locked', step:0, count:0});
  }
  let tracked = null;
  let restoring = false;

  const currentStep = quest => quest.def.steps[quest.step];
  const active = () => [...quests.values()].filter(quest => quest.status === 'active');
  const changed = () => { if (!restoring) onChange(); };

  function prerequisitesMet(def) {
    return (def.requires ?? []).every(id => quests.get(id)?.status === 'done') && (!def.available || def.available(api));
  }

  function refresh() {
    for (const quest of quests.values()) {
      if (quest.status !== 'locked' || !prerequisitesMet(quest.def)) continue;
      quest.status = 'available';
      if (quest.def.autoStart) start(quest.def.id);
    }
  }

  function start(id) {
    const quest = quests.get(id);
    if (!quest || quest.status === 'active' || quest.status === 'done') return false;
    if (!prerequisitesMet(quest.def)) return false;
    quest.status = 'active';
    quest.step = 0;
    quest.count = 0;
    quest.def.onStart?.(api);
    if (!tracked || quests.get(tracked)?.status !== 'active' || (quest.def.kind === 'main' && quests.get(tracked).def.kind !== 'main')) tracked = id;
    bus.emit('quest:started', {id, title:quest.def.title, kind:quest.def.kind});
    enterStep(quest);
    changed();
    return true;
  }

  function enterStep(quest) {
    const step = currentStep(quest);
    if (!step) { complete(quest); return; }
    step.onEnter?.(api);
    if (step.when?.(api)) advance(quest);
  }

  function advance(quest) {
    const step = currentStep(quest);
    step?.onComplete?.(api);
    quest.step++;
    quest.count = 0;
    if (quest.step >= quest.def.steps.length) { complete(quest); return; }
    bus.emit('quest:progress', {id:quest.def.id, title:quest.def.title, step:currentStep(quest).id, text:currentStep(quest).text});
    enterStep(quest);
    changed();
  }

  function complete(quest) {
    quest.status = 'done';
    const rewards = quest.def.rewards ?? {};
    for (const [item, count = 1] of rewards.items ?? []) api.give(item, count);
    for (const flag of rewards.flags ?? []) api.setFlag(flag);
    quest.def.onComplete?.(api);
    if (tracked === quest.def.id) tracked = pickTracked();
    bus.emit('quest:completed', {id:quest.def.id, title:quest.def.title, kind:quest.def.kind, message:rewards.message});
    refresh();
    changed();
  }

  function pickTracked() {
    const list = active();
    return (list.find(quest => quest.def.kind === 'main') ?? list[0])?.def.id ?? null;
  }

  function matches(match, payload) {
    if (!match) return true;
    if (typeof match === 'function') return Boolean(match(payload, api));
    return Object.entries(match).every(([key, value]) =>
      Array.isArray(value) ? value.includes(payload?.[key]) : payload?.[key] === value);
  }

  function handle(payload, type) {
    if (restoring) return;
    // Snapshot first so one event cannot complete two consecutive steps.
    const candidates = active().map(quest => [quest, quest.step]);
    for (const [quest, stepIndex] of candidates) {
      if (quest.status !== 'active' || quest.step !== stepIndex) continue;
      const step = currentStep(quest);
      if (step?.on !== type || !matches(step.match, payload)) continue;
      quest.count++;
      if (quest.count >= (step.count ?? 1)) advance(quest);
      else {
        bus.emit('quest:progress', {id:quest.def.id, title:quest.def.title, step:step.id, text:step.text, count:quest.count, needed:step.count});
        changed();
      }
    }
  }
  bus.on('*', handle);

  /** Re-checks `when` conditions. Call a couple of times per second. */
  function poll() {
    for (const quest of active()) {
      const step = currentStep(quest);
      if (step?.when?.(api)) advance(quest);
    }
  }

  function describe(quest) {
    const {def, status, step, count} = quest;
    return {
      id:def.id, kind:def.kind ?? 'side', title:def.title, summary:def.summary ?? '', status,
      tracked:tracked === def.id,
      steps:def.steps.map((entry, index) => ({
        id:entry.id, text:entry.text,
        done:status === 'done' || index < step,
        current:status === 'active' && index === step,
        count:index === step ? count : 0, needed:entry.count ?? 1,
      })),
    };
  }

  return {
    start,
    poll,
    begin() { refresh(); },
    status:id => quests.get(id)?.status ?? null,
    isActive:id => quests.get(id)?.status === 'active',
    isDone:id => quests.get(id)?.status === 'done',
    stepId(id) {
      const quest = quests.get(id);
      return quest?.status === 'active' ? currentStep(quest)?.id ?? null : null;
    },
    get tracked() { return tracked; },
    track(id) {
      if (quests.get(id)?.status === 'active') { tracked = id; changed(); }
    },
    list:() => [...quests.values()].map(describe),
    /** The tracked quest's current objective, for the HUD and waypoints. */
    objective() {
      const quest = quests.get(tracked);
      if (quest?.status !== 'active') return null;
      const step = currentStep(quest);
      const target = typeof step.target === 'function' ? step.target(api) : step.target;
      return {
        questId:quest.def.id, kind:quest.def.kind ?? 'side', title:quest.def.title,
        text:step.text, count:quest.count, needed:step.count ?? 1, target:target ?? null,
      };
    },
    serialize() {
      const state = {};
      for (const [id, {status, step, count}] of quests) if (status !== 'locked') state[id] = {status, step, count};
      return {quests:state, tracked};
    },
    restore(saved) {
      restoring = true;
      try {
        for (const [id, entry] of Object.entries(saved?.quests ?? {})) {
          const quest = quests.get(id);
          if (!quest || !['available', 'active', 'done'].includes(entry.status)) continue;
          quest.status = entry.status;
          quest.step = Math.max(0, Math.min(Number(entry.step) || 0, quest.def.steps.length - 1));
          quest.count = Math.max(0, Number(entry.count) || 0);
        }
        tracked = quests.get(saved?.tracked)?.status === 'active' ? saved.tracked : pickTracked();
      } finally {
        restoring = false;
      }
    },
  };
}
