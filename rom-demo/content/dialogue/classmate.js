/** Klasioko (classmate) dialogue. */
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
    early: {text:'O, labas, Romai. Ar tu neturėtum būti lauke su kiemsargiu?', choices:[{text:'Tiesa.', end:true}]},
    hello: {
      text:'Romai! Atėjai. Mačiau pro langą – šauniai sutvarkei tą robotą.',
      choices:[{text:'Vieni niekai.', next:'hello-2'}],
    },
    'hello-2': {
      text:'Sveikas sugrįžęs į Gedimino gimnaziją. Kažkas man sako, kad šie metai bus keisti.',
      choices:[{text:'Kaip tai keisti?', next:'hello-3'}],
    },
    'hello-3': {
      text:'Pamatysi. Užsuk, jei norėsi iššūkio.',
      choices:[{text:'Vėliau.', end:true}],
    },
    challenge: {
      text:'Lažinuosi, kad nepaguldysi penkių treniruočių robotų. Įrodysi, kad klystu?',
      choices:[
        {text:'Žiūrėk.', do:api => api.startQuest('bot-practice'), end:true},
        {text:'Ne dabar.', end:true},
      ],
    },
    practising: {text:'Dar skaičiuoju… pirmyn!', choices:[{text:'Gerai.', end:true}]},
    won: {text:'Penki? Rimtai? Gerai jau, laimėjai. Še, imk mano sultis.', choices:[{text:'Malonu turėti reikalų.', end:true}]},
    idle: {text:['Gerai, gerai, tu laimėjai.', 'Girdėjai skambutį?'], choices:[{text:'Iki.', end:true}]},
  },
};
