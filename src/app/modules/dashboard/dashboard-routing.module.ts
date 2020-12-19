import { SidenavComponent } from './components/sidenav/sidenav.component';
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
        path: 'users-list',
        component: SidenavComponent,
      },
      {
        path: 'user-edit',
        component: SidenavComponent,
      },
      {
        path: 'permmisions',
        component: SidenavComponent,
      },
      {
        path: 'settings',
        component: SidenavComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
