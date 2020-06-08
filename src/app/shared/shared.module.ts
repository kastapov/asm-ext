import {NgModule} from "@angular/core";
import { CommonModule } from '@angular/common';
import { MaterialModule } from './components/material/material.module';
import { LogoComponent } from './layout/logo/logo.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    MaterialModule,
    LogoComponent
  ],
  declarations: [LogoComponent],
})
export class SharedModule { }
