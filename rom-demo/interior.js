export function buildInterior(T, scene, box, surface, texture) {
  const origin=300;
  const walls=[];
  const tile=surface('#b8a18b',['#b09c85','#baa58e','#c0ac94'],5,true);
  const wood=surface('#b88755',['#ad7d4e','#ba8d5b','#bf935d'],6,true);
  const wall=(x,z,w,d)=>{
    walls.push({x:origin+x,z,w,d});
    box(origin+x,1.8,z,w,3.6,d,0xe5d6aa).castShadow=false;
    box(origin+x,.42,z,w+.025,.84,d+.025,0xa98d6f).castShadow=false;
  };
  box(origin,-.12,0,28,.24,28,tile);
  box(origin,3.68,0,28,.15,28,0xe9e4d4).castShadow=false;
  wall(0,-14,28,.25);wall(0,14,28,.25);
  wall(-14,0,.25,28);wall(14,0,.25,28);
  // Open doorways from the corridor into the classroom, hall and restroom.
  for(const [x,z,w,d] of [[-5,-9,.2,10],[-5,3,.2,10],[-5,12,.2,4],[5,-10,.2,8],[5,1,.2,9],[5,12,.2,4],[9.5,5.5,9,.2]])wall(x,z,w,d);
  box(origin-9.5,.01,-5,8.7,.02,17.7,wood);
  box(origin+9.5,.01,-4.3,8.7,.02,19,wood);
  for(const [x,z] of [[0,8],[0,0],[0,-9],[-9,-7],[9,-5],[9,9],[-9,7]]) {
    const light=new T.PointLight(0xffedcc,30,12);
    light.position.set(origin+x,3.27,z);scene.add(light);
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
  sign('IŠĖJIMAS',0,2.65,13.85,3.5,.7,Math.PI);
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
  return {origin,walls,exit:{x:origin,z:12.5},restroom:{x:origin+9,z:12}};
}
