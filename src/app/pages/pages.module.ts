import {NgModule} from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { WidgetComponent } from './widget/widget.component';
import { SharedModule } from '../shared/shared.module';
import { LogsComponent } from './logs/logs.component';
import { MonitorsComponent } from './monitors/monitors.component';
import { LogEntryComponent } from './logs/log-entry/log-entry.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
  ],
  exports: [
  ],
  declarations: [
    LoginComponent,
    WidgetComponent,
    LogsComponent,
    MonitorsComponent,
    LogEntryComponent
  ],
})
export class PagesModule { }
