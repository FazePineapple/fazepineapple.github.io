/** SIDE QUEST · counted objective example. Started from the classmate's dialogue. */
export default {
  id:'bot-practice',
  kind:'side',
  title:'Practice Makes Perfect',
  summary:'Your classmate bets you cannot knock out five practice bots.',
  requires:['first-day'],
  steps:[
    {
      id:'defeat',
      text:'Knock out practice bots',
      on:'bot:defeated', count:5,
      target:{point:{x:12, z:24}, label:'Practice bots'},
    },
    {
      id:'report',
      text:'Tell your classmate',
      on:'npc:talked', match:{npc:'classmate'},
      target:{npc:'classmate'},
    },
  ],
  rewards:{items:[['juice', 2]], message:'Practice Makes Perfect complete · 2 juice packs'},
};
