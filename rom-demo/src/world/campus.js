import {addPineForest} from './forest.js';

/**
 * Builds the outdoor campus: ground, school wings, entrances, trees, lamps,
 * benches, ramp, hills, flower beds, flag, statue and parked cars.
 *
 * Keep the build order: the seeded random sequence decides window glass,
 * tree positions and flowers, so reordering calls reshuffles the campus.
 * Returns the layout data that collision, the minimap and quests use.
 */
export function buildCampus(build, sky) {
  const {T, scene, box, mesh, mat, texture, normalMap, surface, random} = build;
  const sceneGlobals = new Set(scene.children);

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
  const brickMaterials=new Map();
  function brick(w,h) {
    // Walls with the same proportions share one material (and one batch).
    const key=(w/2.9).toFixed(3)+'x'+(h/2.35).toFixed(3);
    if(!brickMaterials.has(key)) {
      const map=brickMap.clone();
      map.repeat.set(w/2.9,h/2.35);
      const normal=brickNormal.clone(); normal.repeat.copy(map.repeat);
      brickMaterials.set(key,new T.MeshLambertMaterial({map,normalMap:normal}));
    }
    return brickMaterials.get(key);
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
  let concrete;
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
  concrete=surface('#68777d',['#627177','#6b797e','#647176'],5);
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
  const lampHead=new T.CylinderGeometry(.32,.12,.18,8), lampGlass=new T.CylinderGeometry(.19,.13,.075,12);
  for (const [x,z] of [[-27,5],[-12,6],[1,3],[18,17],[29,9],[-32,17]]) {
    box(x,1.58,z,.085,3.16,.085,0x505650);
    mesh(lampHead,0x3e4843,x,3.23,z);
    mesh(lampGlass,sky.lampMaterial,x,3.12,z);
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
  /** Walkable height outdoors: hills, entrance steps and the ramp. */
  function outdoorGround(x,z) {
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
      const y=outdoorGround(x,z),height=.12+random()*.14;
      box(x,y+height/2,z,.024,height,.024,0x426334).castShadow=false;
      mesh(flowers,[0xf8e6a2,0xf2a1a4,0xecece4,0xbd9dde][i%4],x,y+height,z).scale.set(.069,.049,.069);
    }
  }
  const shrubShape=new T.IcosahedronGeometry(.6,1);
  for(const [x,z] of [[-25,-.8],[29,1],[-17,4],[34,-16],[-30,-43]]) {
    for(let i=0;i<6;i++) {
      const shrub=mesh(shrubShape,i%2?0x456041:0x587448,x+i*.62,.35,z);
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
  const wheel=new T.CylinderGeometry(.33,.33,.17,12);
  for(const [x,z,color] of [[-46,10,0x42667b],[-47,-2,0xad5143],[-42,-36,0xc7bfab]]) {
    box(x,.52,z,1.86,.67,3.95,color);
    box(x,.995,z-.14,1.64,.56,2.05,0x526773);
    box(x,1.29,z-.14,1.63,.08,1.96,color);
    for(const side of [-1,1]) {
      for(const axle of [-1.25,1.25])mesh(wheel,0x26282b,x+side*.88,.34,z+axle).rotation.z=Math.PI/2;
      box(x+side*.61,.58,z+1.987,.36,.16,.05,0xf7e3b1);
      box(x+side*.61,.58,z-1.987,.36,.16,.05,0xad3830);
    }
    parkedCars.push({x,z,w:1.95,d:4.08,h:1.35});
  }

  const chunk=new T.Group();
  for(const node of [...scene.children]) {
    if(!sceneGlobals.has(node) && !node.isLight)chunk.add(node);
  }
  scene.add(chunk);

  function roofAt(x,z,y) {
    let height=0;
    for(const b of buildings) {
      const top=b.h+.23;
      if(y>=top-.07 && Math.abs(x-b.x)<b.w/2+.13 && Math.abs(z-b.z)<b.d/2+.13)height=Math.max(height,top);
    }
    return height;
  }

  return {
    chunk, buildings, schoolShell, parkedCars, trees, hills, ramp,
    door:{...schoolDoor, opening:0, leaves:doorLeaves},
    outdoorGround, roofAt,
  };
}
