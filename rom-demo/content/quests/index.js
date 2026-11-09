/**
 * QUEST REGISTRY — import each quest file and add it to the list.
 * Main story chapters and side quests use the same format:
 *
 *   id         Stable id (stored in saves — never rename after shipping).
 *   kind       'main' or 'side'.
 *   title, summary
 *   requires   Quest ids that must be complete before this one is available.
 *   available  Optional api => boolean extra condition.
 *   autoStart  true = starts as soon as it is available. Otherwise start it
 *              from dialogue or a step hook with api.startQuest(id).
 *   onStart / onComplete   Optional api => {} hooks.
 *   steps: [{
 *     id, text
 *     on        Event type that progresses the step (see docs/CONTENT.md),
 *               e.g. 'npc:talked', 'item:picked', 'item:used', 'bot:defeated',
 *               'zone:entered', 'player:emote', 'school:bell', or any custom
 *               event you emit with api.emit('story:…', payload).
 *     match     {key: value} the event payload must contain, or
 *               (payload, api) => boolean.
 *     count     How many matching events are needed (default 1).
 *     when      api => boolean. Completes the step as soon as it is true
 *               (checked on entry and every half second), e.g. "already has the item".
 *     target    Waypoint: {npc} | {item} | {zone} | {point:{x,z}|{floor,x,z}, label}
 *               or api => one of those.
 *     onEnter / onComplete   Optional api => {} hooks.
 *   }]
 *   rewards    {items:[[id, count]], flags:['flag'], message:'Shown on completion'}
 */
import firstDay from './first-day.js';
import thirstyCaretaker from './thirsty-caretaker.js';
import botPractice from './bot-practice.js';

export const quests = [firstDay, thirstyCaretaker, botPractice];
