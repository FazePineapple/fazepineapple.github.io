export const $ = id => document.getElementById(id);

/** Write text only when it changed, so per-frame HUD updates do not touch the DOM. */
export function setText(element, text) {
  if (element.textContent !== text) element.textContent = text;
}

export function setHidden(element, hidden) {
  if (element.hidden !== hidden) element.hidden = hidden;
}

export function setValue(element, value) {
  if (element.value !== value) element.value = value;
}
