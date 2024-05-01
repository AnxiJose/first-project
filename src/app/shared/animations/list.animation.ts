import { trigger, style,query,stagger, state, transition, animate } from '@angular/animations';

export const ListAnimation = trigger('listAnimation', [
  transition('* <=> *', [
    query(':enter', style({ opacity: 0, transform: 'translateY(-15px)' }), { optional: true }),
    query(':enter', stagger('50ms', [
      animate('550ms ease-out', style({ opacity: 1, transform: 'none' }))
    ]), { optional: true }),
    query(':leave', stagger('50ms', [
      animate('550ms ease-in', style({ opacity: 0, transform: 'translateY(-15px)' }))
    ]), { optional: true })
  ])
])
