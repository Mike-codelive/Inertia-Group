import { gsap } from 'gsap';

export const masterTimeline = gsap.timeline({
  paused: true,
});

masterTimeline
  .addLabel('introStart')
  .addLabel('introEnd')
  .addLabel('heroStart')
  .addLabel('heroEnd');
