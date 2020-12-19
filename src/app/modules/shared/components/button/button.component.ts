import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  buttonColor = '';

  @Input() set color(value: string) {
    this.buttonColor = `var(--${value})`;
  }
}
