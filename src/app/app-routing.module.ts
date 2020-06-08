import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WidgetComponent } from './pages/widget/widget.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuardService } from './core/auth/auth-guard.service';


const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'widget',
    component: WidgetComponent,
    canActivate: [AuthGuardService]
  },
  {path: '**', redirectTo: '/widget'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
