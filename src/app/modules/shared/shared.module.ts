import { DialogOverlayDirective } from './components/dialog/dialog-overlay.directive';
import { DialogComponent } from './components/dialog/dialog.component';
import { TabBodyComponent } from './components/tab-body/tab-body.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { TabComponent } from './components/tab/tab.component';

@NgModule({
  imports: [CommonModule],
  exports: [
    ButtonComponent,
    TabComponent,
    TabBodyComponent,
    DialogComponent,
    DialogOverlayDirective,
  ],
  declarations: [
    ButtonComponent,
    TabComponent,
    TabBodyComponent,
    DialogComponent,
    DialogOverlayDirective,
  ],
})
export class SharedModule {}
