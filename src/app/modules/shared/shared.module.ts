import { TableComponent } from './components/table/table.component';
import { TabBodyComponent } from './components/tab-body/tab-body.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { TabComponent } from './components/tab/tab.component';

@NgModule({
  imports: [CommonModule],
  exports: [ButtonComponent, TabComponent, TabBodyComponent, TableComponent],
  declarations: [
    ButtonComponent,
    TabComponent,
    TabBodyComponent,
    TableComponent,
  ],
})
export class SharedModule {}
