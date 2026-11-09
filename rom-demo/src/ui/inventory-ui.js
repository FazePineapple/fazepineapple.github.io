import {$} from '../core/dom.js';

/**
 * Hotbar and backpack grid. Click a hotbar slot to select it; in the
 * backpack, click an item and then a destination slot to move or stack it.
 */
export function createInventoryUI(game) {
  const {inventory, items, equipment} = game;
  const {hotbar} = equipment;
  const hotbarElement = $('hotbar');
  const groups = [[hotbarElement, 0, 9], [$('backpack'), 9, 36], [$('packHotbar'), 0, 9]];
  const details = $('itemDetails'), useButton = $('packUse'), throwButton = $('packThrow');

  for (const [group, start, end] of groups) {
    for (let index = start; index < end; index++) {
      const button = document.createElement('button');
      button.className = 'slot';
      button.type = 'button';
      button.onclick = () => {
        if (group === hotbarElement) { equipment.select(index); return; }
        if (hotbar.grabbed === null) { if (inventory.slots[index]) hotbar.grabbed = index; }
        else { inventory.move(hotbar.grabbed, index); hotbar.grabbed = null; }
        equipment.refresh();
      };
      group.append(button);
    }
  }

  function render() {
    for (const [group, start, end] of groups) for (let index = start; index < end; index++) {
      const button = group.children[index - start];
      const slot = inventory.slots[index];
      const item = slot && items[slot.id];
      const description = slot ? item.name + ' × ' + slot.count : 'Empty';
      button.setAttribute('aria-label', 'Slot ' + (index + 1) + ': ' + description);
      button.title = item?.description ? description + ' · ' + item.description : description;
      button.classList.toggle('selected', group === hotbarElement ? index === hotbar.selected : index === hotbar.grabbed);
      button.textContent = item ? item.icon ?? '❔' : '';
      if (index < 9) {
        const number = document.createElement('small'); number.textContent = index + 1; button.append(number);
      }
      if (slot && slot.count > 1) {
        const count = document.createElement('b'); count.textContent = slot.count; button.append(count);
      }
    }
    const index = hotbar.grabbed ?? hotbar.selected;
    const slot = inventory.slots[index];
    const item = slot && items[slot.id];
    if (hotbar.grabbed !== null && slot) details.textContent = item.name + ' × ' + slot.count + ' · Choose a destination slot.';
    else if (item?.description) details.textContent = item.description;
    else details.textContent = 'Select an item, then click a slot to move or stack it.';
    throwButton.disabled = !slot || Boolean(item?.questItem);
    useButton.disabled = !slot || (item.weapon ? index >= 9 : !item.use);
    useButton.textContent = item?.weapon ? 'Hold in hand' : (item?.use?.verb ?? 'Use') + ' one';
  }

  game.panels.register('inventory', {
    element:$('inventory'),
    onOpen() { hotbar.grabbed = null; render(); },
    onClose() { hotbar.grabbed = null; render(); $('packButton').blur(); },
    focus:() => $('closePack'),
  });
  $('packButton').onclick = () => game.panels.toggle('inventory');
  $('closePack').onclick = () => game.panels.close();
  throwButton.onclick = () => game.actions.throwItem(hotbar.grabbed ?? hotbar.selected);
  useButton.onclick = () => game.actions.useItem(hotbar.grabbed ?? hotbar.selected);

  return {render};
}
