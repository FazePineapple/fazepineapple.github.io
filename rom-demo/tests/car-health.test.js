import test from 'node:test';
import assert from 'node:assert/strict';
import {CAR_HP, FIRE_SECONDS, CAR_BLAST, crashDamage, rammingDamage} from '../src/vehicles/car-health.js';
import {blastDamage} from '../src/combat/blast.js';
import {items} from '../content/items.js';
import {spawns} from '../content/spawns.js';

test('gentle bumps do not hurt the car, full-speed crashes do', () => {
  assert.equal(crashDamage(4), 0);
  assert.equal(crashDamage(-5), 0);
  assert.equal(crashDamage(15), 45);
  assert.ok(crashDamage(10) < crashDamage(15));
  // Three full-speed crashes wreck a fresh car.
  assert.ok(crashDamage(15) * 3 >= CAR_HP);
});

test('running bots over wears the car down a little', () => {
  assert.equal(rammingDamage(0, 15), 0);
  assert.ok(rammingDamage(1, 15) > 0 && rammingDamage(1, 15) < 10);
});

test('a burning car explodes after five seconds and kills anyone right next to it', () => {
  assert.equal(FIRE_SECONDS, 5);
  assert.ok(blastDamage(1, CAR_BLAST.radius, CAR_BLAST.damage) >= 100);
  assert.ok(blastDamage(CAR_BLAST.radius - .5, CAR_BLAST.radius, CAR_BLAST.damage) < 10);
});

test('the muffin is food that can be found in the world', () => {
  const muffin = items.muffin;
  assert.equal(muffin.use.animation, 'eat');
  assert.ok(muffin.use.effects.some(effect => effect.health > 0));
  assert.ok(spawns.filter(spawn => spawn.item === 'muffin').length >= 1);
});
