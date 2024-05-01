
import { trigger, style, state, transition, animate } from '@angular/animations';

export const SlideAnimation = trigger('slideInOut', [
  transition(':enter', [
    style({ transform: 'translateY(-100%)' }),
    animate('2s ease-in', style({ transform: 'translateY(0%)' }))
  ]),
  transition(':leave', [
    animate('2s ease-out', style({ transform: 'translateY(-100%)' }))
  ])
]);
