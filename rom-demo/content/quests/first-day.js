/**
 * MAIN STORY · Chapter 1 (tutorial). Teaches talking, picking up, combat and
 * entering the school. Replace or extend freely — see content/quests/index.js
 * for the quest format.
 */
export default {
  id:'first-day',
  kind:'main',
  title:'Pirmoji diena',
  summary:'Kiemsargis turi Romui darbo dar prieš pirmąjį skambutį.',
  autoStart:true,
  steps:[
    {
      id:'talk-caretaker',
      text:'Pasikalbėk su kiemsargiu prie mokyklos durų',
      on:'npc:talked', match:{npc:'caretaker'},
      target:{npc:'caretaker'},
    },
    {
      id:'get-ruler',
      text:'Pasiimk Liniuotę – metalinę liniuotę',
      on:'item:picked', match:{id:'ruler'},
      when:api => api.has('ruler'),
      target:{item:'ruler'},
    },
    {
      id:'defeat-bot',
      text:'Paimk Liniuotę į ranką (1–9) ir paguldyk robotą – mesk ją kaip peilį',
      on:'bot:defeated',
      target:{point:{x:12, z:24}, label:'Robotai'},
    },
    {
      id:'enter-school',
      text:'Įeik į mokyklą',
      on:'zone:entered', match:{area:'school'},
      when:api => api.area() !== 'outdoor',
      target:{zone:'corridor'},
    },
    {
      id:'meet-classmate',
      text:'Surask klasioką klasėje',
      on:'npc:talked', match:{npc:'classmate'},
      target:{npc:'classmate'},
    },
  ],
  rewards:{items:[['bun', 2]], message:'1 skyrius įveiktas · 2 bandelės su dešrele'},
};
