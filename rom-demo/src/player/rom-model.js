import romPhoto from '../../dist/rom.jpg';

/**
 * Rom's stylised model: denim outfit, photo-textured face, jetpack rig,
 * held-item mounts, first-person hands and the small effect props (pee drops,
 * gas cloud). Must be built after the campus and before the interior so the
 * seeded random sequence (denim textures) stays the same.
 */
export function buildRom(build, camera) {
  const {T, scene, mesh, box, oval, texture, surface} = build;
  const player = new T.Group();
  scene.add(player);
  const denim = surface('#3b4d60',['#536479','#374b60','#405367'],2);
  const jeans = surface('#455159',['#52636b','#3d4b53','#4a5963'],2);
  const skin = 0xb68369;

  const torso = new T.Group(); player.add(torso);
  oval(torso,denim,0,1.22,0,.27,.38,.16);
  oval(torso,0x8c8274,0,1.23,.144,.127,.327,.043);
  for(let row=0;row<8;row++)box(0,1.02+row*.043,.177,.15,.012,.017,row%2?0x948c7e:0x756b5e,torso);
  for(const side of [-1,1]) {
    box(side*.109,1.235,.161,.033,.47,.044,0x526273,torso).rotation.z=side*.13;
    box(side*.109,1.474,.116,.12,.13,.048,denim,torso).rotation.z=side*.41;
    box(side*.165,1.32,.152,.103,.084,.03,denim,torso);
    box(side*.165,1.357,.169,.108,.021,.014,0x607184,torso);
    box(side*.167,1.327,.181,.017,.017,.012,0x9a9484,torso);
  }
  box(0,.964,.124,.307,.045,.06,0x312b26,torso);
  box(0,.964,.166,.053,.042,.02,0x8a7456,torso);
  oval(torso,skin,0,1.61,0,.078,.10,.075);
  const headShape = new T.LatheGeometry([
    new T.Vector2(.01,-.15),new T.Vector2(.065,-.14),new T.Vector2(.104,-.10),
    new T.Vector2(.122,-.035),new T.Vector2(.125,.065),new T.Vector2(.115,.128),
    new T.Vector2(.085,.154),new T.Vector2(0,.165)
  ],28);
  const head = mesh(headShape,skin,0,1.777,.016,torso); head.scale.z=.89;
  oval(torso,0x292522,0,1.905,-.006,.119,.049,.104);
  oval(torso,0x302923,0,1.847,-.065,.113,.09,.064);
  for(const side of [-1,1]) {
    oval(torso,skin,side*.12,1.772,.018,.024,.043,.025);
    oval(torso,0x9e6755,side*.133,1.774,.027,.012,.025,.013);
  }
  oval(torso,skin,0,1.767,.126,.026,.031,.028);
  const photo = new Image();
  photo.onload = () => {
    const face = texture(128,c=>{
      c.beginPath();c.ellipse(64,66,61,63,0,0,Math.PI*2);c.clip();
      c.drawImage(photo,176,155,72,94,0,0,128,128);
    });
    const faceShape = new T.PlaneGeometry(.218,.272,16,14);
    const vertices = faceShape.attributes.position;
    for(let i=0;i<vertices.count;i++) {
      const x=vertices.getX(i)/.109,y=vertices.getY(i)/.136;
      vertices.setZ(i,.018-.052*x*x-.037*y*y);
    }
    faceShape.computeVertexNormals();
    const portrait = mesh(faceShape,new T.MeshLambertMaterial({map:face,transparent:true,alphaTest:.5}),0,1.773,.112,torso);
    portrait.castShadow = false;
  };
  photo.src = romPhoto;

  const limbs = [];
  for(const side of [-1,1]) {
    const leg = new T.Group(), arm = new T.Group();
    leg.position.set(side*.126,.9,0); arm.position.set(side*.271,1.45,0);
    player.add(leg); torso.add(arm);
    oval(leg,jeans,0,-.29,0,.104,.37,.103);
    oval(leg,0x292d2d,0,-.825,.052,.103,.072,.179);
    oval(leg,jeans,0,-.64,0,.084,.18,.083);
    oval(arm,denim,side*.021,-.20,0,.081,.254,.079);
    box(side*.021,-.405,.008,.124,.05,.135,denim,arm);
    oval(arm,skin,side*.024,-.445,.023,.058,.083,.059);
    limbs.push({leg,arm,side});
  }
  const rightArm = limbs[1].arm;

  // First-person hands ride on the camera.
  const firstHands = new T.Group(), firstHeld = new T.Group();
  camera.add(firstHands); scene.add(camera); firstHands.add(firstHeld);
  for(const side of [-1,1]) {
    const sleeve = oval(firstHands,denim,side*.27,-.29,-.52,.071,.071,.22);
    sleeve.rotation.y = side*.25;
    oval(firstHands,skin,side*.22,-.235,-.68,.055,.06,.084);
  }
  firstHeld.position.set(.22,-.21,-.69);
  firstHeld.scale.setScalar(.68);
  firstHands.visible = false;

  const held = new T.Group();
  held.position.set(.025,-.43,.10);
  rightArm.add(held);
  const drinkProp = new T.Group();
  rightArm.add(drinkProp); drinkProp.position.set(.024,-.45,.04);

  const jetRig = new T.Group(), exhaust = new T.Group();
  torso.add(jetRig); jetRig.add(exhaust); jetRig.visible = false; exhaust.visible = false;
  const capsule = build.shared('item:jet-capsule', () => new T.CapsuleGeometry(.087,.33,5,10));
  const flame = new T.MeshBasicMaterial({color:0x78d8ff});
  for(const x of [-.125,.125]) {
    mesh(capsule,0x65747a,x,1.25,-.22,jetRig);
    box(x,1.24,-.303,.12,.095,.028,0xe2a13e,jetRig);
    mesh(new T.ConeGeometry(.068,.30,10),flame,x,.84,-.22,exhaust).rotation.x=Math.PI;
  }

  // School backpack (hidden while the jetpack is worn).
  const backpack = new T.Group();
  torso.add(backpack);
  const bag = 0x2f5d8a, trim = 0x203f5e;
  box(0,1.24,-.235,.3,.4,.15,bag,backpack);
  box(0,1.45,-.235,.31,.05,.155,trim,backpack);
  box(0,1.12,-.322,.22,.17,.05,trim,backpack);
  box(0,1.2,-.35,.12,.012,.012,0xd9c46a,backpack);
  for(const side of [-1,1]) {
    box(side*.11,1.47,-.09,.045,.035,.2,trim,backpack);
  }

  // Everything but the root lives in `rig` so emotes can spin the whole body.
  const rig = new T.Group();
  for(const part of [...player.children]) rig.add(part);
  player.add(rig);

  const dropShape = new T.SphereGeometry(.024,5,4), dropMaterial = new T.MeshBasicMaterial({color:0xf5cd69});
  const drops = Array.from({length:12}, () => {
    const drop = new T.Mesh(dropShape,dropMaterial);
    drop.visible = false; scene.add(drop); return drop;
  });
  const gasCloud = new T.Group();
  const cloudMaterial = new T.MeshBasicMaterial({color:0xafc575,transparent:true,depthWrite:false});
  const cloudShape = new T.SphereGeometry(.18,12,8);
  for(const [x,y,z,size] of [[0,0,0,1],[-.15,.035,.055,.74],[.16,.045,-.04,.81],[.04,.11,.12,.7],[-.03,-.05,-.13,.68]]) {
    const cloud = new T.Mesh(cloudShape,cloudMaterial);
    cloud.position.set(x,y,z); cloud.scale.setScalar(size); gasCloud.add(cloud);
  }
  gasCloud.visible = false; scene.add(gasCloud);

  return {
    player, rig, torso, limbs, rightArm, held, drinkProp, jetRig, exhaust, backpack,
    firstHands, firstHeld, drops, gasCloud, cloudMaterial,
  };
}
