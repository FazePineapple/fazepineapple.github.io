import {$} from '../core/dom.js';

/** Quest journal (L): main story and side quests, click one to track it. */
export function createJournalUI(game) {
  const element = $('questLog'), content = $('questLogContent');

  function render() {
    const quests = game.quests.list().filter(quest => quest.status === 'active' || quest.status === 'done');
    const sections = [['main', 'Siužetas'], ['side', 'Šalutinės užduotys']];
    content.replaceChildren();
    for (const [kind, title] of sections) {
      const entries = quests.filter(quest => quest.kind === kind)
        .sort((a, b) => (a.status === 'done') - (b.status === 'done'));
      const heading = document.createElement('h3');
      heading.textContent = title;
      content.append(heading);
      if (!entries.length) {
        const empty = document.createElement('p');
        empty.className = 'quiet';
        empty.textContent = kind === 'main' ? 'Kol kas nieko.' : 'Kalbėkis su žmonėmis mokykloje – jie turi užduočių.';
        content.append(empty);
        continue;
      }
      for (const quest of entries) {
        const card = document.createElement('button');
        card.type = 'button';
        card.className = 'quest-card' + (quest.tracked ? ' tracked' : '') + (quest.status === 'done' ? ' done' : '');
        card.disabled = quest.status === 'done';
        const name = document.createElement('strong');
        name.textContent = quest.title + (quest.status === 'done' ? ' · Įvykdyta' : quest.tracked ? ' · Sekama' : '');
        const summary = document.createElement('span');
        summary.textContent = quest.summary;
        const steps = document.createElement('ol');
        for (const step of quest.steps) {
          if (!step.done && !step.current) continue;
          const row = document.createElement('li');
          row.className = step.done ? 'done' : 'current';
          row.textContent = step.text + (step.current && step.needed > 1 ? ' (' + step.count + '/' + step.needed + ')' : '');
          steps.append(row);
        }
        card.append(name, summary, steps);
        card.onclick = () => { game.quests.track(quest.id); render(); };
        content.append(card);
      }
    }
    const photos = game.photos.list();
    if (photos.length) {
      const heading = document.createElement('h3');
      heading.textContent = 'Nuotraukos';
      const grid = document.createElement('div');
      grid.className = 'photo-grid';
      for (const photo of photos) {
        const figure = document.createElement('figure');
        const image = document.createElement('img');
        image.src = photo.image; image.alt = photo.subjects.join(', ') || photo.zone;
        const caption = document.createElement('figcaption');
        caption.textContent = photo.time + (photo.subjects.length ? ' · ' + photo.subjects.join(', ') : photo.zone ? ' · ' + photo.zone : '');
        figure.append(image, caption);
        grid.append(figure);
      }
      content.append(heading, grid);
    }
  }

  game.panels.register('journal', {element, onOpen:render, focus:() => $('closeQuestLog')});
  $('closeQuestLog').onclick = () => game.panels.close();
  $('journalButton').onclick = () => game.panels.toggle('journal');
  return {render};
}
