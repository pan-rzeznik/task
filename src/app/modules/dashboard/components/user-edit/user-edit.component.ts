import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserEditComponent {
  tableContent = ['Script', 'Props', 'Scenes', 'Money', 'Stunts'];
}
