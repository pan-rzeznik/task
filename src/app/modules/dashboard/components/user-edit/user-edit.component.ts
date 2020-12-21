import { Component, ChangeDetectionStrategy } from '@angular/core';
import { DialogService } from 'src/app/modules/shared/components/dialog/dialog.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserEditComponent {
  tableContent = ['Script', 'Props', 'Scenes', 'Money', 'Stunts'];

  constructor(private readonly dialogService: DialogService) {}

  confirmDialog(): void {
    this.dialogService.appendDialogComponentToBody();
  }
}
