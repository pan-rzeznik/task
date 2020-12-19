import { Component, OnInit, Output, EventEmitter } from '@angular/core';

export enum SidenavState {
  open = 1,
  close,
}
@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
})
export class TopBarComponent {
  sidenavSate = SidenavState.open;
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
