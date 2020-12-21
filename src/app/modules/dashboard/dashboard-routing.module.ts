import { SettingsComponent } from './components/settings/settings.component';
import { PermmisionsComponent } from './components/permmisions/permmisions.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { DashboardComponent } from './dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard',
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'user-edit',
      },
      {
        path: 'users-list',
        component: UsersListComponent,
      },
      {
        path: 'user-edit',
        component: UserEditComponent,
      },
      {
        path: 'permmisions',
        component: PermmisionsComponent,
      },
      {
        path: 'settings',
        component: SettingsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
