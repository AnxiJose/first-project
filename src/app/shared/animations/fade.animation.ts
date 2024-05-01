import { trigger, style, state, transition, animate } from '@angular/animations';

export const FadeAnimation = trigger('fadeInOut', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate('1s ease-out', style({ opacity: 1 })),
  ]),
  transition(':leave', [
    animate('1s ease-in', style({ opacity: 0 })),
  ])
]);
