const actions={
  KeyW:'Pirmyn', KeyA:'Į kairę', KeyS:'Atgal', KeyD:'Į dešinę',
  ShiftLeft:'Bėgti', ControlLeft:'Pritūpti', Space:'Šokti', KeyE:'Sąveika', KeyF:'Naudoti',
  KeyX:'Veiksmas', KeyQ:'Mesti', KeyI:'Kuprinė', KeyB:'Emocijos', KeyL:'Užduočių žurnalas',
  KeyV:'Kameros vaizdas', KeyN:'Diena / naktis', KeyC:'Lipti', KeyJ:'Reaktyvinė kuprinė', KeyR:'Grįžti į kiemą', KeyH:'Valdymo pagalba',
};
const storageKey='romgame.settings.v1';
const defaults={volume:1,muted:false,sensitivity:1,invert:false,quality:'auto',bindings:{}};
const qualities=['auto','high','performance'];

function loadSettings() {
  let saved;
  try { saved=JSON.parse(localStorage.getItem(storageKey)); } catch { /* Storage can be unavailable for file URLs. */ }
  const settings={...defaults,bindings:{}};
  if(!saved)return settings;
  if(Number.isFinite(saved.volume))settings.volume=Math.min(1,Math.max(0,saved.volume));
  if(Number.isFinite(saved.sensitivity))settings.sensitivity=Math.min(2.5,Math.max(.25,saved.sensitivity));
  settings.muted=saved.muted===true;
  settings.invert=saved.invert===true;
  if(qualities.includes(saved.quality))settings.quality=saved.quality;
  const assigned=new Set();
  for(const action of Object.keys(actions)) {
    const candidate=saved.bindings?.[action]??action;
    if(!validKey(candidate)||assigned.has(candidate)) {
      settings.bindings={};
      break;
    }
    assigned.add(candidate);
    settings.bindings[action]=candidate;
  }
  return settings;
}

function validKey(code) {
  return /^(Key[A-Z]|Space|ShiftLeft|ControlLeft|Backquote|Minus|Equal|BracketLeft|BracketRight|Semicolon|Quote|Comma|Period|Slash)$/.test(code);
}

function keyLabel(code) {
  const punctuation={
    Backquote:'`', Minus:'-', Equal:'=', BracketLeft:'[', BracketRight:']',
    Semicolon:';', Quote:"'", Comma:',', Period:'.', Slash:'/',
  };
  return punctuation[code]??code.replace(/^Key/,'').replace(/^ShiftLeft$/,'Kairysis Shift').replace(/^ControlLeft$/,'Kairysis Ctrl').replace(/^Space$/,'Tarpas');
}

export function createSettings(document,audio) {
  const byId=id=>document.getElementById(id);
  const panel=byId('settingsPanel');
  const openButton=byId('settingsButton');
  const message=byId('bindingMessage');
  const volume=byId('masterVolume'), mute=byId('settingsMute');
  const sensitivity=byId('lookSensitivity'), invert=byId('invertLook');
  const quality=byId('graphicsQuality');
  const rows=byId('bindings');
  let values=loadSettings(), pending=null;
  const qualityListeners=[];
  let appliedQuality=null;
  const notifyQuality=()=>{
    if(appliedQuality===values.quality)return;
    appliedQuality=values.quality;
    for(const listener of qualityListeners)listener(values.quality);
  };
  const buttons=new Map();
  const binding=action=>values.bindings[action]??action;
  const key=physical=>Object.keys(actions).find(action=>binding(action)===physical)??(Object.hasOwn(actions,physical)?'':physical);

  for(const [action,label] of Object.entries(actions)) {
    const button=document.createElement('button');
    button.type='button';
    button.onclick=()=>{pending=action;render();};
    rows.append(button);
    buttons.set(action,{button,label});
  }

  function render() {
    for(const [action,{button,label}] of buttons) {
      button.textContent=label+' · '+(pending===action?'Spausk klavišą':keyLabel(binding(action)));
      button.setAttribute('aria-pressed',String(pending===action));
    }
    for(const label of document.querySelectorAll('[data-binding]')) {
      const keys=label.dataset.binding.split(' ').map(action=>keyLabel(binding(action)));
      label.textContent=(label.dataset.bindingPrefix??'')+keys.join(' / ');
    }
    volume.value=String(Math.round(values.volume*100));
    mute.checked=values.muted;
    sensitivity.value=String(values.sensitivity);
    invert.checked=values.invert;
    quality.value=values.quality;
    notifyQuality();
    audio.setVolume(values.volume);
    audio.setMuted(values.muted);
    byId('soundButton').textContent=values.muted?'Garsas išjungtas':'Garsas įjungtas';
  }
  function save() {
    try { localStorage.setItem(storageKey,JSON.stringify(values)); } catch { /* Keep current settings for this session. */ }
    render();
  }
  function show(open) {
    pending=null;
    message.textContent='Pasirink veiksmą ir paspausk naują klavišą. Jei klavišas užimtas, veiksmai susikeis vietomis.';
    panel.hidden=!open;
    byId('menu').inert=open;
    (open?byId('closeSettings'):openButton).focus();
    render();
  }

  openButton.onclick=()=>show(true);
  byId('closeSettings').onclick=()=>show(false);
  byId('resetSettings').onclick=()=>{
    values={...defaults,bindings:{}};
    pending=null;
    message.textContent='Atkurti numatytieji valdymo ir garso nustatymai.';
    save();
  };
  volume.oninput=()=>{values.volume=Number(volume.value)/100;save();};
  mute.onchange=()=>{values.muted=mute.checked;save();};
  sensitivity.oninput=()=>{values.sensitivity=Number(sensitivity.value);save();};
  invert.onchange=()=>{values.invert=invert.checked;save();};
  quality.onchange=()=>{values.quality=qualities.includes(quality.value)?quality.value:'auto';save();};
  document.addEventListener('keydown',event=>{
    if(panel.hidden)return;
    if(event.code==='Escape') {
      event.preventDefault();event.stopPropagation();
      if(pending){pending=null;render();}else show(false);
      return;
    }
    if(!pending || event.code==='Tab' || (event.ctrlKey&&event.code!=='ControlLeft') || event.metaKey || event.altKey)return;
    event.preventDefault();event.stopPropagation();
    if(event.repeat)return;
    if(!validKey(event.code)) {
      message.textContent='Rinkis raidę, skyrybos ženklą, tarpą, kairįjį Shift arba kairįjį Ctrl.';
      return;
    }
    const previous=binding(pending);
    const occupied=Object.keys(actions).find(action=>binding(action)===event.code);
    if(occupied)values.bindings[occupied]=previous;
    values.bindings[pending]=event.code;
    message.textContent=actions[pending]+': dabar '+keyLabel(event.code)+'.';
    pending=null;
    save();
  },true);

  render();
  return {
    key,
    /** Display label of the key currently bound to an action, e.g. label('KeyE') → 'E'. */
    label:action=>keyLabel(binding(action)),
    /** Calls `listener(mode)` now and whenever the graphics quality changes. */
    onQuality(listener){qualityListeners.push(listener);listener(values.quality);},
    look(delta,vertical=false) {
      return delta*values.sensitivity*(vertical&&values.invert?-1:1);
    },
    toggleMute() {
      values.muted=!values.muted;
      save();
    },
  };
}
