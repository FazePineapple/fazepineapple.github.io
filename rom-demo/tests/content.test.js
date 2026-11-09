import {test} from 'node:test';
import assert from 'node:assert/strict';
import {items} from '../content/items.js';
import {spawns} from '../content/spawns.js';
import {characters} from '../content/characters.js';
import {dialogues} from '../content/dialogue/index.js';
import {quests} from '../content/quests/index.js';
import {zones} from '../content/zones.js';
import {validateContent} from '../src/quests/validate.js';
import {createEventBus} from '../src/core/events.js';
import {createSaveStore} from '../src/core/save.js';

test('all game content is consistent (ids, targets, dialogue links)', () => {
  assert.deepEqual(validateContent({items, spawns, characters, dialogues, quests, zones}), []);
});

test('the validator catches broken references', () => {
  const broken = validateContent({
    items, spawns:[{id:'x', item:'missing'}], characters, dialogues, zones,
    quests:[{id:'q', kind:'main', title:'Q', steps:[{id:'s', text:'', on:'npc:talked', match:{npc:'nobody'}, target:{zone:'atlantis'}}]}],
  });
  assert.equal(broken.length, 3);
});

test('every dialogue entry resolves to a real node for a fresh game', () => {
  const api = {questStep:() => null, isQuestActive:() => false, isQuestDone:() => false, has:() => false};
  for (const [id, dialogue] of Object.entries(dialogues)) {
    assert.ok(dialogue.nodes[dialogue.entry(api)], id);
  }
});

test('event bus isolates failing listeners', () => {
  const bus = createEventBus();
  const seen = [];
  const original = console.error;
  console.error = () => {};
  try {
    bus.on('ping', () => { throw new Error('boom'); });
    bus.on('ping', payload => seen.push(payload.n));
    bus.on('*', (payload, type) => seen.push(type));
    bus.emit('ping', {n:1});
  } finally {
    console.error = original;
  }
  assert.deepEqual(seen, [1, 'ping']);
});

test('save store round-trips and survives broken storage', () => {
  const memory = new Map();
  const storage = {getItem:key => memory.get(key) ?? null, setItem:(key, value) => memory.set(key, value), removeItem:key => memory.delete(key)};
  const save = createSaveStore(storage);
  assert.equal(save.data, null);
  save.write({quests:{a:1}});
  assert.equal(createSaveStore(storage).data.quests.a, 1);
  save.clear();
  assert.equal(createSaveStore(storage).data, null);
  const throwing = {getItem() { throw new Error('blocked'); }, setItem() { throw new Error('blocked'); }, removeItem() {}};
  const fallback = createSaveStore(throwing);
  assert.doesNotThrow(() => fallback.write({x:1}));
});
