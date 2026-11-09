import {$, setText, setHidden, setValue} from '../core/dom.js';

/**
 * Heads-up display. Every setter only writes to the DOM when the value
 * changed, because these run every frame.
 */
export function createHud(game) {
  const el = {
    health:$('health'), stamina:$('stamina'), bladder:$('bladder'), gas:$('gas'), bowel:$('bowel'), stomach:$('stomach'),
    hpValue:$('hpValue'), spValue:$('spValue'), bladderValue:$('bladderValue'), gasValue:$('gasValue'), bowelValue:$('bowelValue'), stomachValue:$('stomachValue'),
    prompt:$('prompt'), effects:$('effects'), flight:$('flight'), zone:$('zone'), clock:$('clock'),
    equipped:$('equipped'), reticle:$('reticle'), toasts:$('toasts'),
    objective:$('objective'), objectiveKind:$('objectiveKind'), objectiveTitle:$('objectiveTitle'), objectiveText:$('objectiveText'), objectiveNote:$('objectiveNote'),
    waypoint:$('waypoint'), waypointLabel:$('waypointLabel'),
  };
  let message = '', messageTime = 0;
  const pending = [];

  function meter(bar, label, value) {
    const rounded = Math.ceil(value);
    setValue(bar, rounded);
    setText(label, String(rounded));
  }

  function toast(text, kind = 'info') {
    if (!text) return;
    // Hold messages raised on the title screen until play starts.
    if (!game.active) { pending.push([text, kind]); return; }
    const item = document.createElement('div');
    item.className = 'toast ' + kind;
    item.textContent = text;
    el.toasts.append(item);
    while (el.toasts.children.length > 3) el.toasts.firstElementChild.remove();
    setTimeout(() => item.classList.add('leaving'), 3200);
    setTimeout(() => item.remove(), 3700);
  }

  return {
    /** Short action feedback shown in the prompt line. */
    notice(text, seconds = 1.6) { message = text; messageTime = seconds; },
    /** Longer-lived message stacked at the top of the screen (quests, rewards). */
    toast,
    flushToasts() { for (const [text, kind] of pending.splice(0).slice(-3)) toast(text, kind); },
    updateVitals(state) {
      meter(el.health, el.hpValue, state.health);
      meter(el.stamina, el.spValue, state.stamina);
      meter(el.bladder, el.bladderValue, state.meters.bladder);
      meter(el.gas, el.gasValue, state.meters.gas);
      meter(el.bowel, el.bowelValue, state.meters.bowel);
      meter(el.stomach, el.stomachValue, Math.min(100, state.meters.stomach));
    },
    updatePrompt(dt, actionLabel) {
      messageTime = Math.max(0, messageTime - dt);
      const text = messageTime ? message : actionLabel ?? '';
      setHidden(el.prompt, !text);
      setText(el.prompt, text);
    },
    clearPrompt() { messageTime = 0; setHidden(el.prompt, true); },
    setEffects(label) { setText(el.effects, label); setHidden(el.effects, !label); },
    setFlight(on) { setHidden(el.flight, !on); },
    setZone(name) { setText(el.zone, name); },
    setClock(time) { setText(el.clock, time); },
    setEquipped(name) { setText(el.equipped, name); },
    setReticle(visible, x, y) {
      setHidden(el.reticle, !visible);
      if (!visible) return;
      el.reticle.style.left = x + '%';
      el.reticle.style.top = y + '%';
    },
    setObjective(objective) {
      setHidden(el.objective, !objective);
      if (!objective) return;
      setText(el.objectiveKind, objective.kind === 'main' ? 'SIUŽETAS' : 'ŠALUTINĖ UŽDUOTIS');
      setText(el.objectiveTitle, objective.title);
      setText(el.objectiveText, objective.text + (objective.needed > 1 ? ' (' + objective.count + '/' + objective.needed + ')' : ''));
      el.objective.classList.toggle('side', objective.kind !== 'main');
      setText(el.objectiveNote, objective.note ?? '');
      setHidden(el.objectiveNote, !objective.note);
    },
    /** Screen-space waypoint diamond; x/y in percent, clamped to the edges. */
    setWaypoint(point) {
      setHidden(el.waypoint, !point);
      if (!point) return;
      el.waypoint.style.left = point.x + '%';
      el.waypoint.style.top = point.y + '%';
      el.waypoint.classList.toggle('edge', point.edge);
      setText(el.waypointLabel, (point.label ? point.label + ' · ' : '') + Math.round(point.distance) + ' m');
    },
  };
}
