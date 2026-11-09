/** SIDE QUEST · item hand-in example. Started from the caretaker's dialogue. */
export default {
  id:'thirsty-caretaker',
  kind:'side',
  title:'Troškulys',
  summary:'Kiemsargiui praverstų sulčių pakelis.',
  requires:['first-day'],
  steps:[
    {
      id:'find-juice',
      text:'Surask sulčių pakelį',
      on:'item:picked', match:{id:'juice'},
      when:api => api.has('juice'),
      target:{item:'juice'},
    },
    {
      id:'deliver',
      text:'Atiduok sultis kiemsargiui',
      on:'story:delivered', match:{item:'juice', npc:'caretaker'},
      target:{npc:'caretaker'},
    },
  ],
  rewards:{items:[['cinnamon', 1]], message:'Troškulys įveiktas · Suktukas'},
};
