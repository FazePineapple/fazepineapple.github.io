import {lessons, schoolHours} from '../../content/schedule.js';

const clock = minute => String(Math.floor(minute / 60) % 24).padStart(2, '0') + ':' + String(minute % 60).padStart(2, '0');

/**
 * School day clock: opening hours, lessons and the bell. Emits
 * 'time:minute', 'school:bell' {lesson, starts} and
 * 'school:opened' / 'school:closed'.
 */
export function createSchedule(game) {
  let lastMinute = -1, lesson = false, open = null;
  const isOpenAt = hour => hour >= schoolHours.open && hour < schoolHours.close;
  const opensAt = clock(schoolHours.open * 60);

  return {
    isLesson:() => lesson,
    /** True during school hours. */
    isSchoolOpen:() => isOpenAt(game.sky.hour()),
    opensAt,
    update(playing) {
      const nowOpen = isOpenAt(game.sky.hour());
      if (nowOpen !== open) {
        const first = open === null;
        open = nowOpen;
        if (!first) {
          game.notice(open ? 'Mokykla atidaryta' : 'Mokykla uždaryta iki ' + opensAt);
          game.bus.emit(open ? 'school:opened' : 'school:closed');
        }
        game.npcs?.refreshSchedule();
      }
      const minute = game.sky.minute();
      if (!playing || minute === lastMinute) return;
      lastMinute = minute;
      lesson = lessons.some(([start, end]) => minute >= start && minute < end);
      game.combat.setLesson(lesson);
      game.bus.emit('time:minute', {minute});
      const boundary = lessons.find(([start, end]) => minute === start || minute === end);
      if (boundary) {
        const starts = minute === boundary[0];
        game.audio.play('bell');
        game.notice(starts ? 'Skambutis · Prasideda pamoka' : 'Skambutis · Pamoka baigėsi');
        game.bus.emit('school:bell', {lesson:lessons.indexOf(boundary) + 1, starts});
      }
    },
  };
}
