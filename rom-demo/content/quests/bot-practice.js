/** SIDE QUEST · counted objective example. Started from the classmate's dialogue. */
export default {
  id:'bot-practice',
  kind:'side',
  title:'Treniruotė',
  summary:'Klasiokas lažinasi, kad nepaguldysi penkių robotų.',
  requires:['first-day'],
  steps:[
    {
      id:'defeat',
      text:'Paguldyk treniruočių robotus',
      on:'bot:defeated', count:5,
      target:{point:{x:12, z:24}, label:'Robotai'},
    },
    {
      id:'report',
      text:'Pasakyk klasiokui',
      on:'npc:talked', match:{npc:'classmate'},
      target:{npc:'classmate'},
    },
  ],
  rewards:{items:[['juice', 2]], message:'Treniruotė įveikta · 2 sulčių pakeliai'},
};
