/**
 * 3D models for items, used for world pickups, the item in Rom's hand and
 * the first-person view. Add a builder here when a new item needs its own
 * look; items without one fall back to a small crate. Geometries are cached
 * so rebuilding a held item on every hotbar change does not leak GPU memory.
 * Models are built standing on y = 0 at roughly 0.2–0.5 m in size.
 */
export function createItemModels(build, items) {
  const {T, box, mesh, oval, shared} = build;
  const capsule = shared('item:jet-capsule', () => new T.CapsuleGeometry(.087, .33, 5, 10));

  const models = {
    ruler(parent) {
      box(0,.19,0,.058,.38,.016,0xaeb9ba,parent);
      for(let i=0;i<14;i++)box(-.016,.043+i*.023,.009,i%5===0?.021:.012,.003,.003,0x37484c,parent);
    },
    extinguisher(parent) {
      mesh(shared('item:extinguisher', () => new T.CapsuleGeometry(.09,.21,5,12)),0xbb3931,0,.2,0,parent);
      box(0,.22,.086,.095,.105,.013,0xede4d3,parent);
      box(0,.415,.015,.105,.045,.12,0x323d41,parent);
      box(.095,.34,.045,.037,.15,.035,0x282e31,parent);
      box(.095,.28,.101,.047,.04,.092,0x323d41,parent);
    },
    dagger(parent) {
      box(0,.064,0,.055,.128,.053,0x665138,parent);
      box(0,.13,0,.14,.032,.055,0xd2a74f,parent);
      box(0,.235,0,.075,.19,.024,0xd5e1dc,parent);
      box(0,.331,0,.043,.047,.022,0xd5e1dc,parent).rotation.z=Math.PI/4;
    },
    blaster(parent) {
      box(0,.08,0,.075,.16,.09,0x3a5260,parent);
      box(0,.17,.065,.105,.085,.23,0x527f95,parent);
      box(0,.17,.185,.112,.087,.028,0xeb934a,parent);
    },
    jetpack(parent) {
      for(const x of [-.125,.125]) {
        mesh(capsule,0x65747a,x,.27,0,parent);
        box(x,.26,.085,.12,.095,.028,0xe2a13e,parent);
      }
      box(0,.23,0,.24,.18,.11,0x37474e,parent);
    },
    tire(parent) {
      mesh(shared('item:tire', () => new T.TorusGeometry(.26,.086,10,24)),0x262a2c,0,.35,0,parent);
      mesh(shared('item:rim', () => new T.TorusGeometry(.177,.021,8,24)),0x44484a,0,.35,.035,parent);
    },
    crate(parent) {
      box(0,.23,0,.49,.46,.42,0xa77346,parent);
      box(0,.463,0,.095,.008,.42,0xcfad7a,parent);
      box(.246,.23,0,.008,.46,.095,0xcfad7a,parent);
    },
    cinnamon(parent) {
      oval(parent,0xd39a55,0,.071,0,.15,.071,.15);
      for(let i=0;i<35;i++) {
        const angle=i*.36,r=.011+i*.0032;
        oval(parent,0x8a4f34,Math.cos(angle)*r,.137-r*.16,Math.sin(angle)*r,.015,.008,.015);
      }
    },
    juice(parent) {
      box(0,.135,0,.18,.27,.13,0xf09d36,parent);
      box(0,.15,.067,.11,.12,.012,0xf8f0bf,parent);
      box(.04,.197,.079,.017,.15,.015,0xe5e9db,parent).rotation.z=.11;
    },
    muffin(parent) {
      // Ribbed paper cup, a domed top and a few chocolate chips.
      mesh(shared('item:muffin-cup', () => new T.CylinderGeometry(.075,.055,.085,14)),0xd9644f,0,.0425,0,parent);
      for(let i=0;i<7;i++){const a=i/7*Math.PI*2;box(Math.cos(a)*.066,.0425,Math.sin(a)*.066,.008,.08,.008,0xf0a08c,parent).rotation.y=-a;}
      oval(parent,0xc4874a,0,.095,0,.092,.058,.092);
      for(const [x,z] of [[.03,.02],[-.035,.012],[0,-.042],[-.012,.046],[.046,-.022],[0,0]])oval(parent,0x45281a,x,.142-Math.hypot(x,z)*.25,z,.012,.01,.012);
    },
    bun(parent) {
      oval(parent,0xd39a53,0,.071,0,.097,.07,.22);
      oval(parent,0xab4e36,0,.113,0,.055,.046,.212);
      box(0,.156,0,.022,.011,.32,0xedae32,parent);
    },
    beer(parent) {
      mesh(shared('item:bottle', () => new T.CylinderGeometry(.077,.078,.24,12)),0x543522,0,.12,0,parent);
      mesh(shared('item:neck', () => new T.CylinderGeometry(.035,.055,.14,12)),0x543522,0,.29,0,parent);
      mesh(shared('item:label', () => new T.CylinderGeometry(.079,.079,.105,12)),0xd6b375,0,.136,0,parent);
      mesh(shared('item:cap', () => new T.CylinderGeometry(.039,.039,.031,12)),0xa8ac91,0,.37,0,parent);
    },
    chair(parent) {
      // School chair: seat top at 0.47 m, backrest on -z, faces +z.
      box(0,.45,0,.44,.04,.42,0xb07a46,parent);
      box(0,.73,-.2,.42,.3,.035,0xb07a46,parent);
      for(const x of [-.19,.19]) for(const z of [-.18,.18]) box(x,.215,z,.03,.43,.03,0x3c4440,parent);
      for(const x of [-.19,.19]) box(x,.62,-.2,.03,.36,.03,0x3c4440,parent);
    },
    straw(parent) {
      mesh(shared('item:straw', () => new T.CylinderGeometry(.012,.012,.36,8)),0xe6eef0,0,.18,0,parent);
      for(let i=0;i<4;i++)box(0,.04+i*.09,0,.026,.022,.026,0xd8454a,parent);
      oval(parent,0xf4f1e6,.05,.03,.02,.03,.025,.03);
    },
    c4(parent) {
      // Three putty bricks taped together with a timer on top (red LED added when armed).
      for(const x of [-.07,0,.07])box(x,.045,0,.066,.09,.2,0xd8cfae,parent);
      for(const z of [-.06,.06])box(0,.046,z,.215,.094,.022,0x3d4a3a,parent);
      box(0,.105,.03,.13,.035,.09,0x23282b,parent);
      box(-.02,.124,.03,.06,.004,.04,0x6fe36a,parent);
      box(-.05,.1,-.05,.012,.012,.1,0xc93a2f,parent).rotation.x=.3;
      box(.05,.1,-.05,.012,.012,.1,0x2f62c9,parent).rotation.x=.3;
    },
    poop(parent) {
      const brown=[0x5b3a1e,0x6b4425,0x54351b];
      oval(parent,brown[0],0,.045,0,.12,.05,.12);
      oval(parent,brown[1],0,.1,0,.085,.045,.085);
      oval(parent,brown[2],0,.145,0,.05,.04,.05);
      oval(parent,brown[1],.01,.18,0,.022,.03,.022);
    },
    rubberband(parent) {
      // A ruler-and-peg rubber band shooter.
      box(0,.1,0,.03,.2,.03,0x7b5534,parent);
      box(0,.2,.09,.03,.03,.22,0x9a6b42,parent);
      box(0,.215,.19,.05,.02,.02,0xd8a03a,parent);
    },
    glue(parent) {
      mesh(shared('item:glue', () => new T.CylinderGeometry(.03,.03,.17,10)),0xf2f0d8,0,.085,0,parent);
      mesh(shared('item:glue-cap', () => new T.CylinderGeometry(.032,.032,.05,10)),0x4f86c6,0,.19,0,parent);
    },
    notebook(parent) {
      box(0,.012,0,.22,.024,.3,0x3f7d5c,parent);
      box(0,.026,0,.2,.006,.28,0xf4f1e6,parent);
      for(let i=0;i<7;i++)box(-.112,.02,-.12+i*.04,.012,.03,.012,0xb9c0c2,parent);
    },
    scissors(parent) {
      for(const side of [-1,1]) {
        box(side*.012,.16,0,.016,.17,.008,0xd3dadb,parent).rotation.z=side*.08;
        oval(parent,0xd0453f,side*.03,.04,0,.028,.035,.01);
      }
    },
    compass(parent) {
      for(const side of [-1,1]) box(side*.025,.11,0,.012,.22,.012,0xa8b0b3,parent).rotation.z=side*.14;
      box(0,.225,0,.03,.03,.02,0x3c4648,parent);
    },
    chalk(parent) {
      mesh(shared('item:chalk', () => new T.CylinderGeometry(.012,.012,.09,8)),0xf7f7f2,0,.012,0,parent).rotation.z=Math.PI/2;
    },
    camera(parent) {
      box(0,.07,0,.16,.1,.07,0x2b2f33,parent);
      mesh(shared('item:lens', () => new T.CylinderGeometry(.033,.036,.05,14)),0x15181a,0,.07,.055,parent).rotation.x=Math.PI/2;
      box(.05,.128,0,.03,.016,.03,0xd0453f,parent);
      box(-.04,.13,0,.04,.02,.04,0xe6e9ea,parent);
    },
    oz(parent) {
      mesh(shared('item:can', () => new T.CylinderGeometry(.04,.04,.15,14)),0x1d2b22,0,.075,0,parent);
      mesh(shared('item:can-band', () => new T.CylinderGeometry(.041,.041,.05,14)),0x7ee04a,0,.085,0,parent);
      mesh(shared('item:can-top', () => new T.CylinderGeometry(.036,.04,.01,14)),0xc7ccce,0,.155,0,parent);
    },
    generic(parent) {
      box(0,.13,0,.26,.26,.26,0xc9b27a,parent);
      box(0,.262,0,.27,.012,.06,0x8b6f45,parent);
    },
  };

  return {
    /** Builds the model for `id` into `parent` and returns `parent`. */
    build(id, parent) {
      const key = items[id]?.model ?? id;
      (models[key] ?? models.generic)(parent);
      return parent;
    },
    has:id => Object.hasOwn(models, items[id]?.model ?? id),
  };
}
