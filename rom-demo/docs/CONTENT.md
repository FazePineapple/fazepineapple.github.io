# Adding content

Story missions, side quests, items and characters are **data files** in
`rom-demo/content/`. You should rarely need to touch `src/` to add content.
**All player-facing text is Lithuanian** (names, dialogue, quest text,
messages); ids and code comments stay in English.
After any change run `npm run check` in `rom-demo/` (tests + build); the
content test fails with a clear message if an id is misspelled.

| I want to add…            | Edit                                   |
| ------------------------- | -------------------------------------- |
| An item                   | `content/items.js` (+ a model in `src/items/item-models.js` if it needs its own look) |
| An item lying in the world| `content/spawns.js`                    |
| A character               | `content/characters.js`                |
| What a character says     | a file in `content/dialogue/`, listed in `content/dialogue/index.js` |
| A story chapter or side quest | a file in `content/quests/`, listed in `content/quests/index.js` |
| A named place (for the HUD and quests) | `content/zones.js`        |
| Lesson times, school opening hours, clock speed | `content/schedule.js` |
| An emote                  | `src/player/emotes.js` (label, duration, pose; the menu is generated) |

Ids (item, quest, step, character, spawn) are stored in players' saves.
**Never rename an id after it has shipped** — add a new one instead.

## Recipe: a new side quest with a new character

1. **Character** — `content/characters.js`:

   ```js
   librarian: {
     name:'Librarian',
     look:{shirt:0x6b4f7a, trousers:0x2e2a33, skin:0xd2a184, hair:0x5a4535, glasses:true},
     place:{floor:1, x:-10, z:-6, facing:Math.PI / 2},   // 2nd floor library
     dialogue:'librarian',
   },
   ```

2. **Dialogue** — `content/dialogue/librarian.js`, then add it to
   `content/dialogue/index.js`:

   ```js
   export default {
     entry(api) {
       if (api.questStep('overdue-book') === 'return') return 'thanks';
       if (!api.isQuestDone('overdue-book') && !api.isQuestActive('overdue-book')) return 'ask';
       return 'idle';
     },
     nodes: {
       ask: {
         text:'Someone left a library book on the roof. Again.',
         choices:[
           {text:'I\'ll get it.', do:api => api.startQuest('overdue-book'), end:true},
           {text:'Not my problem.', end:true},
         ],
       },
       thanks: {
         text:'Finally! Here, take this.',
         do:api => api.emit('story:book-returned'),
       },
       idle: {text:['Shh.', 'Quiet, please.']},
     },
   };
   ```

3. **Quest** — `content/quests/overdue-book.js`, then add it to
   `content/quests/index.js`:

   ```js
   export default {
     id:'overdue-book', kind:'side', title:'Overdue',
     summary:'The librarian wants a book back from the roof.',
     requires:['first-day'],
     steps:[
       {id:'find', text:'Find the book on the roof', on:'item:picked', match:{id:'book'},
        when:api => api.has('book'), target:{item:'book'}},
       {id:'return', text:'Bring it to the librarian', on:'story:book-returned',
        onComplete:api => api.take('book'), target:{npc:'librarian'}},
     ],
     rewards:{items:[['juice', 1]], message:'Overdue complete · Juice pack'},
   };
   ```

4. **Item + spawn** — add `book` to `content/items.js` (`questItem:true` so it
   cannot be thrown away) and a spawn that only appears once the quest starts:
   `{id:'roof-book', item:'book', x:-11, z:-16, requires:{quest:'overdue-book'}}`.

That is everything: the quest shows in the journal (L) and the HUD tracker,
the waypoint points at the book (via the school door or stairs when needed)
and then at the librarian, and progress is saved automatically.

## Quest steps

A step completes when its `on` event fires with a payload matching `match`
(`count` times), or as soon as `when(api)` is true. Use both for "pick up X"
steps so a player who already has the item is not stuck.

`target` drives the waypoint marker and minimap star:
`{npc:'id'}`, `{item:'id'}` (nearest one lying in the world),
`{zone:'id'}`, `{point:{x, z}, label}` or `{point:{floor, x, z}, label}`.
It may also be a function `api => target` for steps whose target changes.

Main story chapters are just quests with `kind:'main'`; chain them with
`requires:['previous-chapter']` and `autoStart:true`.

## Events you can listen for

