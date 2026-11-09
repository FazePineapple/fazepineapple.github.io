import {test} from 'node:test';
import assert from 'node:assert/strict';
import {createInventory} from '../src/items/inventory.js';

const items = {
  juice:{name:'Juice', stack:3},
  ruler:{name:'Ruler'},
  jetpack:{name:'Jetpack', equipment:'jetpack'},
};

test('stacks up to the item limit, then opens a new slot', () => {
  const inventory = createInventory(items, 4);
  for (let i = 0; i < 4; i++) assert.ok(inventory.add('juice'));
  assert.deepEqual(inventory.slots.slice(0, 2), [{id:'juice', count:3}, {id:'juice', count:1}]);
  assert.equal(inventory.count('juice'), 4);
});

test('equipment and unknown items never enter the inventory', () => {
  const inventory = createInventory(items, 4);
  assert.equal(inventory.add('jetpack'), false);
  assert.equal(inventory.add('nope'), false);
});

test('reports full and partial gives', () => {
  const inventory = createInventory(items, 2);
  assert.equal(inventory.give('ruler', 5), 2);
  assert.equal(inventory.add('ruler'), false);
});

test('remove takes from any slot and refuses when short', () => {
  const inventory = createInventory(items, 4);
  inventory.give('juice', 4);
  assert.equal(inventory.remove('juice', 5), false);
  assert.ok(inventory.remove('juice', 2));
  assert.equal(inventory.count('juice'), 2);
});

test('move merges stacks and swaps different items', () => {
  const inventory = createInventory(items, 4);
  inventory.slots[0] = {id:'juice', count:2};
  inventory.slots[1] = {id:'juice', count:2};
  inventory.slots[2] = {id:'ruler', count:1};
  inventory.move(0, 1);
  assert.deepEqual(inventory.slots[1], {id:'juice', count:3});
  assert.deepEqual(inventory.slots[0], {id:'juice', count:1});
  inventory.move(2, 0);
  assert.deepEqual(inventory.slots[0], {id:'ruler', count:1});
  assert.deepEqual(inventory.slots[2], {id:'juice', count:1});
});

test('serialize/restore round-trips and drops invalid entries', () => {
  const inventory = createInventory(items, 4);
  inventory.give('juice', 2);
  inventory.add('ruler');
  const copy = createInventory(items, 4);
  copy.restore([...inventory.serialize().slice(0, 3), ['ghost', 4]]);
  assert.deepEqual(copy.slots, [{id:'juice', count:2}, {id:'ruler', count:1}, null, null]);
});
