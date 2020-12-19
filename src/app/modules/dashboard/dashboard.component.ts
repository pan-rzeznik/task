import { Component, OnInit } from '@angular/core';
import { SidenavState } from './components/top-bar/top-bar.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  sidenavSateEnum = SidenavState;
  sidenavSate = SidenavState.open;

  constructor() {}
  sidenavToggle(): void {
    this.sidenavSate =
      this.sidenavSate === SidenavState.open
        ? SidenavState.close
        : SidenavState.open;
  }
}
