import test from 'node:test';
import assert from 'node:assert/strict';
import {canCrouch, moveSpeed, crouchLegAngle, blendCrouch, CROUCH_DROP} from '../src/player/stance.js';

const idle = {vehicle:null, seat:null, climbing:null, airborne:false, thrust:false, deathTime:0, emote:null};

test('Rom can crouch only on foot, on the ground and not busy', () => {
  assert.equal(canCrouch(idle), true);
  for (const change of [{vehicle:{}}, {seat:{}}, {climbing:{}}, {airborne:true}, {thrust:true}, {deathTime:1}, {emote:'dance'}])
    assert.equal(canCrouch({...idle, ...change}), false, JSON.stringify(change));
  assert.equal(canCrouch({...idle, emote:'fart'}), true);
});

test('crouching is slower than walking and overrides sprint', () => {
  assert.ok(moveSpeed({crouching:true}) < moveSpeed());
  assert.equal(moveSpeed({crouching:true, running:true, energized:true}), moveSpeed({crouching:true}));
  assert.ok(moveSpeed({running:true}) > moveSpeed());
  assert.ok(moveSpeed({running:true, energized:true}) > moveSpeed({running:true}));
});

test('crouched legs keep the feet on the ground', () => {
  const angle = crouchLegAngle();
  assert.ok(Math.abs(.9 * Math.cos(angle) - (.9 - CROUCH_DROP)) < 1e-9);
  assert.equal(crouchLegAngle(0), 0);
});

test('crouch blend eases toward the target and stays in range', () => {
  let blend = 0;
  for (let i = 0; i < 60; i++) blend = blendCrouch(blend, true, 1 / 60);
  assert.ok(blend > .99 && blend <= 1);
  for (let i = 0; i < 60; i++) blend = blendCrouch(blend, false, 1 / 60);
  assert.ok(blend < .01 && blend >= 0);
});
