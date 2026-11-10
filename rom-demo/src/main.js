import * as T from '../three.module.js';
import {items} from '../content/items.js';
import {spawns} from '../content/spawns.js';
import {characters} from '../content/characters.js';
import {dialogues} from '../content/dialogue/index.js';
import {quests} from '../content/quests/index.js';
import {zones} from '../content/zones.js';
import {startHour, minutesPerSecond} from '../content/schedule.js';
import {$} from './core/dom.js';
import {createEventBus} from './core/events.js';
import {createRandom} from './core/random.js';
import {createSaveStore} from './core/save.js';
import {createBuilders} from './render/builders.js';
import {mergeStaticMeshes} from './render/static-batch.js';
import {createQualityScaler} from './render/quality.js';
import {createAudio} from './audio.js';
import {createSettings} from './settings.js';
import {createSky} from './world/sky.js';
import {buildCampus} from './world/campus.js';
import {buildInterior} from './world/interior.js';
import {createCollision} from './world/collision.js';
import {createZones} from './world/zones.js';
import {createSchedule} from './world/schedule.js';
import {buildRom} from './player/rom-model.js';
import {createPlayerState} from './player/state.js';
import {createMovement} from './player/movement.js';
import {createVitals} from './player/vitals.js';
import {createAnimation} from './player/animation.js';
import {createActions} from './player/actions.js';
import {createSeating} from './player/seating.js';
import {createPhotos} from './player/photos.js';
import {createVehicles} from './vehicles/car.js';
import {emotes} from './player/emotes.js';
import {createInventory} from './items/inventory.js';
import {createItemModels} from './items/item-models.js';
import {createEquipment} from './items/equipment.js';
import {createPickups} from './items/pickups.js';
import {createExplosives} from './items/explosives.js';
import {createCombat} from './combat/combat.js';
import {createNpcs} from './npc/npcs.js';
import {createQuestEngine} from './quests/quest-engine.js';
import {createWaypoints} from './quests/waypoints.js';
import {validateContent} from './quests/validate.js';
import {createStoryApi} from './story-api.js';
import {createInteractions} from './interactions.js';
import {createInput} from './input.js';
import {createCameraRig} from './camera-rig.js';
import {createHud} from './ui/hud.js';
import {createMinimap} from './ui/minimap.js';
import {createPanels, createEmotesUI} from './ui/panels.js';
import {createInventoryUI} from './ui/inventory-ui.js';
import {createDialogueUI} from './ui/dialogue-ui.js';
import {createJournalUI} from './ui/journal-ui.js';
import {createTracking} from './ui/tracking.js';

const spawnPoint = {x:-9, y:.03, z:22};

/**
 * Builds the world and every system, then runs the frame loop. Systems share
 * one `game` object; each module documents what it reads from it.
 */
