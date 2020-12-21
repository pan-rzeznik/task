import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
} from '@angular/core';

export enum SidenavState {
  open = 1,
  close,
}
@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopBarComponent {
  sidenavSate = SidenavState.close;
  sidenavStateEnum = SidenavState;
  @Output() sidenavToggle = new EventEmitter<SidenavState>();

  constructor() {}

  toggleSidenav(): void {
    this.sidenavSate =
      this.sidenavSate === SidenavState.open
        ? SidenavState.close
        : SidenavState.open;
    this.sidenavToggle.emit(this.sidenavSate);
  }
}
