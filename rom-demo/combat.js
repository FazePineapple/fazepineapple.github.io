export function createCombat(T, scene, box, oval, groundAt, blocked) {
  const bots=[];
  const tracerGeometry=new T.BufferGeometry();
  tracerGeometry.setAttribute('position',new T.BufferAttribute(new Float32Array(6),3));
  const tracer=new T.Line(tracerGeometry,new T.LineBasicMaterial({color:0xffe798,transparent:true}));
  tracer.frustumCulled=false;
  tracer.visible=false;
  scene.add(tracer);
  let tracerTime=0;
  function healthBar() {
    const canvas=document.createElement('canvas');
    canvas.width=128;canvas.height=24;
    const context=canvas.getContext('2d');
    const map=new T.CanvasTexture(canvas);
    const sprite=new T.Sprite(new T.SpriteMaterial({map,depthWrite:false}));
    sprite.position.y=2.03;sprite.scale.set(.95,.178,1);
    return {sprite,draw(hp){
      context.fillStyle='#1a2620';context.fillRect(0,0,128,24);
      context.fillStyle='#733d35';context.fillRect(4,4,120,16);
      context.fillStyle='#a9df67';context.fillRect(4,4,120*hp/100,16);
      map.needsUpdate=true;
    }};
  }
  const homes=[[-1,27],[12,26],[31,21]];
  for(const [x,z] of homes) {
    const model=new T.Group();
    scene.add(model);
    model.position.set(x,groundAt(x,z),z);
    box(0,1.01,0,.54,.72,.39,0x854c42,model);
    oval(model,0x3c4443,0,1.56,0,.27,.23,.22);
    box(0,1.57,.215,.29,.076,.025,0xffc06d,model);
    const legs=[-.14,.14].map(side=>{
      const pivot=new T.Group();
      pivot.position.set(side,.65,0);model.add(pivot);
      box(0,-.28,0,.16,.61,.18,0x383c39,pivot);
      return pivot;
    });
    const bar=healthBar();bar.draw(100);model.add(bar.sprite);
    bots.push({model,bar,legs,x,z,hp:100,phase:bots.length,alert:0,cooldown:0,respawn:0});
  }
  const delta=new T.Vector3(), forward=new T.Vector3();
  return {
    update(dt,player,damage) {
      tracerTime=Math.max(0,tracerTime-dt);
      tracer.visible=tracerTime>0;
      tracer.material.opacity=tracerTime/.12;
      for(const bot of bots) {
        const {model}=bot;
        if(!bot.hp) {
          bot.respawn-=dt;
          if(bot.respawn>0)continue;
          model.position.set(bot.x,groundAt(bot.x,bot.z),bot.z);
          model.visible=true;bot.hp=100;bot.bar.draw(100);
        }
        const p=model.position;
        bot.alert=Math.max(0,bot.alert-dt);
        bot.cooldown=Math.max(0,bot.cooldown-dt);
        bot.phase+=dt;
        delta.copy(player.position).sub(p);
        const distance=Math.hypot(delta.x,delta.z);
        const chasing=bot.alert>0 && distance<15;
        if(!chasing)delta.set(bot.x+Math.sin(bot.phase*.55)*2.4-p.x,0,bot.z+Math.cos(bot.phase*.55)*2.4-p.z);
        delta.y=0;
        const speed=chasing?2.4:1.5;
        const step=Math.min(delta.length(),speed*dt);
        delta.normalize();
        if(!chasing||distance>1.05) {
          if(!blocked(p.x+delta.x*step,p.z))p.x+=delta.x*step;
          if(!blocked(p.x,p.z+delta.z*step))p.z+=delta.z*step;
          p.y=groundAt(p.x,p.z);
          if(step>.001)model.rotation.y=Math.atan2(delta.x,delta.z);
          bot.legs.forEach((leg,i)=>leg.rotation.x=Math.sin(bot.phase*9+i*Math.PI)*.44);
        }
        if(chasing && distance<1.65 && Math.abs(player.position.y-p.y)<1.1 && !bot.cooldown) {
          bot.cooldown=1.2;damage(9);
        }
      }
    },
    attack(position,yaw,weapon) {
      forward.set(-Math.sin(yaw),0,-Math.cos(yaw));
      let target=null, closest=weapon.range;
      for(const bot of bots) {
        if(!bot.hp)continue;
        delta.copy(bot.model.position).sub(position);
        const distance=Math.hypot(delta.x,delta.z);
        if(distance>closest || Math.abs(delta.y)>1.3)continue;
        delta.y=0;
        if(distance>.01 && delta.normalize().dot(forward)<weapon.aim)continue;
        let clear=true;
        for(let step=.3;step<distance-.3;step+=.3) {
          if(blocked(position.x+delta.x*step,position.z+delta.z*step)){clear=false;break;}
        }
        if(clear){closest=distance;target=bot;}
      }
      if(weapon.ranged) {
        const end=target?delta.copy(target.model.position):delta.copy(position).addScaledVector(forward,weapon.range);
        if(!target)for(let step=.3;step<weapon.range;step+=.3) {
          if(blocked(position.x+forward.x*step,position.z+forward.z*step)) {
            end.copy(position).addScaledVector(forward,step);break;
          }
        }
        const points=tracerGeometry.attributes.position;
        points.setXYZ(0,position.x+forward.x*.55,position.y+1.22,position.z+forward.z*.55);
        points.setXYZ(1,end.x,end.y+1.22,end.z);
        points.needsUpdate=true;
        tracerTime=.12;tracer.visible=true;tracer.material.opacity=1;
      }
      if(!target)return 'Miss';
      target.hp=Math.max(0,target.hp-weapon.damage);
      target.bar.draw(target.hp);
      if(target.hp){target.alert=7;return 'Practice bot · '+target.hp+' HP';}
      target.model.visible=false;target.respawn=15;target.alert=0;
      return 'Practice bot defeated';
    }
  };
}
