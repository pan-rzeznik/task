import { Component, ChangeDetectionStrategy } from '@angular/core';
import { SidenavState } from './components/top-bar/top-bar.component';
import { sidenavAnimation } from '../shared/animations/sidenav-animation';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [sidenavAnimation],
})
export class DashboardComponent {
  sidenavSateEnum = SidenavState;
  sidenavSate = SidenavState.close;

  sidenavToggle(): void {
    this.sidenavSate =
      this.sidenavSate === SidenavState.open
        ? SidenavState.close
        : SidenavState.open;
  }
}