export function boot() {
  const problems = validateContent({items, spawns, characters, dialogues, quests, zones});
  for (const problem of problems) console.warn('[content] ' + problem);

  const bus = createEventBus();
  const audio = createAudio();
  const settings = createSettings(document, audio);
  const save = createSaveStore();

  // Renderer, lights and sky.
  const scene = new T.Scene();
  scene.background = new T.Color(0xa9c7d5);
  scene.fog = new T.FogExp2(0xa9c7d5, .009);
  const camera = new T.PerspectiveCamera(59, 1, .1, 250);
  const renderer = new T.WebGLRenderer({antialias:true, powerPreference:'high-performance'});
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = T.PCFShadowMap;
  $('world').append(renderer.domElement);
  const ambient = new T.HemisphereLight(0xe1f0ff, 0x747257, 2.1);
  scene.add(ambient);
  const sun = new T.DirectionalLight(0xffe0b1, 2.35);
  sun.position.set(-33, 55, 27);
  sun.castShadow = true;
  Object.assign(sun.shadow.camera, {left:-65, right:65, top:65, bottom:-65, far:170});
  sun.shadow.mapSize.set(2048, 2048);
  sun.shadow.normalBias = .035;
  scene.add(sun);
  const quality = createQualityScaler(renderer, sun);
  settings.onQuality(mode => quality.setMode(mode));
  const sky = createSky(T, scene, sun, ambient);
  sky.setHour(startHour);
  sky.setSpeed(minutesPerSecond);

  // World. Build order matters for the seeded layout: campus → Rom → interior.
  const build = createBuilders(T, scene, renderer, createRandom(134));
  const campus = buildCampus(build, sky);
  const rom = buildRom(build, camera);
  const interior = buildInterior(T, scene, build.box, build.surface, build.texture, campus.door);
  const entranceMarker = build.mesh(new T.RingGeometry(.65, .73, 32),
    new T.MeshBasicMaterial({color:0xc8ed80, side:T.DoubleSide}), 22, .065, 2.05);
  entranceMarker.rotation.x = -Math.PI / 2;
  entranceMarker.castShadow = false;
  const collision = createCollision(T, campus, interior);

  // Merge thousands of static boxes into a few meshes per material.
  mergeStaticMeshes(T, campus.chunk, campus.door.leaves.map(leaf => leaf.hinge));
  for (const floor of interior.floors) mergeStaticMeshes(T, floor.chunk);

  const state = createPlayerState();
  const game = {
    T, bus, audio, settings, save, scene, camera, renderer, sky, build, campus, rom, interior, collision, items, state,
    active:false, usesMouseLook:false,
    notice:text => game.hud.notice(text),
  };
  game.combat = createCombat({T, scene, box:build.box, oval:build.oval, groundAt:collision.groundAt, blocked:collision.block, playSound:audio.play, bus});
  game.hud = createHud(game);
  game.inventory = createInventory(items);
  game.itemModels = createItemModels(build, items);
  game.story = createStoryApi(game);
  game.equipment = createEquipment(game);
  game.panels = createPanels(game);
  game.input = createInput(game);
  game.vitals = createVitals(game);
  game.animation = createAnimation(game);
  game.movement = createMovement(game);
  game.actions = createActions(game);
  game.pickups = createPickups(game);
  game.explosives = createExplosives(game);
  game.seating = createSeating(game);
  game.vehicles = createVehicles(game);
  game.photos = createPhotos(game);
  game.zones = createZones(game);
  game.npcs = createNpcs(game);
  game.interactions = createInteractions(game);
  let questsChanged = true;
  game.quests = createQuestEngine({definitions:quests, bus, api:game.story.api, onChange:() => { questsChanged = true; }});
  game.waypoints = createWaypoints(game);
  game.schedule = createSchedule(game);
  game.cameraRig = createCameraRig(game);
  game.inventoryUI = createInventoryUI(game);
  createEmotesUI(game, emotes);
  game.dialogue = createDialogueUI(game);
  game.journal = createJournalUI(game);
  game.minimap = createMinimap(game);
  createTracking(bus, text => game.hud.toast(text, 'complete'));

  const {movement, actions, animation, vitals, pickups, npcs, panels, input, hud, cameraRig, equipment, combat} = game;
  const position = rom.player.position;

  // Health, death and respawn.
  game.damage = (amount, reason) => {
    if (state.deathTime || !(amount > 0)) return;
    state.health = Math.max(0, state.health - amount);
    if (!state.health) beginDeath();
    else if (reason) game.notice(reason + ' · −' + Math.round(amount) + ' gyvybės');
  };
  function beginDeath() {
    if (state.deathTime) return;
    game.vehicles.exit();
    state.deathTime = .001; state.emote = null;
    panels.close({relock:false});
    input.release();
    rom.rig.visible = true;
    $('deathScreen').hidden = false;
    hud.setReticle(false);
    hud.setWaypoint(null);
    bus.emit('player:died');
  }
  function placeAtSpawn() {
    game.vehicles.exit();
    state.climbing = null;
    state.seat = null;
    movement.setJetpack(false, true);
    position.set(spawnPoint.x, spawnPoint.y, spawnPoint.z);
    rom.player.rotation.y = Math.PI;
    state.yaw = 0; state.pitch = 0;
    state.airborne = false; state.verticalSpeed = 0;
    interior.setLighting(undefined);
  }
  function respawn() {
    actions.reset();
    animation.reset();
    vitals.reset();
    state.deathTime = 0; state.landingTime = 0; state.stride = 0;
    $('deathScreen').hidden = true;
    rom.rig.visible = !state.firstPerson;
    placeAtSpawn();
    state.health = 100; state.stamina = 100; state.recovery = 0; state.exhausted = false;
    if (game.active) audio.ambience(true, false);
    equipment.refresh();
    hud.updateVitals(state);
    bus.emit('player:respawned');
  }
  /** R: back to the courtyard without healing (it used to fully heal, which was an exploit). */
  game.unstuck = () => {
    if (state.deathTime) return;
    animation.reset();
    placeAtSpawn();
    game.notice('Grįžai į kiemą');
  };

  // Persistence.
  let resetting = false, dirty = false, saveClock = 0;
  function snapshot() {
    return {
      inventory:game.inventory.serialize(),
      selected:equipment.hotbar.selected,
      equipment:{...state.equipment},
      flags:[...game.story.flags],
      quests:game.quests.serialize(),
      hour:+sky.hour().toFixed(3),
      photos:game.photos.serialize(),
      ...pickups.serialize(),
    };
  }
  function persist() {
    if (resetting) return;
    save.write(snapshot());
    dirty = false; saveClock = 0;
  }
  const saved = save.data;
  if (saved) {
    game.inventory.restore(saved.inventory);
    equipment.hotbar.selected = Math.min(8, Math.max(0, Number(saved.selected) || 0));
    state.equipment.jetpack = Boolean(saved.equipment?.jetpack);
    for (const flag of saved.flags ?? []) game.story.flags.add(flag);
    game.quests.restore(saved.quests);
    sky.setHour(saved.hour);
    game.photos.restore(saved.photos);
  }
  bus.on('*', (payload, type) => { if (/^(quest|item|flag|photo):/.test(type)) dirty = true; });
  window.addEventListener('pagehide', persist);
  document.addEventListener('visibilitychange', () => { if (document.hidden) persist(); });

  // Story feedback.
  bus.on('quest:started', quest => {
    hud.toast((quest.kind === 'main' ? 'Nauja siužeto misija · ' : 'Nauja šalutinė užduotis · ') + quest.title, 'quest');
    audio.play('questStart');
  });
  bus.on('quest:progress', progress => {
    hud.toast(progress.needed > 1 ? progress.title + ' · ' + progress.count + '/' + progress.needed : 'Tikslas · ' + progress.text, 'quest');
  });
  bus.on('quest:completed', quest => {
    hud.toast(quest.message ?? 'Užduotis įvykdyta · ' + quest.title, 'complete');
    audio.play('questComplete');
  });
  const refreshWorld = () => { npcs.spawnAll(); pickups.spawnWorld(); };
  for (const type of ['flag:set', 'quest:started', 'quest:completed']) bus.on(type, refreshWorld);

  game.quests.begin();
  pickups.spawnWorld(saved);
  npcs.spawnAll();
  respawn();
  precompileShaders();

  /**
   * Warms up the GPU for both lighting setups (outdoors without the interior
   * point lights, indoors with them): compiles every shader variant and
   * uploads every texture by rendering each floor once behind the title
   * screen, so walking through the school door never stalls.
   */
  function precompileShaders() {
    const chunks = [campus.chunk, ...interior.floors.map(floor => floor.chunk)];
    const shown = chunks.map(chunk => chunk.visible);
    const saved = camera.position.clone();
    for (const chunk of chunks) chunk.visible = true;
    for (const floor of interior.floors) {
      interior.setLighting(floor.origin);
      camera.position.set(floor.origin, (floor.baseY ?? 0) + 1.7, (floor.spawnZ ?? -6) + 3);
      camera.lookAt(floor.origin, (floor.baseY ?? 0) + 1.2, floor.spawnZ ?? -6);
      renderer.render(scene, camera);
    }
    interior.setLighting(undefined);
    camera.position.copy(saved);
    renderer.render(scene, camera);
    chunks.forEach((chunk, index) => { chunk.visible = shown[index]; });
  }

  // Menu, pause and help.
  function setActive(value) {
    game.active = value;
    input.release();
    if (!value) panels.close({relock:false});
    if (!value && state.deathTime) respawn();
    rom.rig.visible = !value || !state.firstPerson;
    if (value) audio.start();
    audio.ambience(value, collision.inside(position.x, position.z, position.y));
    $('menu').hidden = value;
    $('hud').hidden = !value;
    if (value) {
      hud.flushToasts();
      $('start').firstChild.textContent = 'Grįžti į žaidimą ';
    } else {
      if (document.pointerLockElement) document.exitPointerLock();
      $('start').focus();
      persist();
    }
  }
  game.setActive = setActive;
  $('start').firstChild.textContent = saved ? 'Tęsti ' : 'Pradėti žaidimą ';
  $('newGame').hidden = !saved;
  $('start').onclick = event => {
    setActive(true);
    // A mouse click on Start can capture the mouse straight away.
    if (event.detail > 0 && !matchMedia('(pointer: coarse)').matches) {
      game.usesMouseLook = true;
      input.lockPointer();
    }
  };
  $('newGame').onclick = () => {
    if (!confirm('Pradėti naują žaidimą? Šiame įrenginyje išsaugota pažanga bus ištrinta.')) return;
    resetting = true;
    save.clear();
    location.reload();
  };
  $('menuButton').onclick = () => setActive(false);
  $('emoteButton').onclick = () => panels.toggle('emotes');
  $('soundButton').onclick = settings.toggleMute;
  const helpKey = 'romgame.help.hidden';
  let helpHidden = false;
  try { helpHidden = localStorage.getItem(helpKey) === '1'; } catch { /* Storage blocked. */ }
  game.toggleHelp = () => {
    helpHidden = !helpHidden;
    $('help').hidden = helpHidden;
    $('helpHint').hidden = !helpHidden;
    try { localStorage.setItem(helpKey, helpHidden ? '1' : '0'); } catch { /* Storage blocked. */ }
  };
  $('help').hidden = helpHidden;
  $('helpHint').hidden = !helpHidden;
  $('helpHint').onclick = game.toggleHelp;

  function resize() {
    camera.aspect = innerWidth / innerHeight;
    camera.fov = T.MathUtils.clamp(68 - camera.aspect * 8, 59, 75);
    camera.updateProjectionMatrix();
    renderer.setSize(innerWidth, innerHeight);
  }
  window.addEventListener('resize', resize);
  resize();

  let lockedNoticeTime = 0;
  function updateDoors(dt) {
    const door = campus.door;
    const near = !state.vehicle && Math.abs(position.x - door.x) < 2.25 && Math.abs(position.z - door.z) < 2.45 && position.y < 2.8;
    // At night the door stays shut from outside; from inside it still lets Rom out.
    const lockedOut = !game.schedule.isSchoolOpen() && position.z > door.z;
    lockedNoticeTime = Math.max(0, lockedNoticeTime - dt);
    if (near && lockedOut && !lockedNoticeTime) {
      game.notice('Mokykla uždaryta · Atsidaro ' + game.schedule.opensAt);
      lockedNoticeTime = 3;
    }
    const opens = (near && !lockedOut) || (!lockedOut && combat.atDoor(door.x, door.z));
    door.opening = T.MathUtils.lerp(door.opening, opens ? 1 : 0, 1 - Math.exp(-dt * 9));
    for (const {hinge, side} of door.leaves) hinge.rotation.y = -side * door.opening * Math.PI * .51;
  }

  /** The tracked objective for the HUD, with a note when the school is closed. */
  function describeObjective() {
    const objective = game.quests.objective();
    if (!objective || game.schedule.isSchoolOpen()) return objective;
    const target = objective.target ?? {};
    const needsSchool = (target.npc && !npcs.isPresent(target.npc)) || target.zone || target.point?.floor !== undefined;
    return needsSchool ? {...objective, note:'Naktį mokykla uždaryta · Grįžk ' + game.schedule.opensAt} : objective;
  }

  /** Renders only the part of the world Rom (or the camera) can see. */
  function updateVisibility() {
    const {x, y, z} = position;
    const indoor = game.active && collision.inside(x, z, y);
    const nearDoor = game.active && y < 4 && Math.abs(x - campus.door.x) < 3 && Math.abs(z - campus.door.z) < 3;
    const cameraIndoors = collision.inside(camera.position.x, camera.position.z, camera.position.y);
    // Keep both chunks visible through the doorway and until the follow camera clears it.
    campus.chunk.visible = !indoor || (x < 200 && (nearDoor || !cameraIndoors));
    const visibleFloor = indoor ? interior.floorAt(x) : null;
    for (const floor of interior.floors) floor.chunk.visible = floor === visibleFloor || (floor === interior.floors[0] && nearDoor);
    combat.setCourtyardVisible(campus.chunk.visible, interior.floors[0].chunk.visible);
    game.vehicles.car.group.visible = campus.chunk.visible;
    const isVisible = (px, pz, py) => collision.inside(px, pz, py) ? interior.floorAt(px).chunk.visible : campus.chunk.visible;
    pickups.updateVisibility(isVisible);
    game.explosives.updateVisibility(isVisible);
    npcs.updateVisibility(isVisible);
    return cameraIndoors;
  }

  let last = performance.now(), wasIndoors = false, pollClock = 0;
  renderer.setAnimationLoop(now => {
    const frame = (now - last) / 1000;
    last = now;
    quality.update(frame);
    const dt = Math.min(Math.max(frame, 0), .045);
    const unpaused = game.active && !panels.isOpen();

    if (game.active && state.deathTime) {
      state.deathTime += dt;
      cameraRig.updateDeath();
      // The world keeps moving behind the death screen: flying bodies, fire, blasts.
      combat.update(dt, rom.player, () => {});
      game.explosives.update(dt);
      game.vehicles.tick(dt);
      if (state.deathTime >= 3.1) { respawn(); game.notice('Grįžai į kiemą'); }
    } else if (unpaused) {
      updateDoors(dt);
      movement.update(dt, input);
      // Bots punching a driven car dent the car instead of Rom.
      combat.update(dt, rom.player, amount => { if (state.vehicle) game.vehicles.damage(amount * .8); else game.damage(amount, 'Robotas smogė'); });
      game.photos.update(dt);
      actions.update(dt, input.sprayHeld);
      game.explosives.update(dt);
      game.vehicles.tick(dt);
      vitals.update(dt);
      hud.updateVitals(state);
      hud.setCarHealth(state.vehicle ? state.vehicle.hp : null);
      animation.update(dt);
      const indoors = collision.inside(position.x, position.z, position.y);
      interior.setLighting(indoors ? position.x : undefined);
      if (indoors && state.jetpack) movement.setJetpack(false, true);
      if (indoors !== wasIndoors) { audio.ambience(true, indoors); wasIndoors = indoors; }
      cameraRig.update(now, indoors);
      if (equipment.held?.weapon?.ranged && !state.deathTime) {
        const aim = cameraRig.aimScreenPoint();
        hud.setReticle(true, aim.x, aim.y);
      } else hud.setReticle(false);
      pickups.update(dt);
      npcs.update(dt);
      game.zones.update(position);
      pollClock += dt;
      if (pollClock > .5) { pollClock = 0; game.quests.poll(); questsChanged = true; }
      game.interactions.update(dt);
      const action = game.interactions.nearest();
      const useKey = settings.label('KeyE');
      const held = game.interactions.holdProgress;
      const filled = Math.ceil(held * 6);
      hud.updatePrompt(dt, action && (held && action.hold
        ? action.hold.label[0].toUpperCase() + action.hold.label.slice(1) + ' ' + '▰'.repeat(filled) + '▱'.repeat(6 - filled)
        : useKey + ' · ' + action.label + (action.hold ? ' · laikyk ' + useKey + ' – ' + action.hold.label : '')));
      const waypoint = game.waypoints.current();
      const distance = waypoint ? Math.hypot(waypoint.x - position.x, waypoint.z - position.z) : 0;
      // Hide the marker once Rom is standing at the target.
      hud.setWaypoint(waypoint && distance > 3 && {...cameraRig.screenPoint(waypoint), label:waypoint.label, distance});
      game.minimap.draw(waypoint);
      saveClock += dt;
      if ((dirty && saveClock > 2) || saveClock > 20) persist();
    } else if (!game.active) cameraRig.updateMenu(now);

    if (questsChanged) {
      questsChanged = false;
      hud.setObjective(describeObjective());
      if (panels.isOpen('journal')) game.journal.render();
    }
    const cameraIndoors = updateVisibility();
    sky.update(dt, camera, campus.chunk.visible && !cameraIndoors, unpaused);
    game.schedule.update(unpaused);
    hud.setClock(sky.time());
    rom.firstHands.visible = game.active && state.firstPerson && !state.deathTime;
    renderer.render(scene, camera);
  });

  // Exposed for debugging in the browser console: window.romgame.
  window.romgame = game;
}
