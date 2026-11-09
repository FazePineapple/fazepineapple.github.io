/**
 * Kiemsargio (caretaker) dialogue. See content/dialogue/index.js for the format.
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
      text:'Romai! Tuoj prasidės pamokos, o kieme vėl laksto treniruočių robotai.',
      choices:[{text:'Ko tau reikia?', next:'welcome-2'}],
    },
    'welcome-2': {
      text:'Pasiimk Liniuotę – metalinę liniuotę prie suoliukų – ir parodyk vienam robotui, kas čia šeimininkas. Paskui eik vidun.',
      choices:[{text:'Jau einu.', end:true}],
    },
    busy: {
      text:['Pirma liniuotė, tada robotai, tada mokykla.', 'Durys atsidaro pačios, kai prieini.'],
      choices:[{text:'Supratau.', end:true}],
    },
    thirsty: {
      text:'Uf, šluoti tokį kiemą – ištroškini. Gal surastum man sulčių pakelį?',
      choices:[
        {text:'Žinoma, surasiu.', do:api => api.startQuest('thirsty-caretaker'), end:true},
        {text:'Gal vėliau.', end:true},
      ],
    },
    waiting: {
      text:'Na kaip, radai sulčių?',
      choices:[
        {text:'Prašom.', if:api => api.has('juice'), next:'thanks',
          do:api => { api.take('juice'); api.emit('story:delivered', {item:'juice', npc:'caretaker'}); }},
        {text:'Dar ne.', end:true},
      ],
    },
    thanks: {
      text:'Išgelbėjai! Imk suktuką – ką tik iš valgyklos.',
      choices:[{text:'Ačiū!', end:true}],
    },
    idle: {
      text:['Saugok gėlynus.', 'Tie robotai niekada nepasimoko.', 'Ar jau buvai ant stogo? Tik niekam nesakyk, kad aš pasakiau.'],
      choices:[{text:'Iki.', end:true}],
    },
  },
};
