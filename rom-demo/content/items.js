/**
 * ITEM CATALOGUE — add new items here.
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
 *
 *   use:     {verb, animation?:'drink', message, effects:[...]}
 *            Effects: {stamina:n} {health:n} {meter:'bladder'|'gas'|'bowel', add:n}
 *                     {timer:'dizzy'|'gas'|'bladder', seconds:n}
 *   weapon:  {damage, range, aim, cooldown, ranged?, spray?}
 *            aim = minimum facing dot product (higher = must aim more precisely).
 *   throw:   {damage, speed?, lift?, gravity?, aimed?, pointFirst?}
 */
export const items = {
  jetpack: {
    name:'Jetpack', icon:'🎒', equipment:'jetpack',
    description:'Press J outdoors to equip. Hold jump to thrust.',
    pickupMessage:'Jetpack found · Press J to equip',
  },
  tire: {name:'Tire', icon:'🛞', stack:1, throw:{damage:32}},
  crate: {name:'Cardboard box', icon:'📦', stack:4, throw:{damage:18}},
  cinnamon: {
    name:'Suktukas', icon:'🥐', stack:16,
    use:{verb:'Eat', message:'Suktukas eaten · Find the WC when needed', effects:[{meter:'bowel', add:55}]},
  },
  ruler: {
    name:'Liniuote', icon:'📏', stack:1, description:'Metal ruler',
    weapon:{damage:27, range:2.3, aim:.5, cooldown:.35},
    throw:{damage:45, speed:18, lift:1.25, gravity:8, aimed:true, pointFirst:true},
  },
  extinguisher: {
    name:'Fire extinguisher', icon:'🧯', stack:1,
    weapon:{damage:3, ranged:true, spray:true, range:6, aim:.9, cooldown:.24},
  },
  dagger: {
    name:'Sruguputu', icon:'🗡️', stack:1, description:'Japonijos mero durklas',
    weapon:{damage:100, range:2.7, aim:.42, cooldown:.55},
  },
  blaster: {
    name:'Training blaster', icon:'🔫', stack:1,
    weapon:{damage:35, ranged:true, range:16, aim:.95, cooldown:.65},
  },
  juice: {
    name:'Small juice pack', icon:'🧃', stack:64,
    use:{verb:'Drink', animation:'drink', message:'Juice finished · Find a restroom when the urge hits',
      effects:[{timer:'bladder', seconds:50}, {meter:'bladder', add:38}]},
  },
  bun: {
    name:'Sausage bun', icon:'🌭', stack:64,
    use:{verb:'Eat', message:'Sausage bun eaten · +40 stamina',
      effects:[{stamina:40}, {timer:'gas', seconds:36}, {meter:'gas', add:54}]},
  },
  beer: {
    name:'Beer bottle', icon:'🍺', stack:64,
    use:{verb:'Drink', animation:'drink', message:'Beer finished · Feeling dizzy',
      effects:[{timer:'dizzy', seconds:24}, {meter:'bladder', add:26}]},
  },
};

/** Default throw behaviour for items without their own `throw` block. */
export const defaultThrow = {damage:8, speed:8.5, lift:3.2, gravity:14};
