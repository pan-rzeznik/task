import {
  Component,
  Input,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from '@angular/core';

@Component({
  selector: 'app-tab-body',
  templateUrl: './tab-body.component.html',
  styleUrls: ['./tab-body.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabBodyComponent {
  tabVisible = false;

  @Input() disabled: boolean;
  @Input() label: string;

  constructor(private readonly cd: ChangeDetectorRef) {}

  changeTabVisibility(state: boolean): void {
    this.tabVisible = state;
    this.cd.markForCheck();
  }
}
