import { trigger, style, state, transition, animate } from '@angular/animations';

export const toggleSelectionShiftAnimation = trigger('toggleSelectionShiftAnimation', [
  state('*', style({ transform: 'translateX({{ shift }}%)' }), { params: { shift: 0 } }), // Dynamic translation
  transition('* => *', [animate('0.3s')])
]);
