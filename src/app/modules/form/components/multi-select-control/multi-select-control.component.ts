import {
  Component,
  ChangeDetectorRef,
  Input,
  Renderer2,
  ViewChild,
  ChangeDetectionStrategy,
  OnInit,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { optionFadeInOut } from 'src/app/modules/shared/animations/option-fadeInOut-animation';

@Component({
  selector: 'app-multi-select-control',
  templateUrl: './multi-select-control.component.html',
  styleUrls: ['./multi-select-control.component.scss'],
  animations: [optionFadeInOut],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MultiSelectControlComponent {
  private _dataSource: any[];
  labelUp = false;
  listener: () => void;
  filteredData: any[];
  emptyPlaceholder = 'Brak danych';
  optionsOpen = false;
  value: any[] = [];

  @Input() displayProperty: string;
  @Input() label: string;
  @Input() set formControl(value: FormControl) {
    if (value.value.length > 0) {
      this.value = value.value;
      this.labelUp = true;
    }
  }
  @Input() set dataSource(value: any[]) {
    this._dataSource = value;
    this.setDefaultFilteredDataValue();
  }
  @ViewChild('input') input: any;

  constructor(
    private readonly renderer: Renderer2,
    private readonly cd: ChangeDetectorRef
  ) {}

  checkIfSelected(option: any): boolean | void {
    const index = this.value.findIndex(
      (el) => el[this.displayProperty] === option[this.displayProperty]
    );
    if (index !== -1) {
      return true;
    }
  }

  toggleOptionState(index: number): void {
    const option = this.filteredData[index];
    const idx = this.value.findIndex(
      (el) => el[this.displayProperty] === option[this.displayProperty]
    );
    if (idx !== -1) {
      this.value.splice(idx, 1);
    } else {
      this.value.push(option);
    }
    this.resetControl();
  }

  openPopoupWithOptions(event: Event): void {
    if (this.optionsOpen) {
      return;
    }
    this.labelUp = true;
    this.optionsOpen = true;
    setTimeout(() => {
      if (this.listener) {
        this.listener();
      }
      this.setClickListener();
    });
  }

  setClickListener(): void {
    this.listener = this.renderer.listen(document, 'click', (event) => {
      this.toggleOptionsPopup(event);
    });
  }

  removeChips(e: Event, index: number): void {
    e.stopPropagation();
    this.value.splice(index, 1);
    if (this.value.length === 0 && !this.optionsOpen) {
      this.labelUp = false;
    }
  }

  filter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    if (filterValue === '') {
      this.setDefaultFilteredDataValue();
      return;
    }
    this.filteredData = [];
    this._dataSource.forEach((e) => {
      if (e[this.displayProperty].includes(filterValue)) {
        this.filteredData.push(e);
      }
    });
  }

  private resetControl(): void {
    (this.input.nativeElement as HTMLInputElement).value = '';
    this.filteredData = this._dataSource;
  }

  private setDefaultFilteredDataValue(): void {
    this.filteredData = this._dataSource;
  }

  private toggleOptionsPopup(event: Event): void {
    const composedPath = Array.from(event.composedPath());
    if (
      composedPath.some(
        (el: any) => el?.nodeName === 'APP-MULTI-SELECT-CONTROL'
      )
    ) {
      return;
    }
    this.optionsOpen = false;
    if (this.value.length === 0) {
      this.labelUp = false;
    }
    this.listener();
    this.cd.markForCheck();
  }
}
