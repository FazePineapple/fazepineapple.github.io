/**
 * SCHOOL DAY. Lesson periods in minutes after midnight (issue #45).
 * During a lesson more practice bots head inside, and the bell rings at the
 * start and end of each period. Emits 'school:bell' {lesson, starts}.
 */
export const lessons = [
  [480, 525], // 08:00–08:45
  [535, 580], // 08:55–09:40
  [600, 645], // 10:00–10:45
  [665, 710], // 11:05–11:50
  [720, 765], // 12:00–12:45
];

/** In-game hour the very first session starts at. */
export const startHour = 8;
