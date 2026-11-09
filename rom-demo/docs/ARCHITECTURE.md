# Architecture

```
rom-demo/
  game.js            Bundle entry → src/main.js
  content/           Game data: items, spawns, characters, dialogue, quests, zones, schedule
  src/
    main.js          Composition root: builds the world, creates systems, runs the frame loop
    story-api.js     The small API quest/dialogue content uses
    interactions.js  What "E" does (stairs, restroom, talk, pick up)
    input.js         Keyboard, mouse (pointer lock), touch
    camera-rig.js    Follow / first-person / death / menu cameras
    core/            Event bus, seeded random, save slot, DOM helpers
    render/          Mesh/material builders, static batching, adaptive quality
    world/           Campus, interior, sky, forest, collision, zones, school schedule
    player/          Rom's model, state, movement, vitals, animation, item actions
    items/           Inventory (pure), item models, held equipment, world pickups
    combat/          Practice bots
    npc/             Characters from content/characters.js
    quests/          Quest engine (pure), waypoints, content validation
    ui/              HUD, minimap, panels (inventory, emotes, dialogue, journal), online tracking
  tests/             node:test unit tests (quest engine, inventory, content, saves)
  dist/              index.html, style.css, rom.jpg and the built game.bundle.js
```

## How the pieces talk

- **One `game` object** is passed to every system (`createX(game)`). It holds
  the scene, the player `state`, and every system, so systems call each other
  through it (`game.vitals.applyEffects(...)`). `main.js` creates them in
  dependency order.
- **The event bus** (`game.bus`) is how gameplay announces what happened.
  Quests, online stats and autosave listen to it; gameplay code never calls
  them directly. Adding a new mechanic? Emit an event and quests can use it.
- **Content never imports from `src/`** except through `api` (story API).

## Frame loop (`main.js`)

When playing: doors → movement → bots → item actions → vitals → HUD →
animation → lighting/ambience → camera → pickups → NPCs → zones → quest poll
(2×/s) → interaction prompt → waypoint → minimap → autosave. Then always:
chunk visibility → sky → school bell → render.

Panels (inventory, emotes, dialogue, journal) pause the world.

## Performance notes

- **Static batching** (`render/static-batch.js`): the campus and each school
  floor are built from thousands of boxes, then merged into one mesh per
  material. This took the outdoor scene from ~5,400 draw calls to ~470 and
  roughly halved frame time. Anything that animates its transform must be
  passed in the `keep` list (the door leaves are), or it will be frozen.
  Material changes (lamp glow, opacity) still work after merging.
- **Lambert materials**: every surface is rough and non-metallic, so the
  cheaper Lambert model looks the same as PBR at lower per-pixel cost.
- **Lights**: street lamps are additive glow decals, not point lights. The
  three interior point lights are switched off outdoors; both shader variants
  are warmed up at load (`precompileShaders`) so the doorway does not stall.
- **Adaptive resolution** (`render/quality.js`): "Auto" lowers the pixel ratio
  when FPS drops below ~47 and raises it with headroom. Settings also offer
  "High" and "Performance" (lower resolution, no shadows).
- Per-frame HUD writes go through `setText`/`setValue`, which skip unchanged
  values; the minimap's static layer is pre-rendered.
- Geometries for held/pickup item models are cached (`build.shared`).

## Saves

`core/save.js` stores one versioned slot in `localStorage`
(`romgame.save.v1`): inventory, hotbar selection, equipment, flags, quest
progress, collected spawns, dropped items and the time of day. It saves after
story/item events, every 20 s of play, on pause and when the tab closes.
"New game" on the title screen clears it. If you change the save shape in an
incompatible way, bump `version` in `core/save.js`.

## Build, test, release

From `rom-demo/`:

```
npm test         # unit + content tests
npm run build    # bundles game.js → dist/game.bundle.js and syntax-checks it
npm run check    # both
```

CI (`.github/workflows/check.yml`) runs the tests, rebuilds, and fails if the
committed `dist/game.bundle.js` does not match the source.

**Pages release:** the Pages repo (`FazePineapple/fazepineapple.github.io`)
now runs the same code. Its only extra file is
`rom-demo/dist/story-config.json` (the optional online-profile API). To
release, copy `rom-demo/` from this repo over the Pages checkout's
`rom-demo/` (keep `dist/story-config.json`, never copy `second-brain/`),
commit and push to Pages `main`, then check the Actions run and the version
badge on the live game.
