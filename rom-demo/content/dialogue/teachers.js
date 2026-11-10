/** Shared lines for the two teachers behind the school (secret-photo quest). */
export default {
  entry:() => 'caught',
  nodes: {
    caught: {
      text:['Romai?! Ką tu čia veiki? Pamokos jau baigėsi – eik namo!', 'Mes… aptariame mokyklos koncertą. Nieko daugiau.'],
      choices:[{text:'Aišku, aišku…', end:true}],
    },
  },
};
