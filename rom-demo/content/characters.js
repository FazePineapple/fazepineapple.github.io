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
};
