import { TextControlComponent } from './components/text-control/text-control.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MultiSelectControlComponent } from './components/multi-select-control/multi-select-control.component';
@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [TextControlComponent, MultiSelectControlComponent],
  exports: [TextControlComponent, MultiSelectControlComponent],
})
export class FormModule {}
