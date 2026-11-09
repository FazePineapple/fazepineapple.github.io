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
