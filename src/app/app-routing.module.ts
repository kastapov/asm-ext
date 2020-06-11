import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StatComponent } from './pages/stat/stat.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuardService } from './core/guard/auth-guard.service';
import { LogsComponent } from './pages/logs/logs.component';
import { MonitorsComponent } from './pages/monitors/monitors.component';
import { MainLayoutComponent } from './shared/layout/main-layout/main-layout.component';
import { ConfigComponent } from './pages/config/config.component';
import { ConfigResolver } from './core/resolver/config-resolver';
import { PageEnum } from './types/config/PageEnum';


const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    component: MainLayoutComponent,
    canActivate: [AuthGuardService],
    children: [
      {
        path: PageEnum.STAT,
        component: StatComponent
      },
      {
        path: PageEnum.LOGS,
        component: LogsComponent
      },
      {
        path: PageEnum.MONITORS,
        component: MonitorsComponent
      },
      {
        path: PageEnum.CONFIG,
        component: ConfigComponent
      },
    ],
    resolve: {
      data: ConfigResolver
    }
  },
  {path: '**', redirectTo: PageEnum.STAT}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