| Event              | Payload                                  |
| ------------------ | ---------------------------------------- |
| `npc:talked`       | `{npc}` when a conversation starts       |
| `dialogue:choice`  | `{npc, text}`                            |
| `dialogue:ended`   | `{npc}`                                  |
| `item:picked`      | `{id, spawnId}` picked up from the world |
| `item:received`    | `{id, count}` given by a quest or dialogue |
| `item:used`        | `{id}` eaten or drunk                    |
| `item:thrown`      | `{id}`                                   |
| `bot:hit`          | `{name, profile, damage, source, defeated}` |
| `bot:defeated`     | `{name, profile, source}` — source is `melee`, `shot`, `throw`, `spray` or `gas` |
| `zone:entered`     | `{zone, area, floor, previous}`          |
| `floor:entered`    | `{floor}` after using the stairs         |
| `player:jump`, `player:died`, `player:respawned`, `player:restroom` | `{}` |
| `player:climbed`   | `{height}` on reaching a roof            |
| `player:emote`     | `{name, atRestroom}`                     |
| `player:sat` / `player:stood` | `{item}` / `{}` — chairs        |
| `player:pooped` / `player:vomited` | `{}`                      |
| `school:opened` / `school:closed` | `{}` at opening hours        |
| `photo:taken`      | `{subjects, noticed, bots, zone}` — subjects/noticed are character ids |
| `vehicle:entered` / `vehicle:exited` | `{}` — the car          |
| `player:moved`     | `{distance, running, crouching}` every frame Rom walks |
| `player:crouched` / `player:stoodUp` | — when Ctrl crouch starts / ends |
| `time:minute`      | `{minute}` in-game minute of the day     |
| `school:bell`      | `{lesson, starts}`                       |
| `quest:started` / `quest:progress` / `quest:completed` | `{id, title, …}` |
| `flag:set`         | `{flag}`                                 |
| `story:…`          | anything you emit with `api.emit`        |

## The story API

Quest hooks, `when` checks and dialogue receive `api`
(`src/story-api.js`). Keep content to this API so it survives refactors:

- Items: `has(id, n)`, `count(id)`, `give(id, n)`, `take(id, n)`
- Flags: `setFlag(name)`, `clearFlag(name)`, `hasFlag(name)`
- Quests: `startQuest(id)`, `isQuestActive(id)`, `isQuestDone(id)`, `questStep(id)`
- Player and world: `heal(n)`, `area()`, `zone()`, `hasEquipment('jetpack')`,
  `time()`, `minute()`, `isLesson()`
- Output: `notice(text)` (toast), `emit('story:name', payload)`

Characters and spawns can take `requires:{flag}`, `{quest}` (started or done)
or `{questDone}` to appear only after story progress.

Characters can also keep their own hours with `hours:[14, 18]` (in-game hours),
and `ignorePlayer:true` keeps them facing their own way.

Characters go home at night by default (`hours:'school'`, using
`schoolHours` in `content/schedule.js`), so quests that need them wait until
morning; the HUD tells the player. Use `hours:'always'` for someone who is
always around.

## Item recipes

- **Food/drink**: `use:{verb, message, effects:[…]}`. Add `{health:n}` to heal and
  `{meter:'stomach', add:n}` for fullness (over 100 → Rom vomits).
- **Throwable**: `throw:{damage, speed, lift, gravity, pointFirst, stink}`.
  Items with `throw` and no `weapon`/`use` are thrown with the left mouse
  button (like Liniuotė). Throws get light aim assist toward bots.
- **Projectile weapon** (like the straw): `weapon:{damage, cooldown,
  projectile:{speed, gravity, size, color}}`.
- **Furniture** (like the chair): `sit:{height}` plus `use:{verb, action:'sit'}`.
  E sits on it in the world, holding E picks it up; F/left click places it from the backpack.
- **Weapons** can set `animation` (`stab`, `punch`, `swing`, `recoil`), `auto:true`
  (fires while held) and projectile extras `stun` (seconds), `homing` (turn rate),
  `life` and `model:'plane'`.
- **Camera**: `camera:true` takes photos. Quests listen for `photo:taken` and can
  require characters in `subjects` and none in `noticed` (stealth). Characters with
  `watchful:true` notice photos taken within 6 m or from in front of them.
- **Eating**: `use.animation:'eat'` (bites) or `'drink'`; `{peeIn:n}` forces a pee after n s.
