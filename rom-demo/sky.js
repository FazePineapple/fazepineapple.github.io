export function createSky(T, scene, sun, ambient) {
  const daylightColor=new T.Color(0xa9c7d5);
  const midnightColor=new T.Color(0x121b35);
  const dayAmbient=new T.Color(0xe1f0ff);
  const nightAmbient=new T.Color(0x90a9e5);
  const lampMaterial=new T.MeshStandardMaterial({
    color:0xaca493, emissive:0xffd393, emissiveIntensity:0,
  });
  const lights=[];
  const sky=new T.Group();
  scene.add(sky);

  function skyTexture(size, paint) {
    const canvas=document.createElement('canvas');
    canvas.width=canvas.height=size;
    paint(canvas.getContext('2d'),size);
    const texture=new T.CanvasTexture(canvas);
    texture.colorSpace=T.SRGBColorSpace;
    return texture;
  }

  function disk(color, halo) {
    const map=skyTexture(128,(context,size)=>{
      const center=size/2;
      const gradient=context.createRadialGradient(center,center,0,center,center,center);
      gradient.addColorStop(0,color);
      gradient.addColorStop(.30,color);
      gradient.addColorStop(.34,halo);
      gradient.addColorStop(1,'transparent');
      context.fillStyle=gradient;
      context.fillRect(0,0,size,size);
    });
    const sprite=new T.Sprite(new T.SpriteMaterial({map,fog:false,depthWrite:false}));
    sprite.scale.set(22,22,1);
    sky.add(sprite);
    return sprite;
  }

  const sunDisk=disk('#fff7d7','rgba(255,211,120,.34)');
  const moon=disk('#e5edff','rgba(155,180,240,.2)');
  moon.scale.set(15,15,1);
  const sunlightDirection=new T.Vector3();
  const moonDirection=new T.Vector3(.58,.71,-.41).normalize();

  const cloudMap=skyTexture(256,(context,size)=>{
    const puffs=[[.18,.58,.16],[.34,.48,.23],[.52,.37,.29],[.68,.49,.23],[.83,.58,.17],[.52,.64,.19]];
    for(const [x,y,radius] of puffs) {
      const gradient=context.createRadialGradient(x*size,y*size,0,x*size,y*size,radius*size);
      gradient.addColorStop(0,'rgba(255,255,255,.99)');
      gradient.addColorStop(.53,'rgba(248,252,255,.88)');
      gradient.addColorStop(1,'rgba(222,235,245,0)');
      context.fillStyle=gradient;
      context.fillRect(0,0,size,size);
    }
  });
  const cloudMaterial=new T.SpriteMaterial({map:cloudMap,fog:false,depthWrite:false,opacity:.83});
  const clouds=[];
  for(const [angle,height,width] of [
    [.07,41,47],[.58,52,37],[1.16,33,53],[1.83,47,42],[2.52,37,49],
    [3.08,54,57],[3.74,44,41],[4.36,36,59],[5.02,58,46],[5.72,45,42],
  ]) {
    const sprite=new T.Sprite(cloudMaterial);
    sprite.scale.set(width,width*.48,1);
    sky.add(sprite);
    clouds.push({sprite,angle,height});
  }

  let hour=8;
  let blend=0;
  let drift=0;

  function toggle() {
    hour=hour>=20 || hour<6?8:22;
  }

  return {
    lampMaterial,
    addLamp(x,y,z) {
      const lamp=new T.PointLight(0xffcd8e,0,12,2);
      lamp.position.set(x,y,z);
      scene.add(lamp);
      lights.push(lamp);
    },
    toggle,
    time() {
      const minutes=Math.floor(hour*60);
      return String(Math.floor(minutes/60)).padStart(2,'0')+':'+String(minutes%60).padStart(2,'0');
    },
    update(dt,camera,outdoors,playing) {
      if(playing)hour=(hour+dt*.1)%24;
      const darkness=1-T.MathUtils.smoothstep(hour,5,8)+T.MathUtils.smoothstep(hour,17,21);
      blend=T.MathUtils.lerp(blend,darkness,1-Math.exp(-dt*1.25));
      scene.background.copy(daylightColor).lerp(midnightColor,blend);
      scene.fog.color.copy(scene.background);
      ambient.color.copy(dayAmbient).lerp(nightAmbient,blend);
      ambient.intensity=T.MathUtils.lerp(2.1,.68,blend);
      sun.intensity=T.MathUtils.lerp(2.35,.07,blend);
      lampMaterial.emissiveIntensity=blend*3;
      for(const lamp of lights)lamp.intensity=blend*65;

      sky.visible=outdoors;
      if(!outdoors)return;
      sky.position.copy(camera.position);
      sunlightDirection.copy(sun.position).sub(sun.target.position).normalize();
      sunDisk.position.copy(sunlightDirection).multiplyScalar(185);
      sunDisk.material.opacity=1-blend;
      sunDisk.visible=blend<1;
      moon.position.copy(moonDirection).multiplyScalar(185);
      moon.material.opacity=blend;
      moon.visible=blend>0;
      cloudMaterial.color.setRGB(1-blend*.66,1-blend*.59,1-blend*.46);
      cloudMaterial.opacity=T.MathUtils.lerp(.84,.38,blend);
      drift=(drift+dt*.004)%(2*Math.PI);
      for(const {sprite,angle,height} of clouds) {
        sprite.position.set(Math.cos(angle+drift)*136,height,Math.sin(angle+drift)*136);
      }
    },
  };
}
