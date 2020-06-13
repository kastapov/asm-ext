import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { StatComponent } from './stat/stat.component';
import { SharedModule } from '../shared/shared.module';
import { LogsComponent } from './logs/logs.component';
import { MonitorsComponent } from './monitors/monitors.component';
import { LogEntryComponent } from './logs/log-entry/log-entry.component';
import { MonitorEntryComponent } from './monitors/monitor-entry/monitor-entry.component';
import { MonitorsFiltersComponent } from './monitors/monitors-filters/monitors-filters.component';
import { CoreModule } from '../core/core.module';
import { ConfigComponent } from './config/config.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    CoreModule,
  ],
  exports: [],
  declarations: [
    LoginComponent,
    StatComponent,
    LogsComponent,
    MonitorsComponent,
    LogEntryComponent,
    MonitorEntryComponent,
    MonitorsFiltersComponent,
    ConfigComponent
  ],
})
export class PagesModule {
}
