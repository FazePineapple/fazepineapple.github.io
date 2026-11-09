/**
 * MAIN STORY · Chapter 1 (tutorial). Teaches talking, picking up, combat and
 * entering the school. Replace or extend freely — see content/quests/index.js
 * for the quest format.
 */
export default {
  id:'first-day',
  kind:'main',
  title:'First Day Back',
  summary:'The caretaker has a job for Rom before the first bell.',
  autoStart:true,
  steps:[
    {
      id:'talk-caretaker',
      text:'Talk to the caretaker by the school door',
      on:'npc:talked', match:{npc:'caretaker'},
      target:{npc:'caretaker'},
    },
    {
      id:'get-ruler',
      text:'Pick up Liniuote, the metal ruler',
      on:'item:picked', match:{id:'ruler'},
      when:api => api.has('ruler'),
      target:{item:'ruler'},
    },
    {
      id:'defeat-bot',
      text:'Equip Liniuote (1–9) and knock out a practice bot',
      on:'bot:defeated',
      target:{point:{x:12, z:24}, label:'Practice bots'},
    },
    {
      id:'enter-school',
      text:'Go inside the school',
      on:'zone:entered', match:{area:'school'},
      when:api => api.area() !== 'outdoor',
      target:{zone:'corridor'},
    },
    {
      id:'meet-classmate',
      text:'Find your classmate in the classroom',
      on:'npc:talked', match:{npc:'classmate'},
      target:{npc:'classmate'},
    },
  ],
  rewards:{items:[['bun', 2]], message:'Chapter 1 complete · 2 sausage buns'},
};
