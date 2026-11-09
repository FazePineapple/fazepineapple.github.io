export function createStory(notice) {
  const button = document.getElementById('journalButton');
  const dialog = document.getElementById('journal');
  const content = document.getElementById('journalContent');
  const status = document.getElementById('storyStatus');
  const form = document.getElementById('storyAccount');
  const message = document.getElementById('storyMessage');
  const signOut = document.getElementById('storySignOut');
  const events = [];
  const local = ['localhost','127.0.0.1'].includes(location.hostname);
  let endpoint = local ? location.origin : '';
  let token = '';
  let state;
  let online = false;
  let syncing = false;

  function remember(value) {
    token = value;
    try {
      if (value) localStorage.setItem('romgame-session:' + endpoint, value);
      else localStorage.removeItem('romgame-session:' + endpoint);
    } catch {
      // Keep the session in memory if browser storage is blocked.
    }
  }

  function render() {
    status.textContent = !online ? 'Not connected · progress tracking off' :
      state ? 'Tracking as ' + state.username : 'Connected · sign in to track progress';
    form.hidden = !online || Boolean(state);
    signOut.hidden = !token;
    content.replaceChildren();
    if (!state || !dialog.open) return;

    function section(title, rows) {
      const heading = document.createElement('h3');
      heading.textContent = title;
      const list = document.createElement('ul');
      for (const row of rows) {
        const item = document.createElement('li');
        item.textContent = row;
        list.append(item);
      }
      content.append(heading,list);
    }
    for (const [kind,title] of [['main','Main storyline'],['side','Side quests']]) {
      section(title,state.quests.filter(quest => quest.kind === kind).map(quest => {
        const progress = quest.progress;
        if (progress?.done) return quest.title + ' · Complete';
        if (quest.locked) return quest.title + ' · Locked';
        const step = quest.steps[progress?.step ?? 0];
        return quest.title + ' · ' + step.label + ' (' + Math.floor(progress?.amount ?? 0) + '/' + step.target + ')';
      }));
    }
    section('Achievements',state.achievements.map(entry =>
      entry.title + ' · ' + (entry.unlocked ? 'Unlocked' : (Math.floor(state.stats[entry.metric] ?? 0) + '/' + entry.target))));
  }

  function request(path, options = {}) {
    return fetch(endpoint + '/api/story' + path, {
      ...options, credentials:'omit', cache:'no-store', signal:AbortSignal.timeout(5000)
    });
  }

  async function sync() {
    if (!endpoint || syncing) return;
    syncing = true;
    const session = token;
    try {
      const headers = session ? {Authorization:'Bearer ' + session} : {};
      const batch = events.splice(0, 500);
      let response = await request(session ? '' : '/health', batch.length ? {
        method:'POST',
        headers:{...headers, 'Content-Type':'application/json'},
        body:JSON.stringify({
          id:Array.from(crypto.getRandomValues(new Uint32Array(4)), part => part.toString(16).padStart(8,'0')).join(''),
          events:batch
        })
      } : {headers});
      if (session !== token) return;
      if (session && response.status === 401) {
        remember('');
        state = undefined;
        events.length = 0;
        response = await request('/health');
      }
      if (!response.ok) throw new Error('Tracking unavailable');
      const next = await response.json();
      if (token && token !== session) return;
      if (token && (typeof next.username !== 'string' || !Array.isArray(next.achievements))) throw new Error('Invalid tracking response');
      if (!token && next.online !== true) throw new Error('Invalid health response');
      const unlocked = state && token && next.achievements.find(entry => entry.unlocked &&
        state.achievements.some(previous => previous.id === entry.id && !previous.unlocked));
      if (unlocked) notice('Achievement unlocked · ' + unlocked.title);
      state = token ? next : undefined;
      online = true;
    } catch {
      if (session === token || !token) {
        online = false;
        state = undefined;
        events.length = 0;
      }
    } finally {
      syncing = false;
      render();
    }
  }

  button.addEventListener('click', () => { dialog.showModal(); render(); void sync(); });
  signOut.addEventListener('click', () => {
    remember('');
    state = undefined;
    events.length = 0;
    message.textContent = '';
    render();
  });
  form.addEventListener('submit', async event => {
    event.preventDefault();
    const {username,password} = Object.fromEntries(new FormData(form));
    const register = event.submitter?.value === 'register';
    const buttons = [...form.querySelectorAll('button')];
    buttons.forEach(button => { button.disabled = true; });
    try {
      const response = await request('/account', {
        method:'POST', headers:{'Content-Type':'application/json'},
        body:JSON.stringify({username,password,register})
      });
      const result = await response.json();
      if (!response.ok) {
        message.textContent = result.error;
        return;
      }
      remember(result.token);
      form.reset();
      message.textContent = '';
      void sync();
    } catch {
      message.textContent = 'Tracking server unavailable. You can still play.';
      void sync();
    } finally {
      buttons.forEach(button => { button.disabled = false; });
    }
  });

  async function connect() {
    if (!local && location.protocol === 'https:') {
      try {
        const config = await (await fetch('story-config.json', {cache:'no-store', signal:AbortSignal.timeout(5000)})).json();
        const url = new URL(config.api);
        if (url.protocol === 'https:' && !url.username && !url.password) endpoint = url.origin;
      } catch {
        // The game can run without tracking configuration.
      }
    }
    if (!endpoint) return;
    try { token = localStorage.getItem('romgame-session:' + endpoint) ?? ''; } catch {}
    void sync();
    setInterval(sync, 5000);
  }

  render();
  void connect();
  return (metric, amount = 1) => {
    if (!online || !state || events.length >= 500) return;
    const last = events.at(-1);
    if (last?.[0] === metric && ['walked','sprinted'].includes(metric) && last[1] + amount <= 100) last[1] += amount;
    else events.push([metric, amount]);
  };
}
