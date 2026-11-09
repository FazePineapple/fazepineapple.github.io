import {items, createInventory} from './inventory.js';
import {buildInterior} from './interior.js';
import {createCombat} from './combat.js';
import * as T from './three.module.js';
import romPhoto from './dist/rom.jpg';

const $ = id => document.getElementById(id);
try { boot(); } catch (error) { console.error(error); $('error').hidden = false; $('start').disabled = true; }

function boot() {
  const scene = new T.Scene();
  scene.background = new T.Color(0xa9c7d5);
  scene.fog = new T.FogExp2(0xa9c7d5, .009);
  const camera = new T.PerspectiveCamera(59, 1, .1, 250);
  const renderer = new T.WebGLRenderer({antialias:true});
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = T.PCFShadowMap;
  renderer.setPixelRatio(Math.min(devicePixelRatio, 1.65));
  $('world').append(renderer.domElement);
  scene.add(new T.HemisphereLight(0xe1f0ff, 0x747257, 2.1));
  const sun = new T.DirectionalLight(0xffe0b1, 2.35);
  sun.position.set(-33, 55, 27);
  sun.castShadow = true;
  Object.assign(sun.shadow.camera, {left:-65,right:65,top:65,bottom:-65,far:170});
  sun.shadow.mapSize.set(2048,2048);
  sun.shadow.normalBias = .035;
  scene.add(sun);

  const material = color => new T.MeshStandardMaterial({color, roughness:.94});
  const palette = new Map();
  const mat = color => {
    if (!palette.has(color)) palette.set(color, material(color));
    return palette.get(color);
  };
  const cube = new T.BoxGeometry(1,1,1);
  function mesh(geometry, color, x,y,z, parent = scene) {
    const object = new T.Mesh(geometry, typeof color === 'number' ? mat(color) : color);
    object.position.set(x,y,z);
    object.castShadow = true;
    object.receiveShadow = true;
    parent.add(object);
    return object;
  }
  function box(x,y,z,w,h,d,color,parent) {
    const object = mesh(cube,color,x,y,z,parent);
    object.scale.set(w,h,d);
    return object;
  }
  let seed = 134;
  const random = () => ((seed = (Math.imul(seed,1664525)+1013904223) >>> 0) / 4294967296);
  function texture(size, draw, repeats=1) {
    const canvas = document.createElement('canvas');
    canvas.width = canvas.height = size;
    draw(canvas.getContext('2d'));
    const map = new T.CanvasTexture(canvas);
    map.colorSpace = T.SRGBColorSpace;
    map.wrapS = map.wrapT = T.RepeatWrapping;
    map.repeat.set(repeats,repeats);
    map.anisotropy = renderer.capabilities.getMaxAnisotropy();
    return map;
  }
  function normalMap(colorMap, strength) {
    const source=colorMap.image;
    const size=source.width;
    const pixels=source.getContext('2d').getImageData(0,0,size,size).data;
    const sample=(x,y)=>pixels[((y+size)%size*size+(x+size)%size)*4]/255;
    const normal=texture(size,c=>{
      const output=c.createImageData(size,size);
      for(let y=0;y<size;y++) for(let x=0;x<size;x++) {
        const dx=(sample(x-1,y)-sample(x+1,y))*strength;
        const dy=(sample(x,y+1)-sample(x,y-1))*strength;
        const length=Math.hypot(dx,dy,1);
        output.data.set([128+127*dx/length,128+127*dy/length,128+127/length,255],(y*size+x)*4);
      }
      c.putImageData(output,0,0);
    });
    normal.colorSpace=T.NoColorSpace;
    normal.repeat.copy(colorMap.repeat);
    return normal;
  }
  function surface(base, flecks, repeats, paving=false) {
    const map=texture(128, c => {
      c.fillStyle = base; c.fillRect(0,0,128,128);
      for(let i=0;i<2200;i++) {
        c.fillStyle = flecks[i%flecks.length];
        c.fillRect(random()*128,random()*128,1+random()*4,1+random()*3);
      }
      if(paving) {
        c.fillStyle='#848477';
        for(let i=0;i<128;i+=32) {c.fillRect(0,i,128,1);c.fillRect(i,0,1,128);}
      }
    }, repeats);
    return new T.MeshStandardMaterial({map,normalMap:normalMap(map,paving?3:1.4)});
  }
  const grass = surface('#688052',['#789459','#60784b','#71854b','#84915b'],52);
  const paving = surface('#b1ad9f',['#aaa99d','#bbb7aa','#a29f92'],9,true);
  const asphalt = surface('#62696a',['#737879','#626868','#585f60'],12);
  box(0,-.17,0,240,.3,240,grass).castShadow=false;
  box(-6,-.035,3,57,.09,33,paving).castShadow=false;
  box(-44,-.04,20,17,.08,108,asphalt).castShadow=false;
  box(-25,-.025,22,35,.08,9,asphalt).castShadow=false;
  box(26,-.028,-6,4,.07,59,paving).castShadow=false;
  box(10,-.021,18,34,.08,3.6,paving).castShadow=false;
  box(8,.015,8,22,.07,13,grass).castShadow=false;
  for(let i=0;i<11;i++) box(-39,.015,-21+i*4.1,4,.018,.08,0xd8d7bd).castShadow=false;

  const brickMap = texture(128,c=>{
    c.fillStyle='#b38374'; c.fillRect(0,0,128,128);
    for(let row=0;row<12;row++) for(let col=-1;col<5;col++) {
      const light=42+random()*9;
      c.fillStyle='hsl(10 34% '+light+'%)';
      c.fillRect(col*32+(row%2)*16,row*128/12,31,128/12-1);
    }
  });
  const brickNormal=normalMap(brickMap,5);
  function brick(w,h) {
    const map=brickMap.clone();
    map.repeat.set(w/2.9,h/2.35);
    const normal=brickNormal.clone(); normal.repeat.copy(map.repeat);
    return new T.MeshStandardMaterial({map,normalMap:normal,roughness:1});
  }
  const buildings=[];
  function facadeWindows(x,z,span,h,turn,gray) {
    const front=new T.Group();
    front.position.set(x,0,z); front.rotation.y=turn; scene.add(front);
    const count=Math.floor(span/(gray?4.1:2.45));
    for(let floor=0;floor<3;floor++) for(let i=0;i<count;i++) {
      if(gray && floor===0) continue;
      const xx=(i-(count-1)/2)*span/count;
      const yy=2.05+floor*2.62;
      const wh=gray&&floor===1?.68:1.47;
      box(xx,yy,.025,1.57,wh,.09,0xe2dfd2,front);
      box(xx,yy,.081,1.36,wh-.17,.035,[0x2c4a58,0x46606a,0x233a43][Math.floor(random()*3)],front);
      box(xx,yy,.108,.07,wh-.12,.035,0xe3e0d4,front);
      if(!gray) box(xx,yy-.11,.109,1.42,.062,.035,0xe3e0d4,front);
      box(xx,yy-wh/2,.092,1.7,.085,.19,0xe2ded0,front);
    }
  }
  function building(x,z,w,d,h,gray=false) {
    buildings.push({x,z,w,d});
    const face=gray?concrete:brick(w,h);
    const side=gray?face:brick(d,h);
    box(x,h/2,z,w,h,d,[side,side,mat(0x555a5b),face,face,face]);
    box(x,h+.09,z,w+.26,.21,d+.26,gray?0x414c52:0x956e64);
    box(x,.23,z,w+.07,.46,d+.07,0x7c7c70);
    facadeWindows(x,z+d/2,w,h,0,gray);
    facadeWindows(x,z-d/2,w,h,Math.PI,gray);
    facadeWindows(x+w/2,z,d,h,Math.PI/2,gray);
    facadeWindows(x-w/2,z,d,h,-Math.PI/2,gray);
  }
  const concrete=surface('#68777d',['#627177','#6b797e','#647176'],5);
  building(-11,-16,31,12,9.1);
  building(10,-19,12,23,9.25);
  building(21,-32,23,12,9.05);
  building(22,-10,12,15,10.5,true);
  building(-29,-12,12,14,9.8,true);
  building(-39,-20,9,20,8.8);
  building(-36,-31,15,10,8.8);
  building(-39,-43,11,14,8.5);
  function entrance(x,z,letters) {
    box(x,1.35,z,4.9,2.6,.16,0xd2d4ca);
    for(let i=-2;i<=2;i++) {
      box(x+i*.89,1.37,z+.11,.77,2.32,.08,0x344c50);
      box(x+i*.89,1.06,z+.17,.74,.07,.04,0xe4e3d5);
    }
    box(x,2.84,z+.84,5.8,.15,2.18,0x7f9192);
    for(const offset of [-2.65,2.65]) box(x+offset,1.39,z+1.85,.09,2.78,.09,0xd8dbd0);
    for(let step=0;step<3;step++) {
      const height=(3-step)*.15;
      box(x,height/2,z+.57+step*.53,5.6,height,1.15,concrete);
    }
    for(const side of [-2.69,2.69]) {
      for(let step=0;step<3;step++)box(x+side,.91-step*.13,z+.5+step*.57,.05,.96,.05,0xc9d3d0);
      box(x+side,1.26,z+1.02,.055,.055,1.74,0xc9d3d0).rotation.x=.24;
    }
    const sign=new T.MeshBasicMaterial({transparent:true,depthWrite:false,map:texture(256,c=>{
      c.fillStyle='#d5dfd8';c.font='600 23px sans-serif';c.textAlign='center';
      letters.forEach((line,i)=>c.fillText(line,128,110+i*28,246));
    })});
    mesh(new T.PlaneGeometry(7,2.4),sign,x,3.58,z+.18).castShadow=false;
    const lettersMap=texture(512,c=>{
      c.fillStyle='#c0cbca'; c.font='54px sans-serif';
      const glyphs=['N','e','r','d','O','Y','m','a','J','p','^'];
      const points=[[41,95],[100,183],[237,158],[54,315],[339,327],[409,425],[410,68],[280,96],[133,410],[399,231],[333,451]];
      glyphs.forEach((letter,i)=>c.fillText(letter,...points[i]));
    });
    const lettersMat=new T.MeshBasicMaterial({map:lettersMap,transparent:true,depthWrite:false});
    mesh(new T.PlaneGeometry(11.5,9.2),lettersMat,x,4.9,z+.019).castShadow=false;
  }
  entrance(-29,-4.96,['NEMENČINĖS GEDIMINO GIMNAZIJA','Non scholae sed vitae discimus']);
  entrance(22,-2.46,['NEMENČINĖ','GEDIMINO GIMNAZIJA']);
  const trunk=new T.CylinderGeometry(.13,.28,1,7);
  const needles=new T.ConeGeometry(1,1,8);
  const trees=[];
  function pine(x,z,h) {
    trees.push({x,z});
    const stem=mesh(trunk,0x68513c,x,h*.39,z);
    stem.scale.set(h*.115,h*.78,h*.115);
    for(let i=0;i<3;i++) {
      const crown=mesh(needles,[0x294c36,0x345b3d,0x466a45][i],x,h*(.66+i*.115),z);
      crown.scale.set(h*(.22-i*.04),h*.48,h*(.22-i*.04));
      crown.rotation.y=random()*6;
    }
  }
  pine(-2,10,12); pine(16,12,13); pine(-15,16,10); pine(31,1,13);
  for(let i=0;i<165;i++) {
    const x=random()*180-90,z=random()*150-78;
    if((x < -53 || x > 36 || z < -40 || z > 40) && !(x > -55 && x < -34)) pine(x,z,6+random()*10);
  }
  for (const [x,z] of [[-27,5],[-12,6],[1,3],[18,17],[29,9],[-32,17]]) {
    box(x,1.58,z,.085,3.16,.085,0x505650);
    mesh(new T.CylinderGeometry(.32,.12,.18,8),0x3e4843,x,3.23,z);
  }
  for(const [x,z] of [[-13,1],[4,15],[24,3]]) {
    box(x,.47,z,2.15,.10,.52,0x805739);
    box(x,.75,z-.23,2.15,.24,.09,0x805739);
    for(const side of [-.82,.82]) box(x+side,.23,z,.095,.46,.43,0x444b43);
  }

  const ramp={left:24,right:33,z:-.99,width:1.35,height:.45};
  const rampLength=ramp.right-ramp.left;
  const rampDeck=box((ramp.left+ramp.right)/2,.18,ramp.z,rampLength,.09,ramp.width,concrete);
  rampDeck.rotation.z=-Math.atan2(ramp.height,rampLength);
  for(const side of [-1,1]) {
    const z=ramp.z+side*ramp.width/2;
    box((ramp.left+ramp.right)/2,1.16,z,rampLength,.05,.05,0xc9d3d0).rotation.z=rampDeck.rotation.z;
    for(let i=0;i<=6;i++)box(ramp.left+rampLength*i/6,.45+ramp.height*(1-i/6),z,.045,.92,.045,0xc9d3d0);
  }
  for(const [x,z,w,d] of [[-42,-53,18,3],[30,-26,3,51],[1,-42,52,2.5],[-27,-38,2.5,35]]) {
    box(x,-.012,z,w,.07,d,paving).castShadow=false;
  }
  const hills=[{x:8,z:10,r:5.8,h:.86},{x:33,z:17,r:5.6,h:1.15},{x:-22,z:31,r:7.1,h:1.35},{x:41,z:-20,r:8,h:1.65}];
  function hillHeight(hill,x,z) {
    const radius=Math.hypot(x-hill.x,z-hill.z)/hill.r;
    return hill.h*Math.max(0,1-radius*radius)**2;
  }
  function groundAt(x,z) {
    let height=.03;
    for(const hill of hills)height=Math.max(height,hillHeight(hill,x,z)+.03);
    for(const entranceX of [-29,22]) {
      const edge=entranceX===22?-2.46:-4.96;
      if(Math.abs(x-entranceX)>2.8)continue;
      for(let step=0;step<3;step++) {
        if(Math.abs(z-edge-.57-step*.53)<.575)height=Math.max(height,(3-step)*.15+.03);
      }
    }
    if(x>=ramp.left && x<=ramp.right && Math.abs(z-ramp.z)<ramp.width/2) {
      height=Math.max(height,ramp.height*(ramp.right-x)/rampLength+.03);
    }
    return height;
  }
  for(const hill of hills) {
    const geometry=new T.PlaneGeometry(hill.r*2,hill.r*2,34,34);
    geometry.rotateX(-Math.PI/2);
    const points=geometry.attributes.position;
    for(let i=0;i<points.count;i++)points.setY(i,hillHeight(hill,hill.x+points.getX(i),hill.z+points.getZ(i))-.07);
    geometry.computeVertexNormals();
    const hillGrass=grass.clone();
    hillGrass.map=grass.map.clone();hillGrass.normalMap=grass.normalMap.clone();
    hillGrass.map.repeat.setScalar(4);hillGrass.normalMap.repeat.setScalar(4);
    mesh(geometry,hillGrass,hill.x,.069,hill.z).castShadow=false;
  }
  const flowers=new T.IcosahedronGeometry(1,0);
  for(const [bedX,bedZ] of [[8,10],[15,12],[-23,30],[33,17],[-25,-3],[26,1]]) {
    for(let i=0;i<17;i++) {
      const x=bedX+(random()-.5)*3.7,z=bedZ+(random()-.5)*1.8;
      const y=groundAt(x,z),height=.12+random()*.14;
      box(x,y+height/2,z,.024,height,.024,0x426334).castShadow=false;
      mesh(flowers,[0xf8e6a2,0xf2a1a4,0xecece4,0xbd9dde][i%4],x,y+height,z).scale.set(.069,.049,.069);
    }
  }
  for(const [x,z] of [[-25,-.8],[29,1],[-17,4],[34,-16],[-30,-43]]) {
    for(let i=0;i<6;i++) {
      const shrub=mesh(new T.IcosahedronGeometry(.6,1),i%2?0x456041:0x587448,x+i*.62,.35,z);
      shrub.scale.set(1,.85,1);
    }
  }
  const poleX=-24,poleZ=-1;
  box(poleX,3.7,poleZ,.085,7.4,.085,0xc9d0c8);
  [0xe8b832,0x3d7651,0xb04642].forEach((color,i)=>box(poleX+.56,7.15-i*.25,poleZ,1.14,.25,.045,color));
  box(18,.28,.15,.72,.56,.72,0x85847a);
  mesh(new T.CylinderGeometry(.17,.25,1.46,7),0x785339,18,1.28,.15);
  box(18,2.04,.15,.27,.39,.26,0x8d6648);

  const player=new T.Group(); scene.add(player);
  const denim=0x34495a, jeans=0x34404a, skin=0xb68369;
  const ellipsoid=new T.SphereGeometry(1,16,12);
  function oval(parent,color,x,y,z,w,h,d) {
    const part=mesh(ellipsoid,color,x,y,z,parent); part.scale.set(w,h,d);return part;
  }
  const torso=new T.Group(); player.add(torso);
  oval(torso,denim,0,1.22,0,.27,.38,.16);
  oval(torso,0x252e2d,0,1.22,-.145,.21,.28,.105);
  box(0,1.17,-.236,.29,.12,.018,0x4f6154,torso);
  oval(torso,skin,0,1.61,0,.078,.10,.075);
  oval(torso,skin,0,1.77,.016,.128,.166,.119);
  oval(torso,0x282420,0,1.865,-.018,.133,.111,.113);
  const photo=new Image();
  photo.onload=()=>{
    const face=texture(128,c=>{
      c.beginPath();c.ellipse(64,66,61,63,0,0,Math.PI*2);c.clip();
      c.drawImage(photo,176,155,72,94,0,0,128,128);
    });
    const portrait=mesh(new T.PlaneGeometry(.218,.295),new T.MeshStandardMaterial({map:face,transparent:true,alphaTest:.5}),0,1.774,.132,torso);
    portrait.castShadow=false;
  };
  photo.src=romPhoto;
  const limbs=[];
  for(const side of [-1,1]) {
    const leg=new T.Group(),arm=new T.Group();
    leg.position.set(side*.126,.9,0); arm.position.set(side*.271,1.45,0);
    player.add(leg); torso.add(arm);
    oval(leg,jeans,0,-.29,0,.104,.37,.103);
    oval(leg,0x292d2d,0,-.825,.052,.103,.072,.179);
    oval(leg,jeans,0,-.64,0,.084,.18,.083);
    oval(arm,denim,side*.021,-.20,0,.081,.254,.079);
    oval(arm,skin,side*.024,-.445,.023,.058,.083,.059);
    limbs.push({leg,arm,side});
  }

  let active=false, yaw=0, pitch=.35, stride=0, dragging=false, lastX=0,lastY=0;
  const keys=new Set(), touchKeys=new Map();
  const target=new T.Vector3(), wanted=new T.Vector3();
  const cameraRay=new T.Ray(), obstacle=new T.Box3(), intersection=new T.Vector3();
  const movement=new T.Vector3(), direction=new T.Vector3();
  const canvas=renderer.domElement;
  const map=$('radar').getContext('2d');
  const interior=buildInterior(T,scene,box,surface,texture);
  const outdoorDoor={x:22,z:.65};
  const entranceMarker=mesh(new T.RingGeometry(.65,.73,32),
    new T.MeshBasicMaterial({color:0xc8ed80,side:T.DoubleSide}),22,.065,2.05);
  entranceMarker.rotation.x=-Math.PI/2;
  entranceMarker.castShadow=false;
  const inside=(x)=>x>200;
  const hits=(walls,x,z)=>walls.some(b=>Math.abs(x-b.x)<b.w/2+.38 && Math.abs(z-b.z)<b.d/2+.38);
  const block=(x,z) => inside(x) ? hits(interior.walls,x,z) : Math.abs(x)>63 || Math.abs(z)>58 ||
    buildings.some(b=>Math.abs(x-b.x)<b.w/2+.38 && Math.abs(z-b.z)<b.d/2+.38) ||
    trees.some(t=>(x-t.x)**2+(z-t.z)**2<.58**2);
  const combat=createCombat(T,scene,box,oval,groundAt,block);
  const fists={name:'Fists',damage:18,range:2,aim:.42,cooldown:.48};
  let equipped=null, attackTime=0, swing=0;
  const held=new T.Group();
  held.position.set(.025,-.43,.10);
  limbs[1].arm.add(held);
  function weaponModel(id,parent) {
    if(id==='dagger') {
      box(0,.064,0,.055,.128,.053,0x665138,parent);
      box(0,.13,0,.14,.032,.055,0xd2a74f,parent);
      box(0,.235,0,.075,.19,.024,0xd5e1dc,parent);
      box(0,.331,0,.043,.047,.022,0xd5e1dc,parent).rotation.z=Math.PI/4;
    } else {
      box(0,.08,0,.075,.16,.09,0x3a5260,parent);
      box(0,.17,.065,.105,.085,.23,0x527f95,parent);
      box(0,.17,.185,.112,.087,.028,0xeb934a,parent);
    }
  }
  function equip(id) {
    equipped=equipped===id?null:id;
    held.clear();
    if(equipped)weaponModel(equipped,held);
    renderSlots();
  }
  function attack() {
    if(attackTime>0)return;
    const weapon=equipped?items[equipped].weapon:fists;
    attackTime=weapon.cooldown;swing=.26;
    notice(weapon.name+' · '+combat.attack(player.position,yaw,weapon));
  }
  const inventory=createInventory();
  let selected=0, grabbed=null, packOpen=false;
  let health=100, stamina=100, exhausted=false, recovery=0;
  let airborne=false, verticalSpeed=0, pickupMessage='', messageTime=0;
  const pickups=[];
  const effects={dizzy:0,gas:0,bladder:0};
  let gasDelay=0, bladderDelay=0, puffTime=0;
  const puff=new T.Mesh(new T.SphereGeometry(.21,12,8),
    new T.MeshBasicMaterial({color:0xafc575,transparent:true,depthWrite:false}));
  puff.visible=false;scene.add(puff);
  function useItem(index=selected) {
    const slot=inventory.slots[index];
    if(slot && items[slot.id].weapon){equip(slot.id);return;}
    const id=inventory.take(index);
    if(!id){notice('Selected slot is empty');return;}
    for(const effect of items[id].effects) {
      if(effect.type==='stamina') {
        stamina=Math.min(100,stamina+effect.amount);
        if(stamina>=22)exhausted=false;
      } else effects[effect.type]=effect.seconds;
    }
    if(id==='juice')bladderDelay=4;
    notice({juice:'Juice finished · Find a restroom when the urge hits',bun:'Sausage bun eaten · +40 stamina',beer:'Beer finished · Feeling dizzy'}[id]);
    grabbed=null;renderSlots();updateVitals();
  }
  function updateEffects(dt,sprinting) {
    for(const effect of Object.keys(effects))effects[effect]=Math.max(0,effects[effect]-dt);
    gasDelay=Math.max(0,gasDelay-dt);
    if(effects.gas && sprinting && !gasDelay) {
      gasDelay=2.2;puffTime=.65;
      puff.position.copy(player.position);
      puff.position.y+=.89;
      puff.position.x-=Math.sin(player.rotation.y)*.4;
      puff.position.z-=Math.cos(player.rotation.y)*.4;
      notice('Prrrt!');
    }
    puffTime=Math.max(0,puffTime-dt);
    puff.visible=puffTime>0;
    puff.material.opacity=puffTime*.65;
    puff.scale.setScalar(1+(.65-puffTime)*1.3);
    if(effects.bladder) {
      bladderDelay-=dt;
      if(bladderDelay<=0){notice('Rom needs to pee · Find the WC');bladderDelay=8;}
    }
    const label=[effects.dizzy&&'Dizzy',effects.gas&&'Gassy',effects.bladder&&(bladderDelay>8?'Restroom relief':'Needs the WC')].filter(Boolean).join(' · ');
    if($('effects').textContent!==label)$('effects').textContent=label;
    $('effects').hidden=!label;
  }
  function nearbyAction() {
    const {x,z}=player.position;
    const near=point=>Math.hypot(x-point.x,z-point.z)<2.35;
    if(!inside(x) && near(outdoorDoor))return {label:'Enter school',run:()=>changeArea(true)};
    if(inside(x) && near(interior.exit))return {label:'Exit to courtyard',run:()=>changeArea(false)};
    if(effects.bladder && inside(x) && near(interior.restroom))return {
      label:'Use restroom',
      run:()=>{bladderDelay=9;notice('Much better. The juice will catch up again soon.');}
    };
    return null;
  }
  function changeArea(enter) {
    player.position.set(enter?interior.origin:outdoorDoor.x,.03,enter?9:3.2);
    yaw=enter?0:Math.PI;pitch=.22;
    player.rotation.y=enter?Math.PI:0;
    verticalSpeed=0;airborne=false;
    notice(enter?'Inside Gedimino gimnazija':'School courtyard');
  }
  function interact() {
    const action=nearbyAction();
    if(action)action.run();
    else pickupItem();
  }
  const bottleBody=new T.CylinderGeometry(.077,.078,.24,12);
  const bottleNeck=new T.CylinderGeometry(.035,.055,.14,12);
  function spawnItem(id,x,z,y=groundAt(x,z),velocity=null) {
    const model=new T.Group();
    scene.add(model);
    model.position.set(x,y,z);
    if(items[id].weapon)weaponModel(id,model);
    else if(id==='juice') {
      box(0,.135,0,.18,.27,.13,0xf09d36,model);
      box(0,.15,.067,.11,.12,.012,0xf8f0bf,model);
      box(.04,.197,.079,.017,.15,.015,0xe5e9db,model).rotation.z=.11;
    } else if(id==='bun') {
      oval(model,0xd39a53,0,.071,0,.097,.07,.22);
      oval(model,0xab4e36,0,.113,0,.055,.046,.212);
      box(0,.156,0,.022,.011,.32,0xedae32,model);
    } else {
      mesh(bottleBody,0x543522,0,.12,0,model);
      mesh(bottleNeck,0x543522,0,.29,0,model);
      mesh(new T.CylinderGeometry(.079,.079,.105,12),0xd6b375,0,.136,0,model);
      mesh(new T.CylinderGeometry(.039,.039,.031,12),0xa8ac91,0,.37,0,model);
    }
    const marker=mesh(new T.RingGeometry(.25,.29,20),new T.MeshBasicMaterial({color:0xe5f49d,side:T.DoubleSide}),x,groundAt(x,z)+.022,z);
    marker.rotation.x=-Math.PI/2;
    marker.castShadow=false;
    marker.visible=!velocity;
    pickups.push({id,model,marker,velocity,delay:velocity?.y ? .6 : 0});
  }
  spawnItem('dagger',-4,23);
  spawnItem('blaster',3,24);
  spawnItem('juice',-9,19);
  spawnItem('bun',-6,16.6);
  spawnItem('beer',-12,15);
  spawnItem('juice',8,10);
  spawnItem('bun',-27,1);
  spawnItem('beer',35,14);
  function nearestItem() {
    let nearest=null, range=2.25;
    for(const pickup of pickups) {
      if(pickup.delay>0 || pickup.velocity)continue;
      const distance=pickup.model.position.distanceTo(player.position);
      if(distance<range){range=distance;nearest=pickup;}
    }
    return nearest;
  }
  function pickupItem() {
    const pickup=nearestItem();
    if(!pickup)return;
    if(!inventory.add(pickup.id)){notice('Inventory full');return;}
    notice('Picked up '+items[pickup.id].name);
    scene.remove(pickup.model,pickup.marker);
    pickup.marker.material.dispose();
    pickup.marker.geometry.dispose();
    pickups.splice(pickups.indexOf(pickup),1);
    renderSlots();
  }
  function notice(message) {
    pickupMessage=message; messageTime=1.3;
  }
  function throwItem(index=selected) {
    const id=inventory.take(index);
    if(!id){notice('Selected slot is empty');return;}
    const position=player.position;
    const force=new T.Vector3(-Math.sin(yaw),0,-Math.cos(yaw));
    const x=position.x+force.x*.7,z=position.z+force.z*.7;
    force.multiplyScalar(8.5); force.y=3.2;
    const obstructed=block(x,z);
    spawnItem(id,obstructed?position.x:x,obstructed?position.z:z,position.y+1.28,force);
    grabbed=null;
    renderSlots();
  }
  function updatePickups(dt) {
    for(const pickup of pickups) {
      pickup.delay=Math.max(0,pickup.delay-dt);
      const {model,marker,velocity}=pickup;
      if(!velocity)continue;
      const p=model.position;
      velocity.y-=14*dt;
      if(block(p.x+velocity.x*dt,p.z))velocity.x*=-.35;
      if(block(p.x,p.z+velocity.z*dt))velocity.z*=-.35;
      p.addScaledVector(velocity,dt);
      model.rotation.x+=dt*7;
      model.rotation.z+=dt*2;
      const floor=groundAt(p.x,p.z);
      if(p.y>floor)continue;
      p.y=floor;
      if(velocity.y<-2.6) {
        velocity.y*=-.31;
        velocity.x*=.65; velocity.z*=.65;
      } else {
        pickup.velocity=null;
        model.rotation.set(0,model.rotation.y,0);
        marker.position.set(p.x,floor+.022,p.z);
        marker.visible=true;
      }
    }
  }

  const groups=[[$('hotbar'),0,9],[$('backpack'),9,36],[$('packHotbar'),0,9]];
  for(const [group,start,end] of groups) {
    for(let index=start;index<end;index++) {
      const button=document.createElement('button');
      button.className='slot';
      button.onclick=()=>{
        if(group===$('hotbar'))selected=index;
        else if(grabbed===null) { if(inventory.slots[index])grabbed=index; }
        else { inventory.move(grabbed,index);grabbed=null; }
        renderSlots();
      };
      group.append(button);
    }
  }
  function renderSlots() {
    if(equipped && !inventory.slots.some(slot=>slot?.id===equipped)) {
      equipped=null;held.clear();
    }
    $('equipped').textContent=equipped?items[equipped].name:'Fists';
    for(const [group,start,end] of groups) for(let index=start;index<end;index++) {
      const button=group.children[index-start];
      const slot=inventory.slots[index];
      const description=slot?items[slot.id].name+' × '+slot.count:'Empty';
      button.setAttribute('aria-label','Slot '+(index+1)+': '+description);
      button.title=slot&&items[slot.id].description?description+' · '+items[slot.id].description:description;
      button.classList.toggle('selected',group===$('hotbar')?index===selected:index===grabbed);
      button.textContent=slot?items[slot.id].icon:'';
      if(index<9) {
        const number=document.createElement('small');number.textContent=index+1;button.append(number);
      }
      if(slot) {
        const count=document.createElement('b');count.textContent=slot.count;button.append(count);
      }
    }
    const slot=inventory.slots[grabbed ?? selected];
    $('itemDetails').textContent=grabbed!==null && slot
      ? items[slot.id].name+' × '+slot.count+' · Choose a destination slot.'
      : 'Select an item, then click a slot to move or stack it.';
    $('packThrow').disabled=!slot;
    $('packUse').disabled=!slot;
    $('packUse').textContent=slot && items[slot.id].weapon?(slot.id===equipped?'Unequip':'Equip'):slot?.id==='bun'?'Eat one':'Drink one';
    if(slot && items[slot.id].description)$('itemDetails').textContent=items[slot.id].description;
  }
  function togglePack(open) {
    packOpen=open;grabbed=null;keys.clear();touchKeys.clear();dragging=false;
    $('inventory').hidden=!open;
    if(open && document.pointerLockElement===canvas)document.exitPointerLock();
    renderSlots();
    if(open)$('closePack').focus();
    else $('packButton').blur();
  }
  $('packButton').onclick=()=>togglePack(true);
  $('closePack').onclick=()=>togglePack(false);
  $('packThrow').onclick=()=>throwItem(grabbed ?? selected);
  $('jumpButton').onclick=()=>jump();
  $('pickButton').onclick=interact;
  $('useButton').onclick=()=>useItem();
  $('attackButton').onclick=attack;
  $('packUse').onclick=()=>useItem(grabbed ?? selected);
  $('throwButton').onclick=()=>throwItem();
  renderSlots();
  function jump() {
    if(airborne || stamina<9)return;
    airborne=true;verticalSpeed=6.4;stamina-=9;recovery=.45;
  }
  function updateVitals() {
    $('health').value=health;
    $('stamina').value=stamina;
    $('hpValue').textContent=Math.ceil(health);
    $('spValue').textContent=Math.ceil(stamina);
  }
  function reset() {
    player.position.set(-9,.03,22);
    player.rotation.y=Math.PI;
    yaw=0;pitch=.35;stride=0;
    airborne=false;verticalSpeed=0;health=100;stamina=100;recovery=0;exhausted=false;
    for(const effect of Object.keys(effects))effects[effect]=0;
    puffTime=0;puff.visible=false;
    updateVitals();
  }
  reset();
  function resize(){
    camera.aspect=innerWidth/innerHeight;
    camera.fov=T.MathUtils.clamp(68-camera.aspect*8,59,75);
    camera.updateProjectionMatrix();
    renderer.setSize(innerWidth,innerHeight);
  }
  window.addEventListener('resize',resize); resize();
  function setActive(value) {
    active=value; keys.clear(); touchKeys.clear(); dragging=false;
    if(!value && packOpen)togglePack(false);
    $('menu').hidden=value; $('hud').hidden=!value;
    $('start').textContent=value?'Resume game ↗': 'Resume game ↗';
    if(!value) {
      if(document.pointerLockElement) document.exitPointerLock();
      $('start').focus();
    }
  }
  $('start').onclick=()=>setActive(true);
  $('menuButton').onclick=()=>setActive(false);
  const controls=['KeyW','KeyA','KeyS','KeyD','ArrowUp','ArrowDown','ArrowLeft','ArrowRight','ShiftLeft','ShiftRight','KeyR'];
  window.addEventListener('keydown',e=>{
    if(!active)return;
    if(e.code==='Escape') {if(packOpen)togglePack(false);else setActive(false);return;}
    if(e.code==='KeyI') {e.preventDefault();if(!e.repeat)togglePack(!packOpen);return;}
    if(packOpen)return;
    if(/^Digit[1-9]$/.test(e.code)){selected=Number(e.code.at(-1))-1;renderSlots();return;}
    if(['Space','KeyE','KeyQ','KeyF','KeyX'].includes(e.code)) {
      e.preventDefault();
      if(!e.repeat) {if(e.code==='Space')jump();else if(e.code==='KeyE')interact();else if(e.code==='KeyF')useItem();else if(e.code==='KeyX')attack();else throwItem();}
      return;
    }
    if(!controls.includes(e.code))return;
    e.preventDefault(); keys.add(e.code);
    if(e.code==='KeyR')reset();
  });
  window.addEventListener('keyup',e=>keys.delete(e.code));
  window.addEventListener('blur',()=>{keys.clear();touchKeys.clear();dragging=false;});
  canvas.addEventListener('pointerdown',e=>{
    if(!active||packOpen)return;
    dragging=true;lastX=e.clientX;lastY=e.clientY;
    canvas.setPointerCapture(e.pointerId);
    if(e.pointerType==='mouse') canvas.requestPointerLock?.()?.catch(()=>{});
  });
  canvas.addEventListener('lostpointercapture',()=>dragging=false);
  canvas.addEventListener('pointerup',()=>dragging=false);
  document.addEventListener('pointerlockchange',()=>{
    if(active && !packOpen && document.pointerLockElement!==canvas) setActive(false);
  });
  document.addEventListener('pointermove',e=>{
    if(!active||packOpen)return;
    const locked=document.pointerLockElement===canvas;
    if(!locked&&!dragging)return;
    yaw-=(locked?e.movementX:e.clientX-lastX)*.004;
    pitch=T.MathUtils.clamp(pitch+(locked?e.movementY:e.clientY-lastY)*.003,.07,.94);
    lastX=e.clientX;lastY=e.clientY;
  });
  for(const button of $('touch').querySelectorAll('button')){
    button.addEventListener('pointerdown',e=>{
      button.setPointerCapture(e.pointerId);touchKeys.set(e.pointerId,button.dataset.key);
    });
    button.addEventListener('lostpointercapture',e=>touchKeys.delete(e.pointerId));
  }
  const down=(...codes)=>codes.some(code=>keys.has(code)||[...touchKeys.values()].includes(code));
  function drawMap(){
    const {x,z}=player.position;
    if(inside(x)) {
      map.fillStyle='#293830';map.fillRect(0,0,158,128);
      map.fillStyle='#9b876c';map.fillRect(23,8,112,112);
      map.fillStyle='#463f33';
      for(const b of interior.walls)map.fillRect(79+(b.x-interior.origin-b.w/2)*4,64+(b.z-b.d/2)*4,Math.max(1,b.w*4),Math.max(1,b.d*4));
      map.fillStyle='#d6fa87';map.beginPath();map.arc(79+(x-interior.origin)*4,64+z*4,3,0,Math.PI*2);map.fill();
      $('zone').textContent=x<interior.origin-5?'Classroom':x>interior.origin+5?(z>5.5?'Restroom':'Assembly hall'):'School corridor';
      return;
    }
    const mx=v=>79+v*1.15,mz=v=>63+v*.98;
    map.fillStyle='#273e30';map.fillRect(0,0,158,128);
    map.fillStyle='#526455';map.fillRect(mx(-35),mz(-13),65,33);
    map.fillStyle='#78847b';map.fillRect(mx(-52),0,19,128);
    map.fillStyle='#91a887';
    for(const tree of trees)map.fillRect(mx(tree.x),mz(tree.z),1.6,1.6);
    map.fillStyle='#cda291';
    for(const b of buildings)map.fillRect(mx(b.x-b.w/2),mz(b.z-b.d/2),b.w*1.15,b.d*.98);
    map.fillStyle='#d6fa87';map.fillRect(mx(outdoorDoor.x)-2,mz(outdoorDoor.z)-2,4,4);
    map.fillStyle='#f0d574';
    for(const {model,velocity} of pickups)if(!velocity)map.fillRect(mx(model.position.x)-1,mz(model.position.z)-1,2,2);
    map.save();map.translate(mx(x),mz(z));map.rotate(-player.rotation.y);
    map.fillStyle='#d6fa87';map.beginPath();map.moveTo(0,7);map.lineTo(-4,-4);map.lineTo(4,-4);map.fill();map.restore();
    $('zone').textContent=x<-33?'School approach':z<-25||x>30||z>33?'Pine perimeter':'School courtyard';
  }

  let last=performance.now();
  renderer.setAnimationLoop(now=>{
    const dt=Math.min((now-last)/1000,.045); last=now;
    if(active && !packOpen) {
      const f=Number(down('KeyW','ArrowUp'))-Number(down('KeyS','ArrowDown'));
      const s=Number(down('KeyD','ArrowRight'))-Number(down('KeyA','ArrowLeft'));
      const running=(f||s) && !exhausted && !airborne && down('ShiftLeft','ShiftRight');
      movement.set(s,0,-f).normalize().applyAxisAngle(T.Object3D.DEFAULT_UP,yaw);
      const {x,z}=player.position;
      const step=(running?7.6:4.05)*dt;
      if(!block(x+movement.x*step,z))player.position.x+=movement.x*step;
      if(!block(player.position.x,z+movement.z*step))player.position.z+=movement.z*step;
      const moving=player.position.x!==x||player.position.z!==z;
      const floor=groundAt(player.position.x,player.position.z);
      if(!airborne && player.position.y-floor>.22){airborne=true;verticalSpeed=0;}
      if(airborne) {
        verticalSpeed-=16*dt;
        player.position.y+=verticalSpeed*dt;
        if(player.position.y<=floor && verticalSpeed<=0) {
          health=Math.max(0,health-Math.max(0,-verticalSpeed-8)*8);
          airborne=false;verticalSpeed=0;player.position.y=floor;
          if(health===0){reset();notice('Back at the courtyard');}
        }
      } else player.position.y=floor;
      if(running && moving) {
        stamina=Math.max(0,stamina-21*dt); recovery=.7;
        if(stamina===0)exhausted=true;
      } else {
        recovery=Math.max(0,recovery-dt);
        if(!recovery)stamina=Math.min(100,stamina+16*dt);
        if(stamina>=22)exhausted=false;
      }
      attackTime=Math.max(0,attackTime-dt);
      swing=Math.max(0,swing-dt);
      combat.update(dt,player,amount=>{
        health=Math.max(0,health-amount);
        if(!health){reset();notice('Back at the courtyard');}
        else notice('Practice bot hit · −'+amount+' health');
      });
      updateEffects(dt,running && moving);
      updateVitals();
      if(moving) {
        const angle=Math.atan2(movement.x,movement.z);
        player.rotation.y+=Math.atan2(Math.sin(angle-player.rotation.y),Math.cos(angle-player.rotation.y))*(1-Math.exp(-dt*16));
        stride+=dt*(running?13:9);
      }
      for(const {leg,arm,side} of limbs){
        leg.rotation.x=T.MathUtils.lerp(leg.rotation.x,airborne?side*.32:moving?Math.sin(stride)*side*(running?.9:.58):0,.24);
        arm.rotation.x=-leg.rotation.x*.76;
      }
      if(swing)limbs[1].arm.rotation.x=-Math.sin(swing/.26*Math.PI)*1.8;
      torso.position.y=moving?Math.abs(Math.sin(stride))*.045:0;
      target.copy(player.position).add(direction.set(0,1.40,0));
      direction.set(0,Math.sin(pitch),Math.cos(pitch)).applyAxisAngle(T.Object3D.DEFAULT_UP,yaw).normalize();
      cameraRay.set(target,direction);
      const indoors=inside(player.position.x);
      let distance=indoors?3.4:camera.aspect<.65?7.2:5.9;
      for(const b of indoors?interior.walls:buildings) {
        obstacle.min.set(b.x-b.w/2-.26,0,b.z-b.d/2-.26);
        obstacle.max.set(b.x+b.w/2+.26,11,b.z+b.d/2+.26);
        if(cameraRay.intersectBox(obstacle,intersection)) distance=Math.min(distance,Math.max(.65,target.distanceTo(intersection)-.12));
      }
      camera.position.copy(wanted.copy(target).addScaledVector(direction,distance));
      if(indoors)camera.position.y=Math.min(camera.position.y,3.35);
      camera.lookAt(target);
      if(effects.dizzy)camera.rotateZ(Math.sin(now*.005)*.095*Math.min(1,effects.dizzy/3));
      updatePickups(dt);
      messageTime=Math.max(0,messageTime-dt);
      const nearby=nearestItem();
      const action=nearbyAction();
      const prompt=messageTime?pickupMessage:action?'E · '+action.label:nearby?'E · Pick up '+items[nearby.id].name:'';
      $('prompt').hidden=!prompt;
      if($('prompt').textContent!==prompt)$('prompt').textContent=prompt;
      drawMap();
    } else if(!active) {
      camera.position.set(-31+Math.sin(now*.00016)*3,7.2,36);
      camera.lookAt(0,4,-13);
    }
    renderer.render(scene,camera);
  });
}
