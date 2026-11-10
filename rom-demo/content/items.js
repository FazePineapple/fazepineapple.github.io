/**
 * ITEM CATALOGUE — add new items here. Player-facing text is Lithuanian.
 *
 * Every key is an item id used by spawns, quests, dialogue and the save file,
 * so never rename an id that has shipped. Fields:
 *
 *   name         Display name.
 *   icon         Emoji shown in inventory slots.
 *   description  Optional tooltip / inventory detail line.
 *   stack        Max per inventory slot (default 1).
 *   model        3D model id from src/items/item-models.js (default: the item id,
 *                falling back to a generic crate when no model exists yet).
 *   questItem    true = cannot be thrown away.
 *   equipment    Picked up into an equipment slot instead of the inventory
 *                (currently 'jetpack').
 *   pickupMessage  Optional custom message when picked up.
 *   sit          {height} — furniture: E sits on it when it stands in the world.
 *
 *   use:     {verb, animation?:'drink'|'eat', action?:'sit', message, effects:[...]}
 *            Effects: {stamina:n} {health:n} {meter:'bladder'|'gas'|'bowel'|'stomach', add:n}
 *                     {timer:'dizzy'|'gas'|'bladder', seconds:n}
 *            Eating past a full stomach (100) makes Rom vomit.
 *   weapon:  {damage, range, aim, cooldown, ranged?, spray?, projectile?, animation?}
 *            animation: 'stab' | 'punch' | 'swing' | 'recoil' (default by type).
 *            aim = minimum facing dot product (higher = must aim more precisely).
 *            projectile: {speed, gravity, size, color, stun?, homing?, life?, model?:'plane'}
 *            fires a visible shot; stun freezes the bot for n seconds, homing
 *            (turn rate) steers toward the nearest bot. auto: fires while held.
 *   camera   true — left click takes a photo ('photo:taken' event).
 *   explosive {fuse, radius, damage} — with use.action:'plant' it is put down
 *            in front of Rom, blinks and beeps, then explodes after `fuse` s,
 *            hurting bots and Rom by distance (full damage at the centre).
 *   throw:   {damage, speed?, lift?, gravity?, pointFirst?, stink?}
 *            Left click throws items that have `throw` but no `weapon` or `use`.
 */
