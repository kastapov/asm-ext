import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './components/material/material.module';
import { LogoComponent } from './layout/logo/logo.component';
import { SpinnerComponent } from './layout/spinner/spinner.component';
import { HeaderComponent } from './layout/header/header.component';
import { MenuComponent } from './layout/header/menu/menu.component';
import { RouterModule } from '@angular/router';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { ChartComponent } from './components/chart/chart.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgApexchartsModule } from 'ng-apexcharts';
import { FullsizeChartComponent } from './components/chart/fullsize-chart/fullsize-chart.component';
import { SimpleChartComponent } from './components/chart/simple-chart/simple-chart.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgApexchartsModule,
  ],
  exports: [
    MaterialModule,
    LogoComponent,
    HeaderComponent,
    SpinnerComponent,
    ChartComponent,
    SimpleChartComponent,
    FullsizeChartComponent
  ],
  declarations: [
    LogoComponent,
    SpinnerComponent,
    HeaderComponent,
    MenuComponent,
    MainLayoutComponent,
    ChartComponent,
    FullsizeChartComponent,
    SimpleChartComponent
  ],
})
export class SharedModule {
}
