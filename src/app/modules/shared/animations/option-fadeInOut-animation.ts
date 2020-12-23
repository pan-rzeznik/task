import {
  trigger,
  state,
  transition,
  animate,
  style,
} from '@angular/animations';

export const optionFadeInOut = trigger('optionFadeInOut', [
  state(
    'void',
    style({
      opacity: 0,
    })
  ),
  transition('* <=> void', animate('220ms ease-in')),
]);