export const items = {
  jetpack: {
    name:'Reaktyvinė kuprinė', icon:'🚀', equipment:'jetpack',
    description:'Lauke spausk J, kad užsidėtum. Laikyk šuolio klavišą, kad kiltum.',
    pickupMessage:'Rasta reaktyvinė kuprinė · Spausk J, kad užsidėtum',
  },
  tire: {name:'Padanga', icon:'🛞', stack:1, throw:{damage:32, speed:9}},
  crate: {name:'Kartoninė dėžė', icon:'📦', stack:4, throw:{damage:18}},
  cinnamon: {
    name:'Suktukas', icon:'🥐', stack:16,
    use:{verb:'Valgyti', animation:'eat', message:'Suktukas suvalgytas · +15 gyvybės · Prireiks tualeto',
      effects:[{health:15}, {meter:'bowel', add:55}, {meter:'stomach', add:30}]},
  },
  ruler: {
    name:'Liniuotė', icon:'📏', stack:1,
    description:'Metalinė liniuotė. Kairysis pelės klavišas arba Q – mesti kaip peilį.',
    throw:{damage:45, speed:20, lift:.6, gravity:5, pointFirst:true},
  },
  extinguisher: {
    name:'Gesintuvas', icon:'🧯', stack:1,
    description:'Laikyk kairįjį pelės klavišą, kad purkštum putas.',
    weapon:{damage:3, ranged:true, spray:true, range:6, aim:.9, cooldown:.24},
  },
  dagger: {
    name:'Sruguputu', icon:'🗡️', stack:1, description:'Japonijos mero durklas',
    weapon:{damage:100, range:2.7, aim:.42, cooldown:.55, animation:'stab'},
  },
  blaster: {
    name:'Treniruočių blasteris', icon:'🔫', stack:1,
    weapon:{damage:35, ranged:true, range:16, aim:.95, cooldown:.65},
  },
  straw: {
    name:'Šiaudelis', icon:'🥤', stack:1,
    description:'Spjauk popieriaus kamuoliukais į priešus.',
    weapon:{damage:12, cooldown:.45, projectile:{speed:26, gravity:3, size:.06, color:0xf4f1e6}},
  },
  chair: {
    name:'Kėdė', icon:'🪑', stack:1, sit:{height:.47},
    description:'Pastatyk ir atsisėsk arba mesk į priešą.',
    use:{verb:'Pastatyti', action:'sit'},
    throw:{damage:30, speed:9, lift:2.4},
  },
  c4: {
    name:'C4 sprogmuo', icon:'🧨', stack:4,
    description:'Padėk (kairysis pelės klavišas) ir bėk – po 10 s sprogsta. Kuo arčiau, tuo skaudžiau.',
    use:{verb:'Padėti', action:'plant'},
    explosive:{fuse:10, radius:7, damage:140},
    throw:{damage:10, speed:10},
  },
  poop: {
    name:'Kakutis', icon:'💩', stack:16,
    description:'Smirdi. Galima mesti į priešus.',
    throw:{damage:15, stink:true},
  },
  // School supplies turned into gadgets (issue #66).
  rubberband: {
    name:'Gumytė', icon:'➰', stack:1,
    description:'Laikyk kairįjį pelės klavišą – greitai šaudo guminukais.',
    weapon:{damage:7, cooldown:.17, auto:true, projectile:{speed:34, gravity:2, size:.03, color:0xd8a03a}},
  },
  glue: {
    name:'Klijų pieštukas', icon:'🧴', stack:1,
    description:'Šauna klijų gumulą – robotas prilimpa ir 3 s negali pajudėti.',
    weapon:{damage:2, cooldown:.9, projectile:{speed:15, gravity:6, size:.09, color:0xf2f0d8, stun:3}},
  },
  notebook: {
    name:'Sąsiuvinis', icon:'📓', stack:1,
    description:'Leidžia popierinius lėktuvėlius, kurie patys nuskrenda iki roboto.',
    weapon:{damage:20, cooldown:1.1, projectile:{speed:10, gravity:0, homing:2.6, life:4, model:'plane', color:0xf7f7f2}},
  },
  scissors: {
    name:'Žirklės', icon:'✂️', stack:1, description:'Greitas dūris iš arti.',
    weapon:{damage:24, range:2.2, aim:.5, cooldown:.32, animation:'stab'},
  },
  compass: {
    name:'Skriestuvas', icon:'📐', stack:1, description:'Mesk – smailus galas skrenda pirmas.',
    throw:{damage:38, speed:18, lift:.8, gravity:6, pointFirst:true},
  },
  chalk: {
    name:'Kreida', icon:'🖍️', stack:8, description:'Mesk – kreidos dulkės priverčia robotus kosėti.',
    throw:{damage:6, speed:14, lift:1.5, stink:true},
  },
  camera: {
    name:'Fotoaparatas', icon:'📷', stack:1, questItem:true,
    description:'Kairysis pelės klavišas – fotografuoti. Nuotraukos – žurnale (L).',
    camera:true,
  },
  oz: {
    name:'Energetinis gėrimas OZ', icon:'⚡', stack:16,
    use:{verb:'Gerti', animation:'drink', message:'OZ! Energijos daug… bet labai norisi į tualetą',
      effects:[{stamina:100}, {timer:'energy', seconds:25}, {meter:'bladder', add:100}, {peeIn:5}, {meter:'stomach', add:10}]},
  },
  juice: {
    name:'Sulčių pakelis', icon:'🧃', stack:64,
    use:{verb:'Gerti', animation:'drink', message:'Sultys išgertos · +5 gyvybės · Netrukus prireiks tualeto',
      effects:[{health:5}, {timer:'bladder', seconds:50}, {meter:'bladder', add:38}, {meter:'stomach', add:12}]},
  },
  muffin: {
    name:'Keksiukas', icon:'🧁', stack:16,
    description:'Šokoladinis keksiukas. Pasotina ir prideda jėgų.',
    use:{verb:'Valgyti', animation:'eat', message:'Keksiukas suvalgytas · +20 gyvybės · +20 ištvermės',
      effects:[{health:20}, {stamina:20}, {meter:'bowel', add:15}, {meter:'stomach', add:25}]},
  },
  bun: {
    name:'Bandelė su dešrele', icon:'🌭', stack:64,
    use:{verb:'Valgyti', animation:'eat', message:'Bandelė suvalgyta · +25 gyvybės · +40 ištvermės',
      effects:[{health:25}, {stamina:40}, {timer:'gas', seconds:36}, {meter:'gas', add:54},
        {meter:'bowel', add:20}, {meter:'stomach', add:35}]},
  },
  beer: {
    name:'Alaus butelis', icon:'🍺', stack:64,
    use:{verb:'Gerti', animation:'drink', message:'Alus išgertas · Svaigsta galva',
      effects:[{timer:'dizzy', seconds:24}, {meter:'bladder', add:26}, {meter:'stomach', add:15}]},
  },
};

/** Default throw for items without their own `throw` block: aimed where you look. */
export const defaultThrow = {damage:8, speed:12, lift:2, gravity:12};
