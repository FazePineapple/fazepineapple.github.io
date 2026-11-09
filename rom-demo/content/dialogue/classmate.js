export default {
  entry(api) {
    if (api.questStep('first-day') === 'meet-classmate') return 'hello';
    if (!api.isQuestDone('first-day')) return 'early';
    if (api.questStep('bot-practice') === 'report') return 'won';
    if (api.isQuestActive('bot-practice')) return 'practising';
    if (!api.isQuestDone('bot-practice')) return 'challenge';
    return 'idle';
  },
  nodes: {
    early: {text:'Oh, hey Rom. Shouldn\'t you be outside with the caretaker?', choices:[{text:'Right.', end:true}]},
    hello: {
      text:'Rom! You made it. I saw you through the window — nice work on that bot.',
      choices:[{text:'Easy.', next:'hello-2'}],
    },
    'hello-2': {
      text:'Welcome back to Gedimino gimnazija. Something tells me this year is going to be weird.',
      choices:[{text:'Weird how?', next:'hello-3'}],
    },
    'hello-3': {
      text:'You\'ll see. Come find me if you want a challenge.',
      choices:[{text:'Later.', end:true}],
    },
    challenge: {
      text:'Bet you can\'t knock out five practice bots. Want to prove me wrong?',
      choices:[
        {text:'Watch me.', do:api => api.startQuest('bot-practice'), end:true},
        {text:'Not now.', end:true},
      ],
    },
    practising: {text:'Still counting… go on!', choices:[{text:'Fine.', end:true}]},
    won: {text:'Five? Seriously? Fine, you win. Here, have my juice.', choices:[{text:'Pleasure doing business.', end:true}]},
    idle: {text:['Okay, okay, you win.', 'Did you hear the bell?'], choices:[{text:'Bye.', end:true}]},
  },
};
