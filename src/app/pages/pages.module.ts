import {NgModule} from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { WidgetComponent } from './widget/widget.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule
  ],
  exports: [
    LoginComponent,
    WidgetComponent
  ],
  declarations: [
    LoginComponent,
    WidgetComponent
  ],
})
export class PagesModule { }
