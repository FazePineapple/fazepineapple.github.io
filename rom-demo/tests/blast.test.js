import test from 'node:test';
import assert from 'node:assert/strict';
import {blastFalloff, blastDamage, beepInterval} from '../src/combat/blast.js';
import {items} from '../content/items.js';

test('blast damage is full at the centre and fades to nothing at the radius', () => {
  assert.equal(blastFalloff(0, 7), 1);
  assert.equal(blastFalloff(7, 7), 0);
  assert.equal(blastFalloff(20, 7), 0);
  assert.equal(blastDamage(0, 7, 140), 140);
  let previous = Infinity;
  for (let d = 0; d <= 7; d += .5) {
    const damage = blastDamage(d, 7, 140);
    assert.ok(damage <= previous, `damage must not grow with distance (${d} m)`);
    previous = damage;
  }
  assert.equal(blastFalloff(1, 0), 0);
});

test('standing right next to C4 is deadly, at the edge it only scratches', () => {
  const {radius, damage} = items.c4.explosive;
  assert.ok(blastDamage(1, radius, damage) >= 100, 'close blast kills Rom (100 health)');
  assert.ok(blastDamage(radius - .5, radius, damage) < 10);
});

test('C4 has a 10 second fuse and beeps faster as it runs out', () => {
  const {fuse} = items.c4.explosive;
  assert.equal(fuse, 10);
  assert.equal(items.c4.use.action, 'plant');
  assert.equal(beepInterval(fuse, fuse), 1);
  assert.ok(beepInterval(5, fuse) < beepInterval(9, fuse));
  assert.equal(beepInterval(.2, fuse), .12);
});
