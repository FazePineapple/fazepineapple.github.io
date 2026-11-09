import {lessons} from '../../content/schedule.js';

/**
 * School day clock: rings the bell at lesson boundaries, sends student bots
 * inside during lessons and emits 'time:minute' and 'school:bell'.
 */
export function createSchedule(game) {
  let lastMinute = -1, lesson = false;
  return {
    isLesson:() => lesson,
    update(playing) {
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
        game.notice(starts ? 'School bell · Lesson starts' : 'School bell · Lesson ends');
        game.bus.emit('school:bell', {lesson:lessons.indexOf(boundary) + 1, starts});
      }
    },
  };
}
