const profiles=[
  {name:'Adult bot',scale:1},
  {name:'Toddler bot',scale:.68},
  {name:'Baby bot',scale:.47},
  {name:'Teacher bot',scale:1.17},
];

export function createBotAppearance(T, model, box, oval, random=Math.random) {
  const hair=new T.Group();
  const glasses=new T.Group();
  const hat=new T.Group();
  const badge=new T.Group();
  model.add(hair,glasses,hat,badge);

  for(let i=0;i<5;i++) {
    const strand=oval(hair,0x2b302f,(i-2)*.075,1.76+(.02*(2-Math.abs(i-2))),.025,.067,.08,.17);
    strand.rotation.z=(i-2)*.17;
  }
  for(const x of [-.105,.105]) {
    box(x,1.6,.228,.173,.113,.038,0xd1bd86,glasses);
    box(x,1.6,.251,.133,.074,.016,0x364d58,glasses);
    box(x*1.64,1.6,.14,.027,.027,.18,0xd1bd86,glasses);
  }
  box(0,1.60,.236,.05,.026,.022,0xd1bd86,glasses);

  const cap=oval(hat,0x315d67,0,1.778,.006,.275,.121,.237);
  cap.rotation.x=-.08;
  oval(hat,0x253e49,0,1.746,.19,.213,.026,.145);

  box(0,1.17,.204,.036,.27,.022,0xb7a76b,badge);
  box(0,1.013,.214,.131,.117,.022,0xe4deca,badge);
  box(0,1.026,.227,.072,.018,.008,0x52665e,badge);

  return {
    roll() {
      const profile=profiles[Math.floor(random()*profiles.length)];
      model.scale.setScalar(profile.scale);
      hat.visible=random()<.32;
      hair.visible=!hat.visible && random()<.55;
      glasses.visible=random()<(profile.name==='Teacher bot'?.72:.34);
      badge.visible=profile.name==='Teacher bot';
      return profile;
    },
  };
}
