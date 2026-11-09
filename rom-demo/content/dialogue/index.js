/**
 * DIALOGUE REGISTRY — import each conversation file and list it here.
 *
 * A dialogue file exports:
 *   entry(api) -> node id     Which node opens the conversation right now.
 *   nodes: {
 *     id: {
 *       speaker?: 'Rom'            Defaults to the character's name.
 *       text: 'line' | ['random', 'lines'] | api => 'computed line'
 *       do?: api => {}             Runs when the node is shown.
 *       choices?: [{
 *         text: 'Player reply',
 *         if?: api => boolean      Hide the choice unless true.
 *         do?: api => {}           Runs when chosen (give items, start quests…).
 *         next?: 'node id'         Continue here, or…
 *         end?: true               …close the conversation.
 *       }]
 *     }
 *   }
 * A node without choices shows a single "Continue" that ends the conversation.
 * `api` is the story API documented in src/story-api.js.
 */
import caretaker from './caretaker.js';
import classmate from './classmate.js';

export const dialogues = {caretaker, classmate};
