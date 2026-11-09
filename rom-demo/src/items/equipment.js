/**
 * What Rom is holding: the selected hotbar slot drives the model in his hand,
 * the first-person view model and the "equipped" HUD label.
 */
export function createEquipment(game) {
  const {rom, inventory, items, itemModels} = game;
  const hotbar = {selected:0, grabbed:null};
  let heldId = null;

  function refresh() {
    const selectedId = inventory.slots[hotbar.selected]?.id ?? null;
    if (selectedId !== heldId) {
      heldId = selectedId;
      rom.held.clear();
      if (heldId) itemModels.build(heldId, rom.held);
    }
    const viewId = game.state.drinkMotion?.id ?? heldId;
    if (rom.firstHeld.userData.item !== viewId) {
      rom.firstHeld.userData.item = viewId;
      rom.firstHeld.clear();
      if (viewId) itemModels.build(viewId, rom.firstHeld);
    }
    rom.held.visible = !game.state.drinkMotion;
    game.hud.setEquipped(heldId ? items[heldId].name : 'Fists');
    game.inventoryUI?.render();
  }

  return {
    hotbar,
    get heldId() { return heldId; },
    get held() { return heldId ? items[heldId] : null; },
    select(index) {
      if (index < 0 || index > 8) return;
      hotbar.selected = index;
      refresh();
    },
    refresh,
  };
}
