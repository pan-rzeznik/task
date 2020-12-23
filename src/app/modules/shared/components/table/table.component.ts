import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { FormArray, FormBuilder, AbstractControl } from '@angular/forms';

export interface TableObject {
  rowName: string;
  nestedRows: {
    name: string;
    state: boolean;
  }[];
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableComponent {
  dataSource = new FormArray([]);

  @Input() set tableData(value: TableObject[]) {
    value.forEach((obj: TableObject) => {
      this.dataSource.push(
        this.fb.group({
          rowName: obj.rowName,
          nestedRows: this.createNestedFormArray(obj.nestedRows) as FormArray,
        })
      );
    });
  }
  @Input() tableColumns: string[];
  constructor(private readonly fb: FormBuilder) {}

  // Fix for type checking in template
  getNestedControls(row: AbstractControl | null): AbstractControl[] {
    return (row?.get('nestedRows') as FormArray)?.controls;
  }

  toggleState(control: AbstractControl | null): void {
    const state = control?.value;
    control?.setValue(!state);
  }
  private createNestedFormArray(nestedRows: any[]): FormArray {
    const array = new FormArray([]);
    nestedRows.forEach((o) => {
      array.push(
        this.fb.group({
          name: o.name,
          state: o.state,
        })
      );
    });
    return array;
  }
}
