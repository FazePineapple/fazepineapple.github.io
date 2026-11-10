import {createBotAppearance} from './bot-appearance.js';

/**
 * Practice bots: patrol, chase and hit back, react to gas and being seen in
 * the toilet, and respawn. Emits 'bot:hit' and 'bot:defeated' on the bus.
 */
/** Height of a bot's centre of mass above its feet (before size scaling). */
const CENTRE=.95;
const GRAVITY=18;

export function createCombat({T, scene, box, oval, groundAt, blocked, playSound=()=>{}, bus}) {
  const bots=[];
  const courtyard=new T.Group();
  scene.add(courtyard);
  const tracerGeometry=new T.BufferGeometry();
  tracerGeometry.setAttribute('position',new T.BufferAttribute(new Float32Array(6),3));
  const tracer=new T.Line(tracerGeometry,new T.LineBasicMaterial({color:0xffe798,transparent:true}));
  tracer.frustumCulled=false;
  tracer.visible=false;
  scene.add(tracer);
  let tracerTime=0;
  const names=['Karpak','Dimonas','Lukoš','Laura Jus','Adam Medik','Robka','Edga','Ben10','Cigara'];
  const randomName=()=>names[Math.floor(Math.random()*names.length)];
  function healthBar() {
    const canvas=document.createElement('canvas');
    canvas.width=128;canvas.height=56;
    const context=canvas.getContext('2d');
    const map=new T.CanvasTexture(canvas);
    const sprite=new T.Sprite(new T.SpriteMaterial({map,depthWrite:false}));
    sprite.position.y=2.03;sprite.scale.set(1.05,.46,1);
    return {sprite,draw(hp,name){
      context.clearRect(0,0,128,56);
      context.fillStyle='#15241e';context.fillRect(0,0,128,30);
      context.fillStyle='#f2f8e6';context.font='bold 19px sans-serif';context.textAlign='center';
      context.fillText(name,64,22,120);
      context.save();context.translate(0,32);
      context.fillStyle='#1a2620';context.fillRect(0,0,128,24);
      context.fillStyle='#733d35';context.fillRect(4,4,120,16);
      context.fillStyle='#a9df67';context.fillRect(4,4,120*hp/100,16);
      context.restore();map.needsUpdate=true;
    }};
  }
  const homes=[[-1,27],[12,26],[31,21],[21.66,7],[22,10],[22.34,13]];
  let lesson=false;
  for(const [x,z] of homes) {
    const model=new T.Group();
    courtyard.add(model);
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
    const name=randomName(), bar=healthBar();bar.draw(100,name);
    const student=bots.length>=3;
    const appearance=createBotAppearance(T,model,box,oval);
    const profile=appearance.roll();
    // Everything visible hangs off a pivot at the centre of mass, so a
    // tumbling body spins around its middle instead of around its feet.
    const pivot=new T.Group();
    pivot.position.y=CENTRE;
    for(const part of [...model.children]){part.position.y-=CENTRE;pivot.add(part);}
    model.add(pivot,bar.sprite);
    bots.push({model,pivot,name,student,appearance,profile,bar,legs,x,z,hp:100,phase:bots.length,alert:0,cooldown:0,coughTime:0,respawn:0,gas:0,gasTick:0,body:null});
  }
  const delta=new T.Vector3(), forward=new T.Vector3();
  function clearPath(position,target) {
    const dx=target.x-position.x,dz=target.z-position.z;
    const distance=Math.hypot(dx,dz);
    for(let step=.3;step<distance-.3;step+=.3) {
      if(blocked(position.x+dx*step/distance,position.z+dz*step/distance))return false;
    }
    return true;
  }
  function damageBot(bot,amount,sound='botHit',source='attack') {
    if(!bot.hp)return;
    bot.hp=Math.max(0,bot.hp-amount);
    if(!bot.hp)playSound('botDeath');
    else if(sound)playSound(sound);
    bot.bar.draw(bot.hp,bot.name);
    bus?.emit('bot:hit',{name:bot.name,profile:bot.profile.name,damage:amount,source,defeated:!bot.hp});
    if(bot.hp)return;
    bus?.emit('bot:defeated',{name:bot.name,profile:bot.profile.name,source});
    bot.respawn=15;bot.alert=0;bot.gas=0;bot.stun=0;
    // Knocked-out bots fall over and stay down for a moment instead of vanishing.
    if(!bot.body)launch(bot,impulse.set(0,1.2,0),tumble.set(-3.2-Math.random()*1.5,0,(Math.random()-.5)*1.5));
  }

  // --- Rigid-body knockdowns -------------------------------------------------
  const impulse=new T.Vector3(), tumble=new T.Vector3(), axis=new T.Vector3();
  /** The car's own round obstacle: flying bodies and push-outs ignore it (see collideCar). */
  let carObstacle=null;
  /** Turns a bot into a free-flying body with `velocity` (world) and `spin` (pivot-local, rad/s). */
  function launch(bot,velocity,spin) {
    if(bot.body){bot.body.velocity.add(velocity);bot.body.spin.add(spin);bot.body.rest=0;bot.body.grounded=false;return;}
    bot.body={velocity:velocity.clone(),spin:spin.clone(),rest:0,rise:0,grounded:false};
    bot.bar.sprite.visible=false;
    bot.legs.forEach((leg,i)=>leg.rotation.x=i?.65:-.45);
  }
  /** Distance from the centre of mass down to the lowest point, given how upright the body is. */
  function reach(bot) {
    const {x,z}=bot.pivot.rotation;
    const upright=Math.abs(Math.cos(x)*Math.cos(z));
    return (.24+(CENTRE-.24)*upright)*bot.profile.scale;
  }
  function updateBody(bot,dt) {
    const b=bot.body, p=bot.model.position, pivot=bot.pivot, scale=bot.profile.scale;
    if(!bot.hp && b.rest>2.5) {
      // Defeated: sink into the ground and disappear until the respawn.
      b.rest+=dt;p.y-=dt*.45;
      if(b.rest>4.2){bot.body=null;pivot.rotation.set(0,0,0);bot.model.visible=false;}
      return;
    }
    if(b.rise) {
      // Getting back up: rotate upright, then hand control back to the AI.
      b.rise=Math.min(1,b.rise+dt*1.8);
      pivot.rotation.x*=1-b.rise; pivot.rotation.z*=1-b.rise;
      p.y=groundAt(p.x,p.z)-CENTRE*scale+reach(bot);
      if(b.rise<1)return;
      pivot.rotation.set(0,0,0);p.y=groundAt(p.x,p.z);
      bot.body=null;bot.bar.sprite.visible=true;bot.alert=8;
      bot.legs.forEach(leg=>leg.rotation.x=0);
      return;
    }
    b.velocity.y-=GRAVITY*dt;
    const nx=p.x+b.velocity.x*dt, nz=p.z+b.velocity.z*dt;
    // Walls: bounce the horizontal velocity back and lose some spin.
    if(blocked(nx,p.z,carObstacle)){b.velocity.x*=-.35;b.spin.multiplyScalar(.7);}else p.x=nx;
    if(blocked(p.x,nz,carObstacle)){b.velocity.z*=-.35;b.spin.multiplyScalar(.7);}else p.z=nz;
    p.y+=b.velocity.y*dt;
    pivot.rotation.x+=b.spin.x*dt;pivot.rotation.y+=b.spin.y*dt;pivot.rotation.z+=b.spin.z*dt;
    const floor=groundAt(p.x,p.z)-CENTRE*scale+reach(bot);
    b.grounded=p.y<=floor+.01;
    if(p.y<=floor) {
      p.y=floor;
      if(b.velocity.y<-3){b.velocity.y*=-.3;b.spin.multiplyScalar(.55);playSound('thud');}
      else b.velocity.y=Math.max(0,b.velocity.y);
    }
    if(b.grounded) {
      // Ground friction and rolling resistance.
      const friction=Math.max(0,1-7*dt);
      b.velocity.x*=friction;b.velocity.z*=friction;b.spin.multiplyScalar(Math.max(0,1-4*dt));
      const moving=Math.hypot(b.velocity.x,b.velocity.y,b.velocity.z)>.5||b.spin.length()>1.2;
      if(!moving) {
        // Settle flat on the back or the front, whichever is closer.
        // A survivor that landed on its feet just carries on.
        const wrapped=Math.atan2(Math.sin(pivot.rotation.x),Math.cos(pivot.rotation.x));
        const onFeet=bot.hp&&Math.abs(wrapped)<.35&&Math.abs(Math.cos(pivot.rotation.z))>.9;
        const flat=onFeet?wrapped:Math.sign(wrapped||1)*Math.PI/2;
        pivot.rotation.x+=(flat-wrapped)*Math.min(1,dt*6);
        pivot.rotation.z*=1-Math.min(1,dt*6);
        b.rest+=dt;
      } else b.rest=0;
    }
    if(bot.hp&&b.rest>1.4)b.rise=.001;
  }

  /**
   * Car contact: the car is a rectangle (half length/width around its
   * centre) and each bot a circle. Touching bots are pushed out; a fast
   * closing speed launches them as rigid bodies and damages them.
   * Returns {hits, slow}: names hit and how much the car should slow down.
   */
  function collideCar({x,z,heading,speed,halfLength=2.05,halfWidth=.98}) {
    const hits=[]; let slow=0;
    const sin=Math.sin(heading), cos=Math.cos(heading);
    const carVX=sin*speed, carVZ=cos*speed;
    for(const bot of bots) {
      if(!bot.model.visible||(!bot.hp&&!bot.body))continue;
      const p=bot.model.position, scale=bot.profile.scale, radius=.3*scale;
      if(p.y>groundAt(p.x,p.z)+1.4)continue; // Flying over the roof.
      const dx=p.x-x, dz=p.z-z;
      const along=dx*sin+dz*cos, across=dx*cos-dz*sin;
      const overlapAlong=halfLength+radius-Math.abs(along), overlapAcross=halfWidth+radius-Math.abs(across);
      if(overlapAlong<=0||overlapAcross<=0)continue;
      // Contact normal (car → bot) along the axis of least penetration.
      const front=overlapAlong<overlapAcross;
      const sAlong=front?Math.sign(along)||1:0, sAcross=front?0:Math.sign(across)||1;
      const nx=sAlong*sin+sAcross*cos, nz=sAlong*cos-sAcross*sin;
      const depth=front?overlapAlong:overlapAcross;
      const own=bot.body?.velocity;
      const closing=(carVX-(own?.x??0))*nx+(carVZ-(own?.z??0))*nz;
      // Push the bot out of the car.
      if(!blocked(p.x+nx*depth,p.z+nz*depth,carObstacle)){p.x+=nx*depth;p.z+=nz*depth;}
      if(closing<2.5||bot.rammed>0) {
        if(bot.body&&closing>0){bot.body.velocity.x+=nx*closing;bot.body.velocity.z+=nz*closing;}
        continue;
      }
      bot.rammed=.35;
      // Launch: carried along with the car, thrown off the bumper and up.
      impulse.set(carVX*.9+nx*closing*.55,1.4+closing*.33,carVZ*.9+nz*closing*.55);
      // Tumble about the horizontal axis across the direction of travel, in the bot's own frame.
      axis.set(impulse.z,0,-impulse.x).normalize().applyAxisAngle(T.Object3D.DEFAULT_UP,-bot.model.rotation.y);
      // Legs are swept forward, so the head falls back toward the car.
      tumble.copy(axis).multiplyScalar(-(closing*.9+Math.random()*2));tumble.y=(Math.random()-.5)*6;
      launch(bot,impulse,tumble);
      damageBot(bot,Math.round(closing*7),'botHit','car');
      if(bot.hp)bot.alert=8;
      hits.push(bot.name+(bot.hp?'':' (nugalėtas)'));
      slow+=.07*scale;
    }
    return {hits,slow:Math.min(.5,slow)};
  }
  return {
    setCourtyardVisible(outdoors,lobby) {
      for(const bot of bots)bot.model.visible=(bot.hp>0||bot.body!==null) && (bot.model.position.z< -2.5 && bot.student?lobby:outdoors);
    },
    setLesson(active){lesson=active;},
    /** Live, visible bots as aim targets: {x, y (body centre), z}. */
    targets(){
      return bots.filter(bot=>bot.hp && bot.model.visible)
        .map(({model:{position:p},profile})=>({x:p.x,y:p.y+.9*profile.scale,z:p.z}));
    },
    atDoor(x,z){return bots.some(bot=>bot.student && bot.hp && Math.hypot(bot.model.position.x-x,bot.model.position.z-z)<2.3);},
    spray(position,heading,weapon) {
      let hits=0;
      for(const bot of bots) {
        if(!bot.hp)continue;
        delta.copy(bot.model.position);delta.y+=.9*bot.profile.scale;
        if(!clearPath(position,delta))continue;
        delta.sub(position);
        const distance=delta.length();
        if(distance>weapon.range || (distance>.01 && delta.dot(heading)<distance*weapon.aim))continue;
        damageBot(bot,weapon.damage,bot.coughTime<=0?'cough':null,'spray');
        if(bot.coughTime<=0)bot.coughTime=.72;
        if(bot.hp)bot.alert=7;
        hits++;
      }
      return hits;
    },
    /**
     * Hits the first bot whose body (a capsule from its feet to the top of
     * its head) the segment from→to passes through. Returns the bot's
     * name and remaining HP, or null. `options.stink` makes it cough and
     * `options.stun` (seconds) glues it in place.
     */
    hitWithProp(from,to,damage,{source='throw',stink=false,stun=0,radius=.12}={}) {
      for(const bot of bots) {
        if(!bot.hp)continue;
        const base=bot.model.position, scale=bot.profile.scale;
        const reach=.42*scale+radius, top=base.y+1.95*scale, bottom=base.y-.05;
        // Sample the segment so fast props cannot tunnel through.
        for(let i=0;i<=4;i++) {
          const t=i/4;
          const x=from.x+(to.x-from.x)*t, y=from.y+(to.y-from.y)*t, z=from.z+(to.z-from.z)*t;
          if(y<bottom||y>top||Math.hypot(x-base.x,z-base.z)>reach)continue;
          damageBot(bot,damage,stink?'cough':'botHit',source);
          if(stink){bot.gas=2.4;bot.gasTick=.6;}
          if(stun)bot.stun=Math.max(bot.stun||0,stun);
          if(bot.hp)bot.alert=7;
          return {name:bot.name,hp:bot.hp,stunned:Boolean(stun)};
        }
      }
      return null;
    },
    collideCar,
    setCarObstacle(obstacle){carObstacle=obstacle;},
    nearbyReaction(position,type) {
      let count=0;
      const range=type==='gas'?3:8;
      for(const bot of bots) {
        if(!bot.hp || bot.model.position.distanceTo(position)>range || !clearPath(position,bot.model.position))continue;
        if(type==='gas'){bot.gas=2.4;bot.gasTick=0;}
        else bot.alert=10;
        count++;
      }
      return count;
    },
    update(dt,player,damage) {
      tracerTime=Math.max(0,tracerTime-dt);
      tracer.visible=tracerTime>0;
      tracer.material.opacity=tracerTime/.12;
      for(const bot of bots) {
        const {model}=bot;
        if(bot.body) {
          updateBody(bot,dt);
          if(!bot.hp)bot.respawn-=dt;
          continue;
        }
        if(!bot.hp) {
          bot.respawn-=dt;
          if(bot.respawn>0)continue;
          model.position.set(bot.x,groundAt(bot.x,bot.z),bot.z);
          bot.hp=100;bot.stun=0;bot.body=null;bot.pivot.rotation.set(0,0,0);bot.bar.sprite.visible=true;bot.name=randomName();bot.bar.draw(100,bot.name);bot.profile=bot.appearance.roll();
        }
        if(bot.gas>0) {
          bot.gas-=dt;bot.gasTick-=dt;
          if(bot.gasTick<=0){damageBot(bot,3,'botHit','gas');bot.gasTick=.6;}
          if(!bot.hp)continue;
        }
        const p=model.position;
        bot.rammed=Math.max(0,(bot.rammed||0)-dt);
        if(bot.stun>0) {
          // Glued or knocked down: no walking and no attacks.
          bot.stun=Math.max(0,bot.stun-dt);
          bot.legs.forEach(leg=>leg.rotation.x=0);
          continue;
        }
        bot.alert=Math.max(0,bot.alert-dt);
        bot.cooldown=Math.max(0,bot.cooldown-dt);
        bot.coughTime=Math.max(0,bot.coughTime-dt);
        bot.phase+=dt;
        delta.copy(player.position).sub(p);
        const distance=Math.hypot(delta.x,delta.z);
        const chasing=(bot.alert>0 || distance<3.5) && distance<15 && clearPath(p,player.position);
        if(!chasing) {
          const homeZ=bot.student && lesson?-5.4-(bot.z-7)*.65:bot.z;
          delta.set(bot.student?bot.x-p.x:bot.x+Math.sin(bot.phase*.55)*2.4-p.x,0,bot.student?homeZ-p.z:bot.z+Math.cos(bot.phase*.55)*2.4-p.z);
        }
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
          bot.cooldown=1.2;playSound('botAttack');damage(9);
        }
      }
    },
    attack(position,yaw,weapon,pitch=0) {
      forward.set(-Math.sin(yaw),0,-Math.cos(yaw));
      const origin=position.clone();
      if(weapon.ranged) {
        forward.multiplyScalar(Math.cos(pitch));forward.y=-Math.sin(pitch);
        origin.y+=1.66;
      }
      let target=null, closest=weapon.range;
      if(weapon.ranged)for(let step=.15;step<closest;step+=.15) {
        const x=origin.x+forward.x*step,y=origin.y+forward.y*step,z=origin.z+forward.z*step;
        if(y<=groundAt(x,z) || (y<(origin.x>200?3.6:11) && blocked(x,z)) || (origin.x>200 && y>=3.6)) {
          closest=step;break;
        }
      }
      for(const bot of bots) {
        if(!bot.hp)continue;
        delta.copy(bot.model.position).sub(position);
        if(weapon.ranged) {
          const scale=bot.profile.scale;
          delta.copy(bot.model.position).sub(origin);delta.y+=.98*scale;
          const along=delta.dot(forward);
          if(along<.12 || along>closest)continue;
          delta.addScaledVector(forward,-along);
          if((delta.x/.38)**2+(delta.y/.83)**2+(delta.z/.38)**2<=scale**2){target=bot;closest=along;}
          continue;
        }
        const distance=Math.hypot(delta.x,delta.z);
        if(distance>closest || Math.abs(delta.y)>1.3)continue;
        delta.y=0;
        if(distance>.01 && delta.normalize().dot(forward)<weapon.aim)continue;
        if(clearPath(position,bot.model.position)){closest=distance;target=bot;}
      }
      if(weapon.ranged) {
        const end=delta.copy(origin).addScaledVector(forward,closest);
        const points=tracerGeometry.attributes.position;
        points.setXYZ(0,origin.x,origin.y,origin.z);
        points.setXYZ(1,end.x,end.y,end.z);
        points.needsUpdate=true;
        tracer.material.color.setHex(weapon.foam?0xe4f5ff:0xffe798);
        tracerTime=.12;tracer.visible=true;tracer.material.opacity=1;
      }
      if(!target)return 'Nepataikė';
      damageBot(target,weapon.damage,'botHit',weapon.ranged?'shot':'melee');
      if(target.hp){target.alert=7;return target.name+' · '+target.hp+' GY';}
      return target.name+' nugalėtas';
    }
  };
}
