import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WidgetComponent } from './pages/widget/widget.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuardService } from './core/auth/auth-guard.service';
import { LogsComponent } from './pages/logs/logs.component';
import { MonitorsComponent } from './pages/monitors/monitors.component';
import { MainLayoutComponent } from './shared/layout/main-layout/main-layout.component';


const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'widget',
    component: MainLayoutComponent,
    // canActivate: [AuthGuardService],
    children: [
      {path: '', component: WidgetComponent}
    ]
  },
  {
    path: 'logs',
    component: MainLayoutComponent,
    // canActivate: [AuthGuardService],
    children: [
      {path: '', component: LogsComponent}
    ]
  },
  {
    path: 'monitors',
    component: MainLayoutComponent,
    // canActivate: [AuthGuardService],
    children: [
      {path: '', component: MonitorsComponent}
    ]
  },
  {path: '**', redirectTo: '/widget'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
