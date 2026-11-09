export function addPineForest(T, scene, trees, texture, normalMap) {
  let seed=723;
  function random() {
    seed=(Math.imul(seed,1664525)+1013904223)>>>0;
    return seed/4294967296;
  }
  const bark=texture(128,c=>{
    c.fillStyle='#75513b';c.fillRect(0,0,128,128);
    for(let i=0;i<470;i++) {
      c.fillStyle=['#60402e','#8d6247','#a27655','#583b2c'][i%4];
      const x=random()*128,y=random()*128;
      c.fillRect(x,y,1+random()*2,3+random()*19);
    }
  },2);
  const barkMaterial=new T.MeshStandardMaterial({map:bark,normalMap:normalMap(bark,1.65),roughness:1});
  const foliage=texture(256,c=>{
    const colors=['#233f2b','#365338','#476544','#58754d','#688455'];
    // Build open sprays rather than filling the crown with a solid silhouette.
    for(let spray=0;spray<35;spray++) {
      const angle=random()*Math.PI*2;
      const radius=18+random()*95;
      const x=Math.cos(angle),y=Math.sin(angle);
      for(let i=0;i<34;i++) {
        const t=.19+random()*.76;
        const side=i%2===0?1:-1;
        const length=4+random()*15;
        const startX=128+x*t*radius,startY=128+y*t*radius*.8;
        c.strokeStyle=colors[Math.floor(random()*colors.length)];
        c.lineWidth=1.5+random()*2.6;
        c.beginPath();c.moveTo(startX,startY);
        c.lineTo(startX+(x*.75-y*side)*length,startY+(y*.75+x*side)*length);
        c.stroke();
      }
    }
  });
  const foliageMaterial=new T.MeshStandardMaterial({
    map:foliage,alphaTest:.42,side:T.DoubleSide,roughness:1
  });
  const barkParts=[], crowns=[];
  const up=new T.Vector3(0,1,0), direction=new T.Vector3();
  const transform=new T.Object3D();
  const vector=(x,y,z)=>new T.Vector3(x,y,z);
  function limb(start,end,radius) {
    direction.copy(end).sub(start);
    const length=direction.length();
    transform.position.copy(start).lerp(end,.5);
    transform.quaternion.setFromUnitVectors(up,direction.normalize());
    transform.scale.set(radius,length,radius);
    transform.updateMatrix();barkParts.push(transform.matrix.clone());
  }
  function needles(center,width,height,angle) {
    for(const turn of [0,Math.PI/2]) {
      transform.position.copy(center);
      transform.rotation.set(-.28,angle+turn,.17);
      transform.scale.set(width,height,1);
      transform.updateMatrix();crowns.push(transform.matrix.clone());
    }
  }
  for(const {x,z,h} of trees) {
    const lean=(random()-.5)*h*.08;
    limb(vector(x,0,z),vector(x+lean,h*.92,z),h*.023);
    const phase=random()*Math.PI*2;
    const detailed=Math.abs(x)<45 && Math.abs(z)<38;
    const tiers=detailed?7:5;
    for(let i=0;i<tiers;i++) {
      const t=i/(tiers-1);
      const height=h*(.44+t*.5);
      const angle=phase+i*2.4;
      const reach=h*(.18-.135*t)*(.8+random()*.35);
      const root=vector(x+lean*height/h,height,z);
      const end=vector(root.x+Math.cos(angle)*reach,height+reach*.3,z+Math.sin(angle)*reach);
      limb(root,end,h*(.008-.005*t));
      needles(end,h*(.29-.14*t),h*(.23-.11*t),angle);
      if(detailed) {
        const fork=root.clone().lerp(end,.55);
        const forkEnd=vector(fork.x+Math.cos(angle+.9)*reach*.7,fork.y+reach*.35,fork.z+Math.sin(angle+.9)*reach*.7);
        limb(fork,forkEnd,h*.003);
        needles(forkEnd,h*(.20-.09*t),h*(.17-.07*t),angle+.9);
      }
    }
    needles(vector(x+lean,h*.97,z),h*.18,h*.19,phase);
  }
  function batch(geometry,material,matrices) {
    const mesh=new T.InstancedMesh(geometry,material,matrices.length);
    matrices.forEach((matrix,index)=>mesh.setMatrixAt(index,matrix));
    mesh.instanceMatrix.needsUpdate=true;
    mesh.castShadow=true;
    mesh.receiveShadow=true;
    scene.add(mesh);
  }
  batch(new T.CylinderGeometry(.38,1,1,7),barkMaterial,barkParts);
  batch(new T.PlaneGeometry(1,1),foliageMaterial,crowns);
}
