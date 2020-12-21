import {
  trigger,
  state,
  transition,
  animate,
  style,
} from '@angular/animations';

export const sidenavAnimation = trigger('sidenavAnimation', [
  state(
    'void',
    style({
      transform: 'translateX(-256px)',
      width: 0,
    })
  ),
  transition('* <=> void', animate('170ms ease-in')),
]);
