import {$} from '../core/dom.js';

const MAX_PHOTOS = 12;

/**
 * The camera item. Left click takes a photo: a flash, a shutter sound and a
 * thumbnail kept in the journal. It works out which characters are in the
 * frame (on screen, in range, in line of sight) and whether a watchful one
 * (content/characters.js `watchful:true`) saw Rom do it, then emits
 * 'photo:taken' {subjects, noticed, bots, zone} for quests.
 */
export function createPhotos(game) {
  const {T, camera, renderer, scene, rom, state, collision, audio} = game;
  const photos = [];
  const flash = $('flash'), toast = $('photoToast'), toastImage = $('photoToastImage');
  const viewfinder = $('viewfinder');
  const point = new T.Vector3();
  let cooldown = 0, toastTimer = 0;

  function onScreen(worldPoint) {
    point.copy(worldPoint).project(camera);
    return point.z < 1 && Math.abs(point.x) < .95 && Math.abs(point.y) < .95;
  }

  /** A watchful character notices Rom when he is close or inside its field of view. */
  function sees(npc, distance) {
    if (distance < 6) return true;
    const root = npc.model.root, me = rom.player.position;
    const dx = me.x - root.position.x, dz = me.z - root.position.z;
    const facing = Math.sin(root.rotation.y) * dx + Math.cos(root.rotation.y) * dz;
    return distance < 14 && facing / Math.hypot(dx, dz) > Math.cos(Math.PI / 3);
  }

  function snapshot() {
    const source = renderer.domElement;
    const thumb = document.createElement('canvas');
    thumb.width = 192; thumb.height = 108;
    const sourceAspect = source.width / source.height, aspect = thumb.width / thumb.height;
    const sw = sourceAspect > aspect ? source.height * aspect : source.width;
    const sh = sourceAspect > aspect ? source.height : source.width / aspect;
    renderer.render(scene, camera); // Read the frame before it is presented.
    thumb.getContext('2d').drawImage(source, (source.width - sw) / 2, (source.height - sh) / 2, sw, sh, 0, 0, thumb.width, thumb.height);
    try { return thumb.toDataURL('image/jpeg', .72); } catch { return null; }
  }

  function take() {
    if (cooldown > 0 || state.deathTime || state.vehicle) return;
    cooldown = 1;
    audio.play('shutter');
    camera.updateMatrixWorld();
    const me = rom.player.position;
    const subjects = [], noticed = [];
    for (const npc of game.npcs.all()) {
      if (!npc.present || !npc.model.root.visible) continue;
      const root = npc.model.root.position;
      const distance = root.distanceTo(me);
      if (distance > 30 || !onScreen(point.copy(root).setY(root.y + 1.5))) continue;
      if (!collision.clearPath(me, root)) continue;
      subjects.push(npc.id);
      if (npc.def.watchful && sees(npc, distance)) noticed.push(npc.id);
    }
    let bots = 0;
    for (const target of game.combat.targets()) {
      if (Math.hypot(target.x - me.x, target.z - me.z) < 30 && onScreen(point.set(target.x, target.y, target.z))) bots++;
    }
    const image = snapshot();
    const names = subjects.map(id => game.npcs.get(id).def.name);
    if (image) {
      photos.unshift({image, time:game.sky.time(), zone:game.zones.current?.name ?? '', subjects:names});
      photos.length = Math.min(photos.length, MAX_PHOTOS);
      toastImage.src = image;
      toast.hidden = false;
      toastTimer = 2.6;
    }
    flash.classList.remove('go'); void flash.offsetWidth; flash.classList.add('go');
    if (noticed.length) game.notice('Tave pastebėjo!');
    else game.notice(names.length ? 'Nufotografuota: ' + names.join(', ') : 'Spragt!');
    game.bus.emit('photo:taken', {subjects, noticed, bots, zone:game.zones.current?.id ?? null});
  }

  return {
    take,
    list:() => photos,
    update(dt) {
      cooldown = Math.max(0, cooldown - dt);
      if (toastTimer) { toastTimer = Math.max(0, toastTimer - dt); if (!toastTimer) toast.hidden = true; }
      const aiming = Boolean(game.equipment.held?.camera) && !state.vehicle;
      if (viewfinder.hidden === aiming) viewfinder.hidden = !aiming;
    },
    serialize:() => photos.map(({image, time, zone, subjects}) => ({image, time, zone, subjects})),
    restore(saved) {
      if (!Array.isArray(saved)) return;
      for (const photo of saved.slice(0, MAX_PHOTOS)) {
        if (typeof photo?.image === 'string' && photo.image.startsWith('data:image/')) photos.push(photo);
      }
    },
  };
}
