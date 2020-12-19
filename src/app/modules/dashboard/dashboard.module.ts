import { PermmisionsComponent } from './components/permmisions/permmisions.component';
import { SettingsComponent } from './components/settings/settings.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { TopBarComponent } from './components/top-bar/top-bar.component';

@NgModule({
  imports: [CommonModule, DashboardRoutingModule],
  declarations: [
    DashboardComponent,
    SidenavComponent,
    TopBarComponent,
    UserEditComponent,
    UsersListComponent,
    SettingsComponent,
    PermmisionsComponent,
  ],
})
export class DashboardModule {}
