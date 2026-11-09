import {test} from 'node:test';
import assert from 'node:assert/strict';
import {createEventBus} from '../src/core/events.js';
import {createQuestEngine} from '../src/quests/quest-engine.js';

function setup(definitions) {
  const bus = createEventBus();
  const given = [];
  const flags = new Set();
  const state = {has:new Set()};
  const api = {
    give:(id, count) => given.push([id, count]),
    setFlag:flag => flags.add(flag),
    has:id => state.has.has(id),
  };
  const engine = createQuestEngine({definitions, bus, api});
  engine.begin();
  return {bus, engine, given, flags, state};
}

const chapter = {
  id:'chapter-1', kind:'main', title:'Chapter 1', autoStart:true,
  steps:[
    {id:'talk', text:'Talk', on:'npc:talked', match:{npc:'caretaker'}},
    {id:'defeat', text:'Defeat bots', on:'bot:defeated', count:2},
  ],
  rewards:{items:[['bun', 2]], flags:['chapter-1-done']},
};
const side = {
  id:'side', kind:'side', title:'Side', requires:['chapter-1'],
  steps:[{id:'deliver', text:'Deliver', on:'story:delivered', match:{item:'juice'}}],
};

test('auto-start quests begin when their requirements are met', () => {
  const {engine} = setup([chapter, side]);
  assert.equal(engine.status('chapter-1'), 'active');
  assert.equal(engine.status('side'), 'locked');
  assert.equal(engine.tracked, 'chapter-1');
});

test('matching events advance steps; non-matching events do not', () => {
  const {bus, engine} = setup([chapter]);
  bus.emit('npc:talked', {npc:'someone-else'});
  assert.equal(engine.stepId('chapter-1'), 'talk');
  bus.emit('npc:talked', {npc:'caretaker'});
  assert.equal(engine.stepId('chapter-1'), 'defeat');
});

test('counted steps need the full count and one event never completes two steps', () => {
  const twice = {...chapter, steps:[
    {id:'a', text:'A', on:'bot:defeated'},
    {id:'b', text:'B', on:'bot:defeated', count:2},
  ]};
  const {bus, engine} = setup([twice]);
  bus.emit('bot:defeated');
  assert.equal(engine.stepId('chapter-1'), 'b');
  bus.emit('bot:defeated');
  assert.equal(engine.objective().count, 1);
  bus.emit('bot:defeated');
  assert.equal(engine.status('chapter-1'), 'done');
});

test('completion grants rewards, sets flags and unlocks dependent quests', () => {
  const {bus, engine, given, flags} = setup([chapter, side]);
  const completed = [];
  bus.on('quest:completed', quest => completed.push(quest.id));
  bus.emit('npc:talked', {npc:'caretaker'});
  bus.emit('bot:defeated');
  bus.emit('bot:defeated');
  assert.deepEqual(completed, ['chapter-1']);
  assert.deepEqual(given, [['bun', 2]]);
  assert.ok(flags.has('chapter-1-done'));
  assert.equal(engine.status('side'), 'available');
  assert.ok(engine.start('side'));
  bus.emit('story:delivered', {item:'juice'});
  assert.equal(engine.status('side'), 'done');
});

test('`when` conditions complete a step on entry and when polled', () => {
  const quest = {id:'q', kind:'side', title:'Q', autoStart:true, steps:[
    {id:'have', text:'Have it', on:'item:picked', when:api => api.has('ruler')},
    {id:'next', text:'Next', on:'never'},
  ]};
  const {engine, state} = setup([quest]);
  assert.equal(engine.stepId('q'), 'have');
  state.has.add('ruler');
  engine.poll();
  assert.equal(engine.stepId('q'), 'next');
});

test('serialize and restore keep progress without re-running start hooks', () => {
  let starts = 0;
  const hooked = {...chapter, onStart:() => { starts++; }};
  const first = setup([hooked, side]);
  first.bus.emit('npc:talked', {npc:'caretaker'});
  first.bus.emit('bot:defeated');
  const saved = JSON.parse(JSON.stringify(first.engine.serialize()));

  const bus = createEventBus();
  const engine = createQuestEngine({definitions:[hooked, side], bus, api:{give() {}, setFlag() {}}});
  engine.restore(saved);
  engine.begin();
  assert.equal(starts, 1, 'onStart ran only in the first session');
  assert.equal(engine.stepId('chapter-1'), 'defeat');
  assert.equal(engine.objective().count, 1);
  bus.emit('bot:defeated');
  assert.equal(engine.status('chapter-1'), 'done');
});

test('restore ignores unknown quests and clamps bad step numbers', () => {
  const {engine} = setup([chapter]);
  engine.restore({quests:{ghost:{status:'active', step:0}, 'chapter-1':{status:'active', step:99}}});
  assert.equal(engine.stepId('chapter-1'), 'defeat');
  assert.equal(engine.status('ghost'), null);
});

test('duplicate quest ids are rejected', () => {
  assert.throws(() => createQuestEngine({definitions:[chapter, chapter], bus:createEventBus(), api:{}}), /Duplicate/);
});
