/** SIDE QUEST · item hand-in example. Started from the caretaker's dialogue. */
export default {
  id:'thirsty-caretaker',
  kind:'side',
  title:'Thirsty Work',
  summary:'The caretaker could use a juice pack.',
  requires:['first-day'],
  steps:[
    {
      id:'find-juice',
      text:'Find a juice pack',
      on:'item:picked', match:{id:'juice'},
      when:api => api.has('juice'),
      target:{item:'juice'},
    },
    {
      id:'deliver',
      text:'Give the juice to the caretaker',
      on:'story:delivered', match:{item:'juice', npc:'caretaker'},
      target:{npc:'caretaker'},
    },
  ],
  rewards:{items:[['cinnamon', 1]], message:'Thirsty Work complete · Suktukas'},
};
