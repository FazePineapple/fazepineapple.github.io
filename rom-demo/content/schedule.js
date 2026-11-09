/**
 * SCHOOL DAY.
 *
 * lessons        Lesson periods in minutes after midnight (issue #45). During
 *                a lesson more practice bots head inside, and the bell rings
 *                at the start and end of each period ('school:bell').
 * schoolHours    The school is open from `open` to `close` (hours). At night
 *                the front door stays locked from outside and characters with
 *                `hours:'school'` go home, so their quests wait for morning.
 * minutesPerSecond  How fast the in-game clock runs (game minutes per real
 *                second). 1 = a full day takes 24 real minutes.
 */
export const lessons = [
  [480, 525], // 08:00–08:45
  [535, 580], // 08:55–09:40
  [600, 645], // 10:00–10:45
  [665, 710], // 11:05–11:50
  [720, 765], // 12:00–12:45
];

export const schoolHours = {open:7, close:19};

export const minutesPerSecond = 1;

/** In-game hour the very first session starts at. */
export const startHour = 7.75;
