/**
 * Dialogue for the caretaker. See content/dialogue/index.js for the format.
 * `entry` picks the opening node from the current story state.
 */
export default {
  entry(api) {
    if (api.questStep('first-day') === 'talk-caretaker') return 'welcome';
    if (api.isQuestActive('first-day')) return 'busy';
    if (api.isQuestActive('thirsty-caretaker')) return 'waiting';
    if (!api.isQuestDone('thirsty-caretaker')) return 'thirsty';
    return 'idle';
  },
  nodes: {
    welcome: {
      text:'Rom! Lessons start soon, and the practice bots are loose in the courtyard again.',
      choices:[{text:'What do you need?', next:'welcome-2'}],
    },
    'welcome-2': {
      text:'Grab Liniuote, the metal ruler by the benches, and show one of those bots who is boss. Then get inside.',
      choices:[{text:'On it.', end:true}],
    },
    busy: {
      text:['Ruler first, bots second, school third.', 'The door opens when you walk up to it.'],
      choices:[{text:'Got it.', end:true}],
    },
    thirsty: {
      text:'Phew, sweeping this courtyard is thirsty work. Could you find me a juice pack?',
      choices:[
        {text:'Sure, I will find one.', do:api => api.startQuest('thirsty-caretaker'), end:true},
        {text:'Maybe later.', end:true},
      ],
    },
    waiting: {
      text:'Any luck with that juice?',
      choices:[
        {text:'Here you go.', if:api => api.has('juice'), next:'thanks',
          do:api => { api.take('juice'); api.emit('story:delivered', {item:'juice', npc:'caretaker'}); }},
        {text:'Not yet.', end:true},
      ],
    },
    thanks: {
      text:'Lifesaver! Take this suktukas — fresh from the canteen.',
      choices:[{text:'Thanks!', end:true}],
    },
    idle: {
      text:['Mind the flower beds.', 'Those bots never learn.', 'Have you tried the roof? Do not tell anyone I said that.'],
      choices:[{text:'See you.', end:true}],
    },
  },
};
