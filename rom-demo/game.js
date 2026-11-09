// Bundle entry point. The game itself lives in src/ (systems) and content/
// (items, characters, dialogue, quests). See docs/ARCHITECTURE.md.
import {boot} from './src/main.js';

try {
  boot();
} catch (error) {
  console.error(error);
  document.getElementById('error').hidden = false;
  document.getElementById('start').disabled = true;
}
