/**
 * CHARACTERS (NPCs) — add people here. Player-facing text is Lithuanian.
 *
 *   name      Shown over their head and in dialogue.
 *   look      Colours (hex numbers) and proportions for the stylised model:
 *             shirt, trousers, skin, hair, hat (optional), glasses (bool), scale.
 *   place     Where they stand. Outdoors: {x, z, facing}. Inside the school:
 *             {floor, x, z, facing} in floor-plan coordinates (-14..14).
 *             facing is the yaw in radians (0 looks toward +z, the courtyard).
 *   dialogue  Id of a file in content/dialogue/ (see content/dialogue/index.js).
 *   requires  Optional {flag} or {quest} — the character only appears once
 *             the flag is set or the quest has started.
 *   hours     'school' (default): only around while the school is open
 *             (content/schedule.js). 'always': there day and night.
 *             [from, to]: only between those in-game hours, e.g. [14, 18].
 *   watchful  true: notices Rom taking photos up close or in front of them.
 *   ignorePlayer  true: keeps facing its own way instead of turning to Rom.
 *
 * Talking to a character emits 'npc:talked' {npc} for quests.
 */
export const characters = {
  caretaker: {
    name:'Kiemsargis',
    look:{shirt:0x47606b, trousers:0x2f3b40, skin:0xc58f73, hair:0x8b8f8c, hat:0x2f4b56, scale:1.05},
    place:{x:16.8, z:4.2, facing:0},
    dialogue:'caretaker',
  },
  classmate: {
    name:'Klasiokas',
    look:{shirt:0x9a3f45, trousers:0x30343a, skin:0xd9a383, hair:0x3a2a20, glasses:true, scale:.97},
    place:{floor:0, x:-8, z:1.5, facing:Math.PI / 2},
    dialogue:'classmate',
  },
  // Fictional teachers for the 'secret-photo' side quest. They meet behind the
  // school after lessons, facing each other.
  physicsTeacher: {
    name:'Fizikos mokytojas',
    look:{shirt:0x5d6b7c, trousers:0x2b2f36, skin:0xc99a7f, hair:0x6e5d4e, glasses:true, scale:1.04},
    place:{x:-12, z:-25.5, facing:Math.PI / 2},
    hours:[14, 18], watchful:true, ignorePlayer:true,
    dialogue:'teachers',
  },
  musicTeacher: {
    name:'Muzikos mokytoja',
    look:{shirt:0x8e3f6b, trousers:0x3a2f3d, skin:0xe0b394, hair:0x7a3b22, scale:.96},
    place:{x:-10.8, z:-25.5, facing:-Math.PI / 2},
    hours:[14, 18], watchful:true, ignorePlayer:true,
    dialogue:'teachers',
  },
};
