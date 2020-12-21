import { TextControlComponent } from './components/text-control/text-control.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [TextControlComponent],
  exports: [TextControlComponent],
})
export class FormModule {}
