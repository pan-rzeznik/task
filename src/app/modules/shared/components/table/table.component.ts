import {
  Component,
  Input,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from '@angular/core';
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
          nestedRows: this.createNestedFormArray(obj.nestedRows),
        })
      );
    });
    console.log(this.dataSource);
  }
  @Input() tableColumns: string[];
  constructor(private readonly fb: FormBuilder) {}
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
