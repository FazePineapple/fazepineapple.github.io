import {$} from '../core/dom.js';
import {dialogues} from '../../content/dialogue/index.js';

/**
 * Conversation box. Runs the node graph from content/dialogue. Choices can
 * be clicked or picked with 1–9; Space/Enter/E picks a lone choice.
 */
export function createDialogueUI(game) {
  const element = $('dialogue'), speaker = $('dialogueSpeaker'), line = $('dialogueText'), list = $('dialogueChoices');
  const api = game.story.api;
  let npc = null, script = null, choices = [], openedAt = 0;

  const pick = value => Array.isArray(value) ? value[Math.floor(Math.random() * value.length)] : value;

  function show(nodeId) {
    const node = script.nodes[nodeId];
    if (!node) { finish(); return; }
    node.do?.(api);
    speaker.textContent = node.speaker ?? npc.def.name;
    line.textContent = pick(typeof node.text === 'function' ? node.text(api) : node.text) ?? '';
    choices = (node.choices ?? [{text:'Continue', end:true}]).filter(choice => !choice.if || choice.if(api));
    if (!choices.length) choices = [{text:'Goodbye', end:true}];
    list.replaceChildren(...choices.map((choice, index) => {
      const button = document.createElement('button');
      button.type = 'button';
      button.innerHTML = '<kbd></kbd> ';
      button.firstChild.textContent = String(index + 1);
      button.append(choice.text);
      button.onclick = () => choose(index);
      return button;
    }));
    list.firstElementChild?.focus();
  }

  function choose(index) {
    const choice = choices[index];
    if (!choice) return;
    choice.do?.(api);
    game.bus.emit('dialogue:choice', {npc:npc.id, text:choice.text});
    if (choice.next && !choice.end) show(choice.next);
    else finish();
  }

  function finish() {
    const id = npc?.id;
    game.panels.close();
    if (id) game.bus.emit('dialogue:ended', {npc:id});
  }

  game.panels.register('dialogue', {
    element,
    onClose() { npc = null; script = null; },
    focus:() => list.firstElementChild,
  });

  window.addEventListener('keydown', event => {
    if (!game.panels.isOpen('dialogue') || event.timeStamp <= openedAt || event.repeat) return;
    const digit = /^Digit([1-9])$/.exec(event.code);
    if (digit) { event.preventDefault(); choose(Number(digit[1]) - 1); return; }
    if (['Space', 'Enter', 'KeyE'].includes(event.code) && choices.length === 1) { event.preventDefault(); choose(0); }
  });

  return {
    open(target) {
      script = dialogues[target.def.dialogue];
      if (!script) return;
      npc = target;
      openedAt = performance.now();
      const entry = script.entry(api);
      game.panels.open('dialogue');
      show(entry);
      game.bus.emit('npc:talked', {npc:npc.id});
    },
  };
}
