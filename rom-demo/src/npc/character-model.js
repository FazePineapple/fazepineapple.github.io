/**
 * Stylised humanoid for NPCs, sized like Rom. `look` comes from
 * content/characters.js. Returns the parts the NPC system animates.
 */
export function buildCharacter(build, look = {}) {
  const {T, box, oval, mesh} = build;
  const {shirt = 0x5b6b7a, trousers = 0x33383d, skin = 0xc9977a, hair = 0x2d2622, hat, glasses, scale = 1} = look;
  const root = new T.Group();
  const body = new T.Group();
  root.add(body);
  root.scale.setScalar(scale);

  oval(body, shirt, 0, 1.22, 0, .26, .37, .16);
  box(0, .97, 0, .3, .07, .2, trousers, body);
  oval(body, skin, 0, 1.6, 0, .075, .09, .072);
  const head = new T.Group();
  head.position.set(0, 1.77, .01);
  body.add(head);
  oval(head, skin, 0, 0, 0, .118, .15, .112);
  oval(head, hair, 0, .1, -.02, .122, .07, .115);
  oval(head, hair, 0, .03, -.07, .114, .1, .066);
  for (const side of [-1, 1]) {
    oval(head, 0x1d1d1f, side * .042, .015, .1, .016, .019, .01);
    oval(head, skin, side * .118, -.005, .005, .022, .04, .024);
  }
  oval(head, 0x9e6755, 0, -.065, .1, .03, .01, .01);
  if (hat !== undefined) {
    oval(head, hat, 0, .09, 0, .135, .06, .125);
    box(0, .07, .12, .2, .02, .12, hat, head);
  }
  if (glasses) {
    for (const side of [-1, 1]) box(side * .045, .015, .112, .07, .045, .012, 0x2a2f33, head);
    box(0, .015, .114, .03, .01, .01, 0x2a2f33, head);
  }

  const arms = [], legs = [];
  for (const side of [-1, 1]) {
    const leg = new T.Group(), arm = new T.Group();
    leg.position.set(side * .12, .9, 0);
    arm.position.set(side * .27, 1.45, 0);
    root.add(leg); body.add(arm);
    oval(leg, trousers, 0, -.3, 0, .1, .37, .1);
    oval(leg, trousers, 0, -.64, 0, .082, .18, .082);
    oval(leg, 0x26292b, 0, -.825, .05, .1, .07, .175);
    oval(arm, shirt, side * .02, -.2, 0, .078, .25, .078);
    oval(arm, skin, side * .024, -.445, .02, .055, .08, .057);
    arms.push(arm); legs.push(leg);
  }

  const label = nameTag(T, look.name ?? '');
  label.position.y = 2.18;
  root.add(label);
  return {root, body, head, arms, legs, label, mesh};
}

function nameTag(T, text) {
  const canvas = document.createElement('canvas');
  canvas.width = 256; canvas.height = 48;
  const context = canvas.getContext('2d');
  context.fillStyle = 'rgba(20,33,25,.82)';
  context.beginPath(); context.roundRect(0, 4, 256, 40, 8); context.fill();
  context.fillStyle = '#d6fa87'; context.font = 'bold 24px system-ui, sans-serif';
  context.textAlign = 'center'; context.fillText(text, 128, 32, 240);
  const map = new T.CanvasTexture(canvas);
  map.colorSpace = T.SRGBColorSpace;
  const sprite = new T.Sprite(new T.SpriteMaterial({map, depthWrite:false, transparent:true}));
  sprite.scale.set(1.15, .22, 1);
  return sprite;
}
