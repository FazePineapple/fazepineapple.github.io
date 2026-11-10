/**
 * SIDE QUEST · stealth photo (issue #67). The classmate hands Rom a camera;
 * he must photograph both teachers together behind the school after lessons
 * without being noticed (stay further than 6 m and out of their sight).
 */
export default {
  id:'secret-photo',
  kind:'side',
  title:'Paparacas',
  summary:'Sklando gandai, kad fizikos mokytojas ir muzikos mokytoja po pamokų (14–18 val.) slapta susitinka už mokyklos. Nesiartink arčiau nei 6 m ir nestovėk jiems prieš akis.',
  requires:['first-day'],
  steps:[
    {
      id:'photo',
      text:'Slapta nufotografuok abu mokytojus už mokyklos (14–18 val.)',
      on:'photo:taken',
      match:photo => photo.subjects.includes('physicsTeacher') && photo.subjects.includes('musicTeacher') && !photo.noticed.length,
      target:{point:{x:-11.4, z:-25.5}, label:'Už mokyklos'},
    },
    {
      id:'show',
      text:'Parodyk nuotrauką klasiokui',
      on:'npc:talked', match:{npc:'classmate'},
      target:{npc:'classmate'},
    },
  ],
  rewards:{items:[['oz', 2]], message:'Paparacas įveiktas · 2 OZ gėrimai'},
};
