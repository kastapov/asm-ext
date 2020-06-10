import {NgModule} from "@angular/core";
import { CommonModule } from '@angular/common';
import { MaterialModule } from './components/material/material.module';
import { LogoComponent } from './layout/logo/logo.component';
import { SpinnerComponent } from './layout/spinner/spinner.component';
import { HeaderComponent } from './layout/header/header.component';
import { MenuComponent } from './layout/header/menu/menu.component';
import { RouterModule } from '@angular/router';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
  ],
  exports: [
    MaterialModule,
    LogoComponent,
    HeaderComponent
  ],
  declarations: [LogoComponent, SpinnerComponent, HeaderComponent, MenuComponent, MainLayoutComponent],
})
export class SharedModule { }
