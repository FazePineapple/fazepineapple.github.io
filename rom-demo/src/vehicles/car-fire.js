/**
 * Flames and smoke on a burning car's bonnet (issue #71). Lives in the car's
 * own frame, so it follows the car. Level 1 = burning (flames and thick
 * smoke), a value between 0 and 1 = smouldering wreck (smoke only), 0 = out.
 */
export function createCarFire(T, parent) {
  const ball = new T.SphereGeometry(1, 10, 8);
  const group = new T.Group();
  group.visible = false;
  parent.add(group);
  const flames = Array.from({length:7}, (_, i) => {
    const model = new T.Mesh(ball, new T.MeshBasicMaterial({
      color:i % 2 ? 0xffb43a : 0xff5a1f, transparent:true, opacity:.85, depthWrite:false, blending:T.AdditiveBlending,
    }));
    model.position.set((i / 6 - .5) * 1.3, 1.05, .7 + (i % 3) * .45);
    group.add(model);
    return {model, y:model.position.y, phase:i * 1.7};
  });
  const smoke = Array.from({length:9}, (_, i) => {
    const model = new T.Mesh(ball, new T.MeshBasicMaterial({color:0x2d2a28, transparent:true, opacity:0, depthWrite:false}));
    group.add(model);
    return {model, age:i / 9, side:(i % 3 - 1) * .3};
  });
  let level = 0, time = 0;

  return {
    get level() { return level; },
    set(value) { level = value; group.visible = value > 0; },
    update(dt) {
      if (!level) return;
      time += dt;
      for (const flame of flames) {
        const flicker = .8 + .3 * Math.sin(time * 13 + flame.phase) + .15 * Math.sin(time * 31 + flame.phase * 2);
        flame.model.visible = level >= 1;
        flame.model.scale.set(.26 * flicker, .48 * flicker, .26 * flicker);
        flame.model.position.y = flame.y + .14 * flicker;
      }
      for (const puff of smoke) {
        puff.age = (puff.age + dt * .32) % 1;
        puff.model.position.set(puff.side + Math.sin(puff.age * 6 + puff.side * 9) * .25, 1.3 + puff.age * 3.4, 1.1 - puff.age * .6);
        puff.model.scale.setScalar(.25 + puff.age * .95);
        puff.model.material.opacity = Math.sin(puff.age * Math.PI) * .6 * Math.min(1, level + .25);
      }
    },
  };
}
