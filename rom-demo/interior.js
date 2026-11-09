export function buildInterior(T, scene, box, surface, texture, entrance) {
  const existingNodes=new Set(scene.children);
  const origin=300;
  const walls=[];
  const lights=[];
  const tile=surface('#b8a18b',['#b09c85','#baa58e','#c0ac94'],5,true);
  const wood=surface('#b88755',['#ad7d4e','#ba8d5b','#bf935d'],6,true);
  const wall=(x,z,w,d)=>{
    walls.push({x:origin+x,z,w,d});
    box(origin+x,1.8,z,w,3.6,d,0xe5d6aa).castShadow=false;
    box(origin+x,.42,z,w+.025,.84,d+.025,0xa98d6f).castShadow=false;
  };
  box(origin,-.12,0,28,.24,28,tile);
  box(origin,3.68,0,28,.15,28,0xe9e4d4).castShadow=false;
  wall(0,-14,28,.25);
  const gap=entrance.width/entrance.scaleX;
  for(const side of [-1,1])wall(side*(14+gap/2)/2,13.66,14-gap/2,.25);
  wall(-14,0,.25,28);wall(14,0,.25,28);
  // Open doorways from the corridor into the classroom, hall and restroom.
  for(const [x,z,w,d] of [[-5,-9,.2,10],[-5,3,.2,10],[-5,12,.2,4],[5,-10,.2,8],[5,1,.2,9],[5,12,.2,4],[9.5,5.5,9,.2]])wall(x,z,w,d);
  box(origin-9.5,.01,-5,8.7,.02,17.7,wood);
  box(origin+9.5,.01,-4.3,8.7,.02,19,wood);
  for(const [x,z] of [[0,8],[0,0],[0,-9],[-9,-7],[9,-5],[9,9],[-9,7]]) {
    const light=new T.PointLight(0xffedcc,30,12);
    light.position.set(origin+x,3.27,z);light.visible=false;scene.add(light);lights.push(light);
    box(origin+x,3.49,z,1.75,.08,.39,new T.MeshBasicMaterial({color:0xfff4da}));
  }
  function sign(label,x,y,z,w,h,turn=0) {
    const map=texture(256,c=>{
      c.fillStyle='#304c43';c.fillRect(0,0,256,256);
      c.fillStyle='#fff2ce';c.textAlign='center';c.font='bold 32px sans-serif';
      c.fillText(label,128,143,235);
    });
    const panel=new T.Mesh(new T.PlaneGeometry(w,h),new T.MeshBasicMaterial({map}));
    panel.position.set(origin+x,y,z);panel.rotation.y=turn;scene.add(panel);
  }
  sign('IŠĖJIMAS',0,2.65,13.47,3.5,.7,Math.PI);
  sign('KLASĖ',-4.87,2.65,-4,1.6,.46,Math.PI/2);
  sign('AKTŲ SALĖ',4.87,2.65,-5,1.6,.46,-Math.PI/2);
  sign('WC',4.87,2.65,8.35,1.6,.46,-Math.PI/2);
  sign('GEDIMINO GIMNAZIJA',0,2.2,-13.86,6.5,1);
  for(let i=0;i<6;i++) {
    box(origin-4.86,1.88,-12.6+i*.94,.035,.53,.71,0x705748);
    box(origin-4.83,1.88,-12.6+i*.94,.035,.43,.59,[0x83a3a0,0xd29a6e,0xc6af69][i%3]);
  }
  box(origin-9.4,1.77,-13.83,5,1.36,.09,0x28443b);
  for(const x of [-12,-9.5,-7])for(const z of [-11,-8,-5]) {
    box(origin+x,.76,z,1.65,.08,.82,0xaf8154);
    for(const side of [-.61,.61])box(origin+x+side,.37,z,.08,.74,.57,0x535953);
    box(origin+x,.46,z+.8,.48,.075,.46,0xac7c4e);
    box(origin+x,.69,z+1,.48,.47,.075,0xac7c4e);
  }
  box(origin+9.5,.16,-11.8,8,.32,3.2,wood);
  for(const x of [6.5,7.9,9.3,10.7,12.1])for(const z of [-8,-6.6,-5.2,-3.8]) {
    box(origin+x,.48,z,.63,.15,.57,0x984146);
    box(origin+x,.77,z+.26,.64,.63,.13,0x984146);
    box(origin+x,.22,z,.11,.44,.46,0x484944);
  }
  for(const z of [8,10.5]) {
    box(origin+13.5,.87,z,.74,.25,.88,0xe8ece5);
    box(origin+13.6,1.55,z,.055,.72,.82,0x789da3);
  }
  box(origin+9,.47,13.15,.55,.92,.72,0xe8ece5);
  box(origin+8.95,.47,12.68,.61,.23,.54,0xe8ece5);
  const spacing=44;
  const floors=[{origin,walls,stairs:[],lights}];
  const stairWidth=2.52;
  const stairStart=-7.3;
  const stairEnd=-13.8;
  const tread=.52;
  const rise=.13;
  const stepCount=8;
  const stairMaterial=surface('#a38d77',['#a28c75','#b29b82','#9c8976'],3);
  const upperMaterial=new T.MeshBasicMaterial({color:0xffedc8});

  function plaque(base,label,x,y,z,width,rotation=0) {
    const map=texture(256,c=>{
      c.fillStyle='#304c43';c.fillRect(0,0,256,256);
      c.fillStyle='#fff2ce';c.textAlign='center';c.font='bold 32px sans-serif';
      c.fillText(label,128,143,235);
    });
    const panel=new T.Mesh(new T.PlaneGeometry(width,.52),new T.MeshBasicMaterial({map}));
    panel.position.set(base+x,y,z);panel.rotation.y=rotation;scene.add(panel);
  }
  function addStairs(floor,direction) {
    const x=direction>0?-2.45:2.45;
    const base=floor.origin;
    floor.stairs.push({x:base+x,z:-12.8,direction});
    for(let i=0;i<stepCount;i++) {
      const height=direction>0?(i+1)*rise:-i*rise;
      box(base+x,height-.085,stairStart-(i+.5)*tread,stairWidth,.17,tread,stairMaterial);
    }
    const landingStart=stairStart-stepCount*tread;
    box(base+x,direction>0?stepCount*rise-.1:-(stepCount-1)*rise-.1,
      (landingStart+stairEnd)/2,stairWidth,.2,landingStart-stairEnd,stairMaterial);
    for(const side of [-1,1]) {
      const railX=base+x+side*stairWidth/2;
      for(let i=0;i<=stepCount;i+=2) {
        const height=direction*rise*i;
        box(railX,.48+height,stairStart-i*tread,.065,.96,.065,0x4c5a54);
      }
      const rail=box(railX,.95+direction*rise*stepCount/2,stairStart-stepCount*tread/2,
        .065,.065,Math.hypot(stepCount*tread,stepCount*rise),0x596d61);
      rail.rotation.x=direction*Math.atan2(rise,tread);
      box(railX,.94+direction*rise*stepCount,(landingStart+stairEnd)/2,
        .065,.065,landingStart-stairEnd,0x596d61);
      floor.walls.push({x:railX,z:(stairStart+stairEnd)/2,w:.07,d:stairStart-stairEnd,top:1.65,bottom:-1.15});
    }
    plaque(base,direction>0?'AUKŠTYN ↑':'ŽEMYN ↓',x,direction>0?3.05:1.65,-13.81,2.2);
  }

  addStairs(floors[0],1);
  const lobby=new T.Group();
  for(const node of [...scene.children])if(!existingNodes.has(node))lobby.add(node);
  lobby.scale.set(entrance.scaleX,1,entrance.scaleZ);
  const centerZ=entrance.z-14*entrance.scaleZ;
  lobby.position.set(entrance.x-origin*entrance.scaleX,entrance.y,centerZ);
  scene.add(lobby);
  const worldX=x=>entrance.x+(x-origin)*entrance.scaleX;
  const worldZ=z=>centerZ+z*entrance.scaleZ;
  for(const part of walls){part.x=worldX(part.x);part.z=worldZ(part.z);part.w*=entrance.scaleX;part.d*=entrance.scaleZ;if(part.bottom!==undefined)part.bottom+=entrance.y;if(part.top!==undefined)part.top+=entrance.y;}
  for(const stair of floors[0].stairs){stair.x=worldX(stair.x);stair.z=worldZ(stair.z);}
  Object.assign(floors[0],{origin:entrance.x,mapX:x=>(x-entrance.x)/entrance.scaleX,mapZ:z=>(z-centerZ)/entrance.scaleZ,spawnZ:worldZ(-6.2),baseY:entrance.y});
  for(let index=1;index<3;index++) {
    const base=origin+index*spacing;
    const floor={origin:base,walls:[],stairs:[],lights:[]};
    floors.push(floor);
    const partition=(x,z,w,d)=>{
      floor.walls.push({x:base+x,z,w,d});
      box(base+x,1.8,z,w,3.6,d,index===1?0xe4d9b3:0xd8e0d4).castShadow=false;
      box(base+x,.38,z,w+.025,.76,d+.025,index===1?0x9d8a71:0x819284).castShadow=false;
    };
    const left=2.45-stairWidth/2,right=2.45+stairWidth/2;
    const flightDepth=stairStart+14;
    box(base,-.12,(stairStart+14)/2,28,.24,14-stairStart,tile);
    box(base+(-14+left)/2,-.12,(stairStart-14)/2,left+14,.24,flightDepth,tile);
    box(base+(right+14)/2,-.12,(stairStart-14)/2,14-right,.24,flightDepth,tile);
    box(base,3.68,0,28,.15,28,0xe9e4d4).castShadow=false;
    partition(0,-14,28,.25);partition(0,14,28,.25);
    partition(-14,0,.25,28);partition(14,0,.25,28);
    for(const x of [-5,5]){
      partition(x,-9,.2,10);
      partition(x,2,.2,7);
      partition(x,11,.2,6);
    }
    box(base+2.45,-.59,-13.94,stairWidth,1.18,.25,index===1?0x9d8a71:0x819284);
    addStairs(floor,-1);
    if(index===1)addStairs(floor,1);
    plaque(base,index===1?'2 AUKŠTAS':'3 AUKŠTAS',0,2.62,13.84,3.1,Math.PI);
    plaque(base,index===1?'BIBLIOTEKA':'DAILĖS KLASĖ',-4.86,2.6,-2.7,2.2,Math.PI/2);
    plaque(base,index===1?'GAMTOS MOKSLAI':'SKAITYKLA',4.86,2.6,-2.7,2.2,-Math.PI/2);
    for(const [x,z] of [[0,8],[0,0],[0,-8],[-9,-5],[9,-5],[-9,8],[9,8]]) {
      const light=new T.PointLight(0xffedcc,27,11);
      light.position.set(base+x,3.27,z);light.visible=false;scene.add(light);floor.lights.push(light);
      box(base+x,3.49,z,1.75,.08,.39,upperMaterial).castShadow=false;
    }
    for(const side of [-1,1]) {
      for(const z of [-10,-5,0,5,10]) {
        const x=base+side*13.81;
        box(x,2.15,z,.075,1.32,2.65,0xb7c1b8);
        box(x-side*.048,2.15,z,.022,1.12,2.42,0x739aa7);
        box(x-side*.072,2.15,z,.035,1.24,.07,0xe9e6d4);
      }
      for(const z of [-8,-3,3,9]) {
        const x=base+side*9;
        box(x,.78,z,2.15,.09,.92,index===1&&side===1?0x596f69:0xb38557);
        for(const end of [-.8,.8])box(x+end,.37,z,.075,.75,.7,0x555e56);
      }
    }
    if(index===1)for(const z of [-10.5,-7.8,7.8,10.5]) {
      box(base-12.4,1.2,z,.54,2.4,1.65,0x8e6c48);
      for(let i=0;i<4;i++)for(let j=0;j<6;j++)box(base-12.08,.35+i*.49,z-.62+j*.22,
        .1,.31+(j%3)*.035,.16,[0x9a5148,0x4e7777,0xc19962,0x526b4c][(i+j)%4]);
    }
    if(index===2)for(let i=0;i<6;i++) {
      box(base-9.2+i*.94,1.95,-13.82,.69,.73,.055,0x806249);
      box(base-9.2+i*.94,1.95,-13.78,.56,.6,.026,[0x9ab4aa,0xdda276,0xb8a276][i%3]);
    }
  }
  const floorAt=x=>floors[Math.max(0,Math.min(floors.length-1,x<200?0:Math.round((x-origin)/spacing)))];
  function stairHeight(x,z) {
    const floor=floorAt(x);
    const base=floor.baseY??0;
    const scale=floor.mapX?entrance.scaleX:1;
    const localZ=floor.mapZ?floor.mapZ(z):z;
    if(localZ>stairStart || localZ<stairEnd)return base+.03;
    const stair=floor.stairs.find(stair=>Math.abs(x-stair.x)<stairWidth*scale/2);
    if(!stair)return base+.03;
    const step=Math.min(stepCount-1,Math.floor((stairStart-localZ)/tread));
    return base+.03+(stair.direction>0?step+1:-step)*rise;
  }
  let litFloor;
  function setLighting(x) {
    const active=x===undefined?null:floorAt(x);
    if(active===litFloor)return;
    litFloor=active;
    for(const floor of floors)for(const light of floor.lights)light.visible=floor===active;
  }
  return {origin:entrance.x,walls,floors,floorAt,stairHeight,setLighting,restroom:{x:worldX(origin+9),z:worldZ(12)}};
}
