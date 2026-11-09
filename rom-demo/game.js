import {addPineForest} from './forest.js';
import {items, createInventory} from './inventory.js';
import {buildInterior} from './interior.js';
import {createCombat} from './combat.js';
import {createAudio} from './audio.js';
import {createSettings} from './settings.js';
import {createStory} from './story-ui.js';
import {createSky} from './sky.js';
import * as T from './three.module.js';
import romPhoto from './dist/rom.jpg';

const $ = id => document.getElementById(id);
try { boot(); } catch (error) { console.error(error); $('error').hidden = false; $('start').disabled = true; }

function boot() {
  const record=createStory(notice);
  const audio=createAudio();
  const settings=createSettings(document,audio);
  const scene = new T.Scene();
  scene.background = new T.Color(0xa9c7d5);
  scene.fog = new T.FogExp2(0xa9c7d5, .009);
  const camera = new T.PerspectiveCamera(59, 1, .1, 250);
  const renderer = new T.WebGLRenderer({antialias:true});
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = T.PCFShadowMap;
  renderer.setPixelRatio(Math.min(devicePixelRatio, 1.65));
  $('world').append(renderer.domElement);
  const ambient=new T.HemisphereLight(0xe1f0ff, 0x747257, 2.1);
  scene.add(ambient);
  const sun = new T.DirectionalLight(0xffe0b1, 2.35);
  sun.position.set(-33, 55, 27);
  sun.castShadow = true;
  Object.assign(sun.shadow.camera, {left:-65,right:65,top:65,bottom:-65,far:170});
  sun.shadow.mapSize.set(2048,2048);
  sun.shadow.normalBias = .035;
  scene.add(sun);
  const sky=createSky(T,scene,sun,ambient);
  const sceneGlobals=new Set(scene.children);

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
  function normalMap(colorMap, strength, heightMap=colorMap) {
    const source=heightMap.image;
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
    const height=texture(128,c=>{
      c.fillStyle='#969696'; c.fillRect(0,0,128,128);
      for(let i=0;i<1400;i++) {
        const shade=100+random()*90;
        c.fillStyle='rgb('+shade+' '+shade+' '+shade+')';
        c.fillRect(random()*128,random()*128,1+random()*3,1+random()*2);
      }
      if(paving) {
        c.fillStyle='#626262';
        for(let i=0;i<128;i+=32){c.fillRect(i,0,2,128);c.fillRect(0,i,128,2);}
      }
    });
    const normal=normalMap(map,paving?2.8:1.2,height);
    height.dispose();
    return new T.MeshStandardMaterial({map,normalMap:normal,roughness:.89});
  }
  const grass = surface('#688052',['#789459','#60784b','#71854b','#84915b'],52);
  const paving = surface('#b1ad9f',['#aaa99d','#bbb7aa','#a29f92'],9,true);
  const asphalt = surface('#62696a',['#737879','#626868','#585f60'],12);
  box(0,-.17,0,240,.3,240,grass).castShadow=false;
  box(-9.25,-.035,-8,50.5,.09,11,paving).castShadow=false;
  box(-6,-.035,8.5,57,.09,22,paving).castShadow=false;
  box(-44,-.04,20,17,.08,108,asphalt).castShadow=false;
  box(-25,-.025,22,35,.08,9,asphalt).castShadow=false;
  box(30,-.028,-6,4,.07,59,paving).castShadow=false;
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
  const brickHeight=texture(128,c=>{
    c.fillStyle='#555555';c.fillRect(0,0,128,128);
    for(let row=0;row<12;row++) for(let col=-1;col<5;col++) {
      const x=col*32+(row%2)*16,y=row*128/12;
      c.fillStyle='#aaaaaa';c.fillRect(x,y,31,128/12-1);
      c.fillStyle='#cccccc';c.fillRect(x+1,y+1,29,128/12-3);
    }
    for(let i=0;i<450;i++) {
      const x=random()*128,y=random()*128;
      const row=Math.floor(y*12/128);
      const brickX=(x+32-(row%2)*16)%32,brickY=y-row*128/12;
      if(brickX>2 && brickX<29 && brickY>2 && brickY<7) {
        c.fillStyle=i%2?'#b8b8b8':'#d8d8d8';c.fillRect(x,y,1.5,1);
      }
    }
  });
  const brickNormal=normalMap(brickMap,3,brickHeight);
  brickHeight.dispose();
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
  const schoolDoor={x:22,z:-2.5,y:.45,width:2.55,scaleX:.417,scaleZ:.53};
  const schoolShell=[], doorLeaves=[];
  let doorOpening=0;
  function building(x,z,w,d,h,gray=false) {
    buildings.push({x,z,w,d,h});
    const face=gray?concrete:brick(w,h);
    const side=gray?face:brick(d,h);
    if(x===schoolDoor.x) {
      const t=.16, front=z+d/2, wing=(w-schoolDoor.width)/2;
      for(const sign of [-1,1]) {
        const wallX=x+sign*(w-t)/2;
        box(wallX,h/2,z,t,h,d,side);
        schoolShell.push({x:wallX,z,w:t,d,h});
        const jambX=x+sign*(schoolDoor.width+wing)/2;
        box(jambX,h/2,front-t/2,wing,h,t,face);
        schoolShell.push({x:jambX,z:front-t/2,w:wing,d:t,h});
      }
      box(x,h/2,z-d/2+t/2,w,h,t,face);
      schoolShell.push({x,z:z-d/2+t/2,w,d:t,h});
      box(x,(h+2.83)/2,front-t/2,schoolDoor.width,h-2.83,t,face);
      schoolShell.push({x,z:front-t/2,w:schoolDoor.width,d:t,h,bottom:2.83});
    } else box(x,h/2,z,w,h,d,[side,side,mat(0x555a5b),face,face,face]);
    box(x,h+.09,z,w+.26,.21,d+.26,gray?0x414c52:0x956e64);
    if(x!==schoolDoor.x)box(x,.23,z,w+.07,.46,d+.07,0x7c7c70);
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
    if(x===schoolDoor.x) {
      const leafWidth=schoolDoor.width/2;
      box(x,2.78,z+.05,schoolDoor.width+.18,.11,.14,0xd2d4ca);
      for(const side of [-1,1]) {
        box(x+side*(leafWidth+.035),1.62,z+.05,.085,2.34,.14,0xd2d4ca);
        const hinge=new T.Group();
        hinge.position.set(x+side*leafWidth,schoolDoor.y,z+.035);
        scene.add(hinge);doorLeaves.push({hinge,side});
        const cx=-side*leafWidth/2;
        box(cx,1.13,0,leafWidth-.035,2.23,.075,0xd2d4ca,hinge);
        box(cx,1.42,0,leafWidth-.16,1.39,.084,0x42616a,hinge);
        box(cx,.58,0,leafWidth-.16,.23,.084,0x819492,hinge);
        box(cx-side*.36,1.04,0,.27,.052,.15,0xe8e8dc,hinge);
      }
    } else {
      box(x,1.35,z,4.9,2.6,.16,0xd2d4ca);
      for(let i=-2;i<=2;i++) {
        box(x+i*.89,1.37,z+.11,.77,2.32,.08,0x344c50);
        box(x+i*.89,1.06,z+.17,.74,.07,.04,0xe4e3d5);
      }
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
  const trees=[];
  function pine(x,z,h) { trees.push({x,z,h}); }
  pine(-2,10,12); pine(16,12,13); pine(-15,16,10); pine(31,1,13);
  for(let i=0;i<165;i++) {
    const x=random()*180-90,z=random()*150-78;
    if((x < -53 || x > 36 || z < -40 || z > 40) && !(x > -55 && x < -34)) pine(x,z,6+random()*10);
  }
  addPineForest(T,scene,trees,texture,normalMap);
  for (const [x,z] of [[-27,5],[-12,6],[1,3],[18,17],[29,9],[-32,17]]) {
    box(x,1.58,z,.085,3.16,.085,0x505650);
    mesh(new T.CylinderGeometry(.32,.12,.18,8),0x3e4843,x,3.23,z);
    mesh(new T.CylinderGeometry(.19,.13,.075,12),sky.lampMaterial,x,3.12,z);
    sky.addLamp(x,3.02,z);
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
    if(inside(x,z))return interior.stairHeight(x,z);
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

  const parkedCars=[];
  for(const [x,z,color] of [[-46,10,0x42667b],[-47,-2,0xad5143],[-42,-36,0xc7bfab]]) {
    box(x,.52,z,1.86,.67,3.95,color);
    box(x,.995,z-.14,1.64,.56,2.05,0x526773);
    box(x,1.29,z-.14,1.63,.08,1.96,color);
    for(const side of [-1,1]) {
      for(const axle of [-1.25,1.25])mesh(new T.CylinderGeometry(.33,.33,.17,12),0x26282b,x+side*.88,.34,z+axle).rotation.z=Math.PI/2;
      box(x+side*.61,.58,z+1.987,.36,.16,.05,0xf7e3b1);
      box(x+side*.61,.58,z-1.987,.36,.16,.05,0xad3830);
    }
    parkedCars.push({x,z,w:1.95,d:4.08,h:1.35});
  }
  const exteriorChunk=new T.Group();
  for(const node of [...scene.children]) {
    if(!sceneGlobals.has(node) && !node.isLight)exteriorChunk.add(node);
  }
  scene.add(exteriorChunk);
  const player=new T.Group(); scene.add(player);
  const denim=surface('#3b4d60',['#536479','#374b60','#405367'],2), jeans=surface('#455159',['#52636b','#3d4b53','#4a5963'],2), skin=0xb68369;
  const ellipsoid=new T.SphereGeometry(1,16,12);
  function oval(parent,color,x,y,z,w,h,d) {
    const part=mesh(ellipsoid,color,x,y,z,parent); part.scale.set(w,h,d);return part;
  }
  const torso=new T.Group(); player.add(torso);
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
  const headShape=new T.LatheGeometry([
    new T.Vector2(.01,-.15),new T.Vector2(.065,-.14),new T.Vector2(.104,-.10),
    new T.Vector2(.122,-.035),new T.Vector2(.125,.065),new T.Vector2(.115,.128),
    new T.Vector2(.085,.154),new T.Vector2(0,.165)
  ],28);
  const head=mesh(headShape,skin,0,1.777,.016,torso);head.scale.z=.89;
  oval(torso,0x292522,0,1.905,-.006,.119,.049,.104);
  oval(torso,0x302923,0,1.847,-.065,.113,.09,.064);
  for(const side of [-1,1]) {
    oval(torso,skin,side*.12,1.772,.018,.024,.043,.025);
    oval(torso,0x9e6755,side*.133,1.774,.027,.012,.025,.013);
  }
  oval(torso,skin,0,1.767,.126,.026,.031,.028);
  const photo=new Image();
  photo.onload=()=>{
    const face=texture(128,c=>{
      c.beginPath();c.ellipse(64,66,61,63,0,0,Math.PI*2);c.clip();
      c.drawImage(photo,176,155,72,94,0,0,128,128);
    });
    const faceShape=new T.PlaneGeometry(.218,.272,16,14);
    const vertices=faceShape.attributes.position;
    for(let i=0;i<vertices.count;i++) {
      const x=vertices.getX(i)/.109,y=vertices.getY(i)/.136;
      vertices.setZ(i,.018-.052*x*x-.037*y*y);
    }
    faceShape.computeVertexNormals();
    const portrait=mesh(faceShape,new T.MeshStandardMaterial({map:face,transparent:true,alphaTest:.5}),0,1.773,.112,torso);
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
    box(side*.021,-.405,.008,.124,.05,.135,denim,arm);
    oval(arm,skin,side*.024,-.445,.023,.058,.083,.059);
    limbs.push({leg,arm,side});
  }

  let active=false, yaw=0, pitch=0, stride=0, dragging=false, lastX=0,lastY=0;
  let firstPerson=false, deathTime=0, pickupMotion=null, climbing=null;
  const aimVector=new T.Vector3(), aimPoint=new T.Vector3(), handPoint=new T.Vector3();
  const keys=new Set(), touchKeys=new Map();
  const target=new T.Vector3(), wanted=new T.Vector3();
  const cameraRay=new T.Ray(), obstacle=new T.Box3(), intersection=new T.Vector3();
  const movement=new T.Vector3(), direction=new T.Vector3();
  const canvas=renderer.domElement;
  const map=$('radar').getContext('2d');
  const interior=buildInterior(T,scene,box,surface,texture,schoolDoor);
  const outdoorDoor={x:22,z:.65};
  const entranceMarker=mesh(new T.RingGeometry(.65,.73,32),
    new T.MeshBasicMaterial({color:0xc8ed80,side:T.DoubleSide}),22,.065,2.05);
  entranceMarker.rotation.x=-Math.PI/2;
  entranceMarker.castShadow=false;
  function inside(x,z,y=0) {
    return x>200 || (Math.abs(x-schoolDoor.x)<5.91 && z<schoolDoor.z && z>schoolDoor.z-14.94 && y<4.3);
  }
  const solidBuildings=buildings.filter(b=>b.x!==schoolDoor.x);
  const exteriorColliders=[...solidBuildings,...schoolShell,...parkedCars];
  const groundColliders=exteriorColliders.filter(b=>!b.bottom);
  function updateDoors(dt) {
    const {x,y,z}=player.position;
    const near=Math.abs(x-schoolDoor.x)<2.25 && Math.abs(z-schoolDoor.z)<2.45 && y<2.8;
    doorOpening=T.MathUtils.lerp(doorOpening,near?1:0,1-Math.exp(-dt*9));
    for(const {hinge,side} of doorLeaves)hinge.rotation.y=-side*doorOpening*Math.PI*.51;
  }
  function doorBlocked(x,z) {
    return Math.abs(x-schoolDoor.x)<schoolDoor.width/2 && Math.abs(z-schoolDoor.z)<.3 && doorOpening<.58;
  }
  const hits=(walls,x,z)=>walls.some(b=>Math.abs(x-b.x)<b.w/2+.38 && Math.abs(z-b.z)<b.d/2+.38);
  const block=(x,z) => doorBlocked(x,z) || (inside(x,z) ? hits(interior.floorAt(x).walls,x,z) : Math.abs(x)>63 || Math.abs(z)>58 ||
    hits(groundColliders,x,z) || trees.some(t=>(x-t.x)**2+(z-t.z)**2<.58**2));
  function roofAt(x,z,y) {
    let height=0;
    for(const b of buildings) {
      const top=b.h+.23;
      if(y>=top-.07 && Math.abs(x-b.x)<b.w/2+.13 && Math.abs(z-b.z)<b.d/2+.13)height=Math.max(height,top);
    }
    return height;
  }
  function playerBlocked(x,z) {
    const y=player.position.y;
    if(y<2.8 && doorBlocked(x,z))return true;
    if(inside(x,z,y))return hits(interior.floorAt(x).walls,x,z);
    return Math.abs(x)>63 || Math.abs(z)>58 ||
      exteriorColliders.some(b=>y>=(b.bottom??0)-.04 && y<b.h+.16 && Math.abs(x-b.x)<b.w/2+.38 && Math.abs(z-b.z)<b.d/2+.38) ||
      trees.some(t=>(x-t.x)**2+(z-t.z)**2<.58**2);
  }
  function toggleClimb() {
    if(climbing){climbing=null;airborne=true;verticalSpeed=0;return;}
    const {x,y,z}=player.position;
    if(inside(x,z,y)||emote||pickupMotion||stamina<8)return;
    let best=.95;
    for(const b of buildings) {
      if(y>=b.h+.10)continue;
      const px=T.MathUtils.clamp(x,b.x-b.w/2,b.x+b.w/2);
      const pz=T.MathUtils.clamp(z,b.z-b.d/2,b.z+b.d/2);
      const dx=x-px,dz=z-pz,distance=Math.hypot(dx,dz);
      if(distance>.02 && distance<best){
        best=distance;
        climbing={b,px,pz,nx:dx/distance,nz:dz/distance};
      }
    }
    if(!climbing){notice('Move closer to an exterior wall');return;}
    airborne=false;verticalSpeed=0;
    player.rotation.y=Math.atan2(-climbing.nx,-climbing.nz);
    notice('Climbing · W / S to move · C to release');
  }
  function updateClimb(dt,vertical) {
    const {b,px,pz,nx,nz}=climbing;
    player.position.x=px+nx*.43;player.position.z=pz+nz*.43;
    if(vertical) {
      stamina=Math.max(0,stamina-dt*7.5);
      player.position.y+=vertical*dt*2.8;
      recovery=.65;stride+=dt*8;
    }
    if(player.position.y>=b.h+.23){
      player.position.set(px-nx*.55,b.h+.23,pz-nz*.55);
      climbing=null;notice('Reached the roof');
    } else if((vertical<0 && player.position.y<=groundAt(player.position.x,player.position.z)) || !stamina) {
      climbing=null;airborne=true;verticalSpeed=0;
    }
  }
  const combat=createCombat(T,scene,box,oval,groundAt,block,audio.play,()=>record('defeats'));
  const fists={name:'Fists',damage:18,range:2,aim:.42,cooldown:.48};
  let equipped=null, attackTime=0, swing=0;
  const held=new T.Group();
  held.position.set(.025,-.43,.10);
  limbs[1].arm.add(held);
  function weaponModel(id,parent) {
    if(id==='ruler') {
      box(0,.19,0,.058,.38,.016,0xaeb9ba,parent);
      for(let i=0;i<14;i++)box(-.016,.043+i*.023,.009,i%5===0?.021:.012,.003,.003,0x37484c,parent);
    } else if(id==='extinguisher') {
      mesh(new T.CapsuleGeometry(.09,.21,5,12),0xbb3931,0,.2,0,parent);
      box(0,.22,.086,.095,.105,.013,0xede4d3,parent);
      box(0,.415,.015,.105,.045,.12,0x323d41,parent);
      box(.095,.34,.045,.037,.15,.035,0x282e31,parent);
      box(.095,.28,.101,.047,.04,.092,0x323d41,parent);
    } else if(id==='dagger') {
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
    if(attackTime>0 || emote || deathTime || pickupMotion || climbing || drinkMotion)return;
    const weapon=equipped?items[equipped].weapon:fists;
    attackTime=weapon.cooldown;swing=.26;
    if(weapon.ranged)audio.play(weapon.foam?'foam':'shot');
    notice(weapon.name+' · '+combat.attack(player.position,yaw,weapon,pitch));
  }
  const inventory=createInventory();
  let selected=0, grabbed=null, packOpen=false;
  let health=100, stamina=100, exhausted=false, recovery=0;
  let airborne=false, verticalSpeed=0, pickupMessage='', messageTime=0;
  const pickups=[];
  const effects={dizzy:0,gas:0,bladder:0};
  let bladder=0, gas=0, bowel=0, pressureTime=0, gasDelay=0, puffTime=0;
  let emoteOpen=false, emote=null, emoteTime=0;
  const emoteDuration={wave:1.65,flip:.85,fall:1.55,laugh:1.55,fart:.72,pee:1.55};
  let jetpack=false, jetpackUnlocked=false, drinkMotion=null, landingTime=0;
  const drinkProp=new T.Group();
  limbs[1].arm.add(drinkProp);drinkProp.position.set(.024,-.45,.04);
  const jetRig=new T.Group(), exhaust=new T.Group();
  torso.add(jetRig);jetRig.add(exhaust);jetRig.visible=false;exhaust.visible=false;
  for(const x of [-.125,.125]) {
    mesh(new T.CapsuleGeometry(.087,.33,5,10),0x65747a,x,1.25,-.22,jetRig);
    box(x,1.24,-.303,.12,.095,.028,0xe2a13e,jetRig);
    mesh(new T.ConeGeometry(.068,.30,10),new T.MeshBasicMaterial({color:0x78d8ff}),x,.84,-.22,exhaust).rotation.x=Math.PI;
  }
  function toggleJetpack() {
    if(inside(player.position.x,player.position.z,player.position.y) || climbing || emote || pickupMotion)return;
    if(!jetpackUnlocked){notice('Find the jetpack outdoors first');return;}
    jetpack=!jetpack;jetRig.visible=jetpack;exhaust.visible=false;
    $('flight').hidden=!jetpack;
    notice(jetpack?'Jetpack equipped · Hold jump to thrust':'Jetpack stowed');
  }
  const rig=new T.Group();
  for(const part of [...player.children])rig.add(part);
  player.add(rig);
  const drops=Array.from({length:12},()=>{
    const drop=new T.Mesh(new T.SphereGeometry(.024,5,4),new T.MeshBasicMaterial({color:0xf5cd69}));
    drop.visible=false;scene.add(drop);return drop;
  });
  const puff=new T.Group();
  const cloudMaterial=new T.MeshBasicMaterial({color:0xafc575,transparent:true,depthWrite:false});
  const cloudShape=new T.SphereGeometry(.18,12,8);
  for(const [x,y,z,size] of [[0,0,0,1],[-.15,.035,.055,.74],[.16,.045,-.04,.81],[.04,.11,.12,.7],[-.03,-.05,-.13,.68]]) {
    const cloud=new T.Mesh(cloudShape,cloudMaterial);
    cloud.position.set(x,y,z);cloud.scale.setScalar(size);puff.add(cloud);
  }
  puff.visible=false;scene.add(puff);
  function useItem(index=selected) {
    if(drinkMotion || pickupMotion || emote || deathTime)return;
    const slot=inventory.slots[index];
    if(slot && items[slot.id].weapon){equip(slot.id);return;}
    if(slot && !items[slot.id].effects){notice('Use throw to toss this item');return;}
    const id=inventory.take(index);
    if(!id){notice('Selected slot is empty');return;}
    for(const effect of items[id].effects) {
      if(effect.type==='stamina') {
        stamina=Math.min(100,stamina+effect.amount);
        if(stamina>=22)exhausted=false;
      } else effects[effect.type]=effect.seconds;
    }
    if(id==='juice')bladder=Math.min(100,bladder+38);
    if(id==='beer')bladder=Math.min(100,bladder+26);
    if(id==='bun')gas=Math.min(100,gas+54);
    if(id==='cinnamon')bowel=Math.min(100,bowel+55);
    if(id==='juice' || id==='beer') {
      itemModel(id,drinkProp);drinkMotion={time:0};
      if(packOpen)togglePack(false);
    }
    notice({juice:'Juice finished · Find a restroom when the urge hits',bun:'Sausage bun eaten · +40 stamina',beer:'Beer finished · Feeling dizzy',cinnamon:'Suktukas eaten · Find the WC when needed'}[id]);
    grabbed=null;renderSlots();updateVitals();
  }
  function emitGas() {
    gas=Math.max(0,gas-32);
    gasDelay=2.2;puffTime=1;
    puff.position.copy(player.position);
    puff.position.y+=.88;
    puff.position.x-=Math.sin(player.rotation.y)*.41;
    puff.position.z-=Math.cos(player.rotation.y)*.41;
    audio.play('fart');
    if(combat.nearbyReaction(puff.position,'gas')) {
      audio.play('scream');
      notice('Prrrt! Nearby practice bots are choking');
    } else notice('Prrrt!');
  }
  function toggleEmotes(open) {
    emoteOpen=open;keys.clear();touchKeys.clear();dragging=false;
    $('emotes').hidden=!open;
    if(open)$('reticle').hidden=true;
    if(open && document.pointerLockElement===canvas)document.exitPointerLock();
    if(open)$('emotes').querySelector('button').focus();
  }
  function startEmote(name,atRestroom=false) {
    if(emote || airborne)return;
    if(name==='pee' && !bladder){notice('Rom does not need the WC');return;}
    emote=name;emoteTime=0;swing=0;
    if(name==='fart')emitGas();
    if(name==='laugh')audio.play('laugh');
    if(name==='pee') {
      bladder=0;pressureTime=0;effects.bladder=0;
      if(!atRestroom && combat.nearbyReaction(player.position,'pee')) {
        audio.play('scream');notice('A practice bot spotted Rom!');
      } else notice(atRestroom?'Restroom used':'Bladder emptied');
    }
  }
  function updateEmote(dt) {
    rig.rotation.set(0,0,0);rig.position.y=0;
    for(const drop of drops)drop.visible=false;
    if(!emote)return;
    emoteTime+=dt;
    const phase=Math.min(1,emoteTime/emoteDuration[emote]);
    const envelope=Math.sin(Math.PI*phase);
    const right=limbs[1].arm;
    if(emote==='wave') {
      right.rotation.x=-1.8*envelope;
      right.rotation.z=(.85+Math.sin(emoteTime*19)*.35)*envelope;
    } else if(emote==='flip') {
      rig.rotation.x=phase*Math.PI*2;
      rig.position.y=envelope*1.18+(1-Math.cos(rig.rotation.x))*.91;
      for(const {arm,leg} of limbs){leg.rotation.x=-envelope*.94;arm.rotation.x=-envelope*1.2;}
    } else if(emote==='fall') {
      rig.rotation.x=-Math.min(1,phase*4,(1-phase)*4)*1.47;
    } else if(emote==='laugh') {
      rig.rotation.x=Math.sin(emoteTime*19)*.11*envelope;
      for(const {arm} of limbs)arm.rotation.x=-.7*envelope;
    } else if(emote==='fart') {
      rig.rotation.x=.25*envelope;
      rig.position.y=-.10*envelope;
      for(const {leg} of limbs)leg.rotation.x=-.24*envelope;
    } else if(emote==='pee') {
      for(const {arm} of limbs)arm.rotation.x=-.44*envelope;
      const angle=player.rotation.y;
      drops.forEach((drop,i)=>{
        const flight=(emoteTime*2.5+i/drops.length)%1;
        const distance=.21+flight*.91;
        const x=player.position.x+Math.sin(angle)*distance;
        const z=player.position.z+Math.cos(angle)*distance;
        drop.visible=phase>.09 && phase<.87 && !block(x,z);
        drop.position.set(x,player.position.y+.93+.13*flight-flight*flight*1.05,z);
      });
    }
    if(phase===1)emote=null;
  }
  function updateEffects(dt,sprinting) {
    for(const effect of Object.keys(effects))effects[effect]=Math.max(0,effects[effect]-dt);
    gasDelay=Math.max(0,gasDelay-dt);
    if(effects.gas)gas=Math.min(100,gas+dt*4);
    if(!emote && gas>=32 && sprinting && !gasDelay) {
      startEmote('fart');
    }
    puffTime=Math.max(0,puffTime-dt);
    puff.visible=puffTime>0;
    cloudMaterial.opacity=puffTime*.48;
    puff.scale.setScalar(1+(1-puffTime)*2.2);
    if(puffTime)puff.position.y+=dt*.25;
    if(effects.bladder)bladder=Math.min(100,bladder+dt*.86);
    pressureTime=bladder>=100?pressureTime+dt:0;
    if(pressureTime>=2) {
      pressureTime-=2;
      health=Math.max(0,health-4);
      if(!health)beginDeath();
      else notice('Bladder pressure · −4 health');
    }
    const label=[effects.dizzy&&'Dizzy',gas>=32&&'Gassy',(bladder>=70||bowel>=55)&&'Needs the WC'].filter(Boolean).join(' · ');
    if($('effects').textContent!==label)$('effects').textContent=label;
    $('effects').hidden=!label;
  }
  function nearbyAction() {
    const {x,z}=player.position;
    const near=point=>Math.hypot(x-point.x,z-point.z)<2.35;
    if(inside(x,z,player.position.y)) {
      const floor=interior.floorAt(x);
      const stair=floor.stairs.find(stair=>Math.abs(x-stair.x)<.84 && Math.abs(z-stair.z)<1.1);
      if(stair) {
        const destination=interior.floors.indexOf(floor)+stair.direction;
        return {label:(stair.direction>0?'Go up to floor ':'Go down to floor ')+(destination+1),run:()=>changeSchoolFloor(destination)};
      }
      if((bladder || bowel) && near(interior.restroom))return {label:'Use restroom',run:()=>{
        if(bowel){bowel=0;notice('Bowel meter cleared');}
        if(bladder)startEmote('pee',true);
      }};
    }
    return null;
  }
  function changeSchoolFloor(index) {
    if(emote)return;
    const floor=interior.floors[index];
    player.position.set(floor.origin,(floor.baseY??0)+.03,floor.spawnZ??-6.2);
    player.rotation.y=0;
    yaw=Math.PI;
    verticalSpeed=0;airborne=false;
    interior.setLighting(floor.origin);
    record('floors');
    notice('School · Floor '+(index+1));
  }
  function interact() {
    const action=nearbyAction();
    if(action)action.run();
    else pickupItem();
  }
  const bottleBody=new T.CylinderGeometry(.077,.078,.24,12);
  const bottleNeck=new T.CylinderGeometry(.035,.055,.14,12);
  function itemModel(id,model) {
    if(items[id].weapon)weaponModel(id,model);
    else if(id==='jetpack') {
      for(const x of [-.125,.125]) {
        mesh(new T.CapsuleGeometry(.087,.33,5,10),0x65747a,x,.27,0,model);
        box(x,.26,.085,.12,.095,.028,0xe2a13e,model);
      }
      box(0,.23,0,.24,.18,.11,0x37474e,model);
    } else if(id==='tire') {
      mesh(new T.TorusGeometry(.26,.086,10,24),0x262a2c,0,.35,0,model);
      mesh(new T.TorusGeometry(.177,.021,8,24),0x44484a,0,.35,.035,model);
    } else if(id==='crate') {
      box(0,.23,0,.49,.46,.42,0xa77346,model);
      box(0,.463,0,.095,.008,.42,0xcfad7a,model);
      box(.246,.23,0,.008,.46,.095,0xcfad7a,model);
    } else if(id==='cinnamon') {
      oval(model,0xd39a55,0,.071,0,.15,.071,.15);
      for(let i=0;i<35;i++) {
        const angle=i*.36,r=.011+i*.0032;
        oval(model,0x8a4f34,Math.cos(angle)*r,.137-r*.16,Math.sin(angle)*r,.015,.008,.015);
      }
    } else if(id==='juice') {
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
  }
  function spawnItem(id,x,z,y=groundAt(x,z),velocity=null) {
    const model=new T.Group();
    scene.add(model);model.position.set(x,y,z);itemModel(id,model);
    const marker=mesh(new T.RingGeometry(.25,.29,20),new T.MeshBasicMaterial({color:0xe5f49d,side:T.DoubleSide}),x,groundAt(x,z)+.022,z);
    marker.rotation.x=-Math.PI/2;
    marker.castShadow=false;
    marker.visible=!velocity;
    pickups.push({id,model,marker,velocity,delay:velocity?.y ? .6 : 0});
  }
  spawnItem('jetpack',24,14);
  spawnItem('tire',-34,14);
  spawnItem('crate',-12,22);
  spawnItem('cinnamon',-8,17);
  spawnItem('ruler',-12,18);
  spawnItem('extinguisher',24,-4.5);
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
    if(!pickup || pickupMotion || drinkMotion || emote || deathTime)return;
    if(pickup.id==='jetpack')jetpackUnlocked=true;
    else if(!inventory.add(pickup.id)){notice('Inventory full');return;}
    record('pickups');
    notice(pickup.id==='jetpack'?'Jetpack found · Press J to equip':'Picked up '+items[pickup.id].name);
    const from=pickup.model.position.clone();
    const offset=Math.atan2(from.x-player.position.x,from.z-player.position.z)-player.rotation.y;
    pickupMotion={model:pickup.model,from,turn:Math.atan2(Math.sin(offset),Math.cos(offset)),time:0};
    scene.remove(pickup.marker);
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
      const impact=items[pickup.id].throwDamage;
      if(impact && !pickup.hit && velocity.lengthSq()>4 && combat.hitWithProp(p,impact)) {
        pickup.hit=true;velocity.multiplyScalar(-.24);velocity.y=Math.abs(velocity.y)+.6;
        notice(items[pickup.id].name+' hit a practice bot');
      }
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
    $('packUse').disabled=!slot || !(items[slot.id].weapon || items[slot.id].effects);
    $('packUse').textContent=slot && items[slot.id].weapon?(slot.id===equipped?'Unequip':'Equip'):items[slot?.id]?.food?'Eat one':'Drink one';
    if(slot && items[slot.id].description)$('itemDetails').textContent=items[slot.id].description;
  }
  function togglePack(open) {
    packOpen=open;grabbed=null;keys.clear();touchKeys.clear();dragging=false;
    $('inventory').hidden=!open;
    if(open)$('reticle').hidden=true;
    if(open && document.pointerLockElement===canvas)document.exitPointerLock();
    renderSlots();
    if(open)$('closePack').focus();
    else $('packButton').blur();
  }
  $('packButton').onclick=()=>togglePack(true);
  $('closePack').onclick=()=>togglePack(false);
  $('packThrow').onclick=()=>throwItem(grabbed ?? selected);
  const jumpButton=$('jumpButton');
  jumpButton.onpointerdown=e=>{jumpButton.setPointerCapture(e.pointerId);touchKeys.set(e.pointerId,'Space');};
  jumpButton.onlostpointercapture=e=>touchKeys.delete(e.pointerId);
  jumpButton.onclick=()=>{if(!jetpack)jump();};
  $('jetButton').onclick=toggleJetpack;
  $('pickButton').onclick=interact;
  $('useButton').onclick=()=>useItem();
  $('attackButton').onclick=attack;
  $('packUse').onclick=()=>useItem(grabbed ?? selected);
  $('throwButton').onclick=()=>throwItem();
  $('emoteButton').onclick=()=>{if(!packOpen)toggleEmotes(!emoteOpen);};
  $('soundButton').onclick=settings.toggleMute;
  for(const button of $('emotes').querySelectorAll('button'))button.onclick=()=>{
    toggleEmotes(false);
    if(button.dataset.emote)startEmote(button.dataset.emote,nearbyAction()?.label==='Use restroom');
  };
  renderSlots();
  function jump() {
    if(climbing){toggleClimb();return;}
    if(airborne || emote || stamina<9)return;
    record('jumps');
    airborne=true;verticalSpeed=6.4;stamina-=9;recovery=.45;
  }
  function updateVitals() {
    $('health').value=health;
    $('stamina').value=stamina;
    $('bladder').value=bladder;
    $('gas').value=gas;
    $('bowel').value=bowel;
    $('bowelValue').textContent=Math.ceil(bowel);
    $('bladderValue').textContent=Math.ceil(bladder);
    $('gasValue').textContent=Math.ceil(gas);
    $('hpValue').textContent=Math.ceil(health);
    $('spValue').textContent=Math.ceil(stamina);
  }
  function updatePickupMotion(dt) {
    if(!pickupMotion)return;
    const motion=pickupMotion;
    motion.time+=dt;
    const t=Math.min(1,motion.time/.64);
    const reach=Math.sin(t*Math.PI);
    torso.rotation.y=motion.turn*reach;
    torso.rotation.x=.54*reach;
    torso.position.y=-.25*reach;
    limbs[1].arm.rotation.x=-1.08*reach;
    if(t>=.31) {
      limbs[1].arm.localToWorld(handPoint.set(.025,-.42,.03));
      motion.model.position.lerpVectors(motion.from,handPoint,Math.min(1,(t-.31)/.24));
      motion.model.scale.setScalar(1-Math.max(0,(t-.79)/.21));
    }
    if(t===1){scene.remove(motion.model);pickupMotion=null;}
  }
  function updateDrink(dt) {
    if(!drinkMotion)return;
    drinkMotion.time+=dt;
    const t=Math.min(1,drinkMotion.time/1.4);
    const lift=Math.min(1,t/.29,(1-t)/.29);
    limbs[1].arm.rotation.x=-2.63*lift;
    limbs[1].arm.rotation.z=-.47*lift;
    drinkProp.rotation.x=1.25*lift;
    if(t===1){drinkProp.clear();drinkMotion=null;audio.play('burp');}
  }
  function beginDeath() {
    if(deathTime)return;
    record('deaths');
    deathTime=.001;emote=null;
    keys.clear();touchKeys.clear();dragging=false;
    rig.visible=true;
    $('deathScreen').hidden=false;$('reticle').hidden=true;
  }
  function reset() {
    deathTime=0;climbing=null;jetpack=false;jetRig.visible=false;exhaust.visible=false;$('flight').hidden=true;$('deathScreen').hidden=true;
    if(pickupMotion){scene.remove(pickupMotion.model);pickupMotion=null;}
    drinkProp.clear();drinkMotion=null;landingTime=0;
    rig.visible=!firstPerson;
    player.position.set(-9,.03,22);
    interior.setLighting(undefined);
    player.rotation.y=Math.PI;
    yaw=0;pitch=0;stride=0;
    airborne=false;verticalSpeed=0;health=100;stamina=100;recovery=0;exhausted=false;
    for(const effect of Object.keys(effects))effects[effect]=0;
    puffTime=0;puff.visible=false;
    bladder=0;gas=0;bowel=0;pressureTime=0;gasDelay=0;emote=null;
    for(const {arm} of limbs)arm.rotation.z=0;
    updateEmote(0);
    if(active)audio.ambience(true,false);
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
    if(!value && deathTime)reset();
    rig.visible=!value || !firstPerson;
    if(!value && emoteOpen)toggleEmotes(false);
    if(value)audio.start();
    audio.ambience(value,inside(player.position.x,player.position.z,player.position.y));
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
    if(deathTime){e.preventDefault();return;}
    const key=settings.key(e.code);
    if(key==='Escape') {if(emoteOpen)toggleEmotes(false);else if(packOpen)togglePack(false);else setActive(false);return;}
    if(key==='KeyN') {e.preventDefault();if(!e.repeat&&!packOpen&&!emoteOpen)sky.toggle();return;}
    if(key==='KeyB') {e.preventDefault();if(!e.repeat&&!packOpen)toggleEmotes(!emoteOpen);return;}
    if(emoteOpen)return;
    if(key==='KeyI') {e.preventDefault();if(!e.repeat)togglePack(!packOpen);return;}
    if(packOpen)return;
    if(key==='KeyJ'&&!e.repeat){toggleJetpack();return;}
    if(key==='KeyC'&&!e.repeat){toggleClimb();return;}
    if(key==='KeyV'&&!e.repeat){firstPerson=!firstPerson;rig.visible=!firstPerson;notice(firstPerson?'First person':'Third person');return;}
    if(/^Digit[1-9]$/.test(key)){selected=Number(key.at(-1))-1;renderSlots();return;}
    if(['Space','KeyE','KeyQ','KeyF','KeyX'].includes(key)) {
      e.preventDefault();
      if(!e.repeat) {if(key==='Space'){keys.add(key);if(!jetpack)jump();}else if(key==='KeyE')interact();else if(key==='KeyF')useItem();else if(key==='KeyX')attack();else throwItem();}
      return;
    }
    if(!controls.includes(key))return;
    e.preventDefault(); keys.add(key);
    if(key==='KeyR')reset();
  });
  window.addEventListener('keyup',e=>keys.delete(settings.key(e.code)));
  window.addEventListener('blur',()=>{keys.clear();touchKeys.clear();dragging=false;});
  canvas.addEventListener('pointerdown',e=>{
    if(!active||packOpen||emoteOpen||deathTime)return;
    if(e.pointerType==='mouse' && e.button===0)attack();
    dragging=true;lastX=e.clientX;lastY=e.clientY;
    canvas.setPointerCapture(e.pointerId);
    if(e.pointerType==='mouse') canvas.requestPointerLock?.()?.catch(()=>{});
  });
  canvas.addEventListener('lostpointercapture',()=>dragging=false);
  canvas.addEventListener('pointerup',()=>dragging=false);
  document.addEventListener('pointerlockchange',()=>{
    if(active && !packOpen && !emoteOpen && document.pointerLockElement!==canvas) setActive(false);
  });
  document.addEventListener('pointermove',e=>{
    if(!active||packOpen||emoteOpen||deathTime)return;
    const locked=document.pointerLockElement===canvas;
    if(!locked&&!dragging)return;
    yaw-=settings.look(locked?e.movementX:e.clientX-lastX)*.004;
    pitch=T.MathUtils.clamp(pitch+settings.look(locked?e.movementY:e.clientY-lastY,true)*.003,-1.22,1.15);
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
    if(inside(x,z,player.position.y)) {
      const floor=interior.floorAt(x);
      const level=interior.floors.indexOf(floor)+1;
      map.fillStyle='#293830';map.fillRect(0,0,158,128);
      map.fillStyle='#9b876c';map.fillRect(23,8,112,112);
      map.fillStyle='#463f33';
      const mx=floor.mapX??(value=>value-floor.origin), mz=floor.mapZ??(value=>value);
      for(const b of floor.walls)map.fillRect(79+mx(b.x-b.w/2)*4,64+mz(b.z-b.d/2)*4,Math.max(1,(mx(b.x+b.w/2)-mx(b.x-b.w/2))*4),Math.max(1,(mz(b.z+b.d/2)-mz(b.z-b.d/2))*4));
      map.font='bold 10px system-ui';map.fillStyle='#f6db8c';
      for(const stair of floor.stairs)map.fillText(stair.direction>0?'↑':'↓',76+mx(stair.x)*4,67+mz(stair.z)*4);
      map.fillStyle='#d6fa87';map.beginPath();map.arc(79+mx(x)*4,64+mz(z)*4,3,0,Math.PI*2);map.fill();
      $('zone').textContent=level>1?'School · Floor '+level:mx(x)<-5?'Classroom':mx(x)>5?(mz(z)>5.5?'Restroom':'Assembly hall'):'School corridor';
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
    $('zone').textContent=roofAt(x,z,player.position.y)?'School roof':x<-33?'School approach':z<-25||x>30||z>33?'Pine perimeter':'School courtyard';
  }

  function cameraDistance(distance,indoors) {
    for(const b of indoors?interior.floorAt(player.position.x).walls:exteriorColliders) {
      obstacle.min.set(b.x-b.w/2-.26,b.bottom??(indoors?-1.15:0),b.z-b.d/2-.26);
      obstacle.max.set(b.x+b.w/2+.26,b.top??(indoors?(interior.floorAt(player.position.x).baseY??0)+3.6:b.h+.21),b.z+b.d/2+.26);
      if(cameraRay.intersectBox(obstacle,intersection))distance=Math.min(distance,Math.max(.65,target.distanceTo(intersection)-.12));
    }
    return distance;
  }

  let last=performance.now(), wasIndoors=false;
  renderer.setAnimationLoop(now=>{
    const dt=Math.min((now-last)/1000,.045); last=now;
    if(active && deathTime) {
      deathTime+=dt;
      const progress=Math.min(1,deathTime/2.6);
      rig.rotation.x=-Math.min(1,progress*5)*1.48;
      target.copy(player.position).add(direction.set(0,.55,0));
      direction.set(0,.27+progress*.42,1).applyAxisAngle(T.Object3D.DEFAULT_UP,yaw).normalize();
      cameraRay.set(target,direction);
      const indoors=inside(player.position.x,player.position.z,player.position.y);
      const distance=cameraDistance((indoors?2:4)+progress*(indoors?2:7),indoors);
      camera.position.copy(target).addScaledVector(direction,distance);
      if(indoors)camera.position.y=Math.min(camera.position.y,(interior.floorAt(player.position.x).baseY??0)+3.35);
      camera.lookAt(target);
      if(deathTime>=3.1){reset();notice('Back at the courtyard');}
    } else if(active && !packOpen && !emoteOpen) {
      const f=Number(down('KeyW','ArrowUp'))-Number(down('KeyS','ArrowDown'));
      const s=Number(down('KeyD','ArrowRight'))-Number(down('KeyA','ArrowLeft'));
      updateDoors(dt);
      const thrust=jetpack && !climbing && !emote && !pickupMotion && !drinkMotion && stamina>0 && player.position.y<32 && down('Space');
      exhaust.visible=thrust;
      if(thrust){airborne=true;stamina=Math.max(0,stamina-14*dt);recovery=.65;}
      const running=!climbing && !pickupMotion && (!emote || emote==='fart') && (f||s) && !exhausted && !airborne && down('ShiftLeft','ShiftRight');
      const posing=climbing || pickupMotion || drinkMotion || (emote && emote!=='fart');
      movement.set(posing?0:s,0,posing?0:-f).normalize().applyAxisAngle(T.Object3D.DEFAULT_UP,yaw);
      const {x,z}=player.position;
      const step=(running?7.6:4.05)*dt;
      if(!playerBlocked(x+movement.x*step,z))player.position.x+=movement.x*step;
      if(!playerBlocked(player.position.x,z+movement.z*step))player.position.z+=movement.z*step;
      const moving=player.position.x!==x||player.position.z!==z;
      if(moving && !airborne && !climbing) {
        record(running ? 'sprinted' : 'walked', Math.hypot(player.position.x-x, player.position.z-z));
      }
      if(climbing)updateClimb(dt,f);
      const floor=Math.max(groundAt(player.position.x,player.position.z),roofAt(player.position.x,player.position.z,player.position.y));
      if(!climbing && !airborne && player.position.y-floor>.22){airborne=true;verticalSpeed=0;}
      if(airborne && !climbing) {
        verticalSpeed=thrust?Math.min(7,verticalSpeed+24*dt):verticalSpeed-16*dt;
        if(jetpack)verticalSpeed=Math.max(-7,verticalSpeed);
        player.position.y+=verticalSpeed*dt;
        if(player.position.y<=floor && verticalSpeed<=0) {
          landingTime=Math.min(.32,.08-verticalSpeed*.015);
          health=Math.max(0,health-Math.max(0,-verticalSpeed-8)*8);
          airborne=false;verticalSpeed=0;player.position.y=floor;
          if(health===0)beginDeath();
        }
      } else if(!climbing)player.position.y=floor;
      if(running && moving) {
        stamina=Math.max(0,stamina-21*dt); recovery=.7;
        if(stamina===0)exhausted=true;
      } else if(!climbing && !thrust) {
        recovery=Math.max(0,recovery-dt);
        if(!recovery)stamina=Math.min(100,stamina+16*dt);
        if(stamina>=22)exhausted=false;
      }
      attackTime=Math.max(0,attackTime-dt);
      swing=Math.max(0,swing-dt);
      combat.update(dt,player,amount=>{
        health=Math.max(0,health-amount);
        if(!health)beginDeath();
        else notice('Practice bot hit · −'+amount+' health');
      });
      updateEffects(dt,running && moving);
      updateVitals();
      if(moving && !climbing) {
        const angle=Math.atan2(movement.x,movement.z);
        player.rotation.y+=Math.atan2(Math.sin(angle-player.rotation.y),Math.cos(angle-player.rotation.y))*(1-Math.exp(-dt*16));
        stride+=dt*(running?13:9);
      }
      landingTime=Math.max(0,landingTime-dt);
      const fall=airborne&&!thrust?T.MathUtils.clamp(-verticalSpeed/13,0,1):0;
      const landing=Math.sin(Math.PI*landingTime/.32);
      for(const {leg,arm,side} of limbs){
        leg.rotation.x=T.MathUtils.lerp(leg.rotation.x,airborne?side*.32:moving?Math.sin(stride)*side*(running?.9:.58):0,.24);
        arm.rotation.x=-leg.rotation.x*.76;
        arm.rotation.z=side*fall*.88;
        if(fall){arm.rotation.x=-.28-fall*.69;leg.rotation.x-=fall*.27;}
        if(climbing){arm.rotation.x=-2.15+Math.sin(stride)*side*.42;leg.rotation.x=Math.sin(stride)*side*.43;}
      }
      if(swing)limbs[1].arm.rotation.x=-Math.sin(swing/.26*Math.PI)*1.8;
      torso.rotation.set(.22*fall,0,0);
      torso.position.y=(moving?Math.abs(Math.sin(stride))*.045:0)-landing*.18;
      updateEmote(dt);
      updatePickupMotion(dt);
      updateDrink(dt);
      aimVector.set(0,-Math.sin(pitch),-Math.cos(pitch)).applyAxisAngle(T.Object3D.DEFAULT_UP,yaw);
      aimPoint.copy(player.position);aimPoint.y+=1.66;
      const indoors=inside(player.position.x,player.position.z,player.position.y);
      interior.setLighting(indoors?player.position.x:undefined);
      if(indoors && jetpack){jetpack=false;jetRig.visible=false;exhaust.visible=false;$('flight').hidden=true;}
      if(indoors!==wasIndoors){audio.ambience(true,indoors);wasIndoors=indoors;}
      if(firstPerson && !deathTime) {
        camera.position.copy(aimPoint);
        camera.lookAt(wanted.copy(aimPoint).add(aimVector));
      } else {
        target.copy(player.position).add(direction.set(0,1.40,0));
      const angle=T.MathUtils.clamp(.33+pitch*.28,.05,.65);
      direction.set(0,Math.sin(angle),Math.cos(angle)).applyAxisAngle(T.Object3D.DEFAULT_UP,yaw).normalize();
      cameraRay.set(target,direction);
      const distance=cameraDistance(indoors?3.4:camera.aspect<.65?7.2:5.9,indoors);
      camera.position.copy(wanted.copy(target).addScaledVector(direction,distance));
      if(indoors)camera.position.y=Math.min(camera.position.y,(interior.floorAt(player.position.x).baseY??0)+3.35);
      camera.lookAt(wanted.copy(target).addScaledVector(aimVector,3));
      }
      if(effects.dizzy)camera.rotateZ(Math.sin(now*.005)*.095*Math.min(1,effects.dizzy/3));
      const reticle=$('reticle');
      reticle.hidden=deathTime>0 || !items[equipped]?.weapon?.ranged;
      if(!reticle.hidden) {
        camera.updateMatrixWorld();
        aimPoint.addScaledVector(aimVector,16).project(camera);
        reticle.style.left=T.MathUtils.clamp((aimPoint.x+1)*50,2,98)+'%';
        reticle.style.top=T.MathUtils.clamp((1-aimPoint.y)*50,2,98)+'%';
      }
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
    const {x,y,z}=player.position;
    const indoor=active && inside(x,z,y);
    const nearDoor=active && y<4 && Math.abs(x-schoolDoor.x)<3 && Math.abs(z-schoolDoor.z)<3;
    const cameraIndoors=inside(camera.position.x,camera.position.z,camera.position.y);
    // Keep both chunks visible through the doorway and until the follow camera clears it.
    exteriorChunk.visible=!indoor || (x<200 && (nearDoor || !cameraIndoors));
    const visibleFloor=indoor?interior.floorAt(x):null;
    for(const floor of interior.floors)floor.chunk.visible=floor===visibleFloor || (floor===interior.floors[0] && nearDoor);
    combat.setCourtyardVisible(exteriorChunk.visible);
    for(const {model,marker,velocity} of pickups) {
      const p=model.position;
      model.visible=inside(p.x,p.z,p.y)
        ? interior.floorAt(p.x).chunk.visible : exteriorChunk.visible;
      marker.visible=model.visible && !velocity;
    }
    sky.update(dt,camera,exteriorChunk.visible&&!cameraIndoors,active&&!packOpen&&!emoteOpen);
    const clock=$('clock');
    const time=sky.time();
    if(clock.textContent!==time)clock.textContent=time;
    renderer.render(scene,camera);
  });
}
