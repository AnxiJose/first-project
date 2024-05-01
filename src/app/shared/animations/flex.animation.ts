import { trigger, style, state, transition, animate } from '@angular/animations';

export const FlexAnimation = trigger('flexAnimation', [
  state('void', style({ opacity: 0, transform: 'scale(0.8)' })),
  transition('void <=> *', animate('300ms')),
]);
