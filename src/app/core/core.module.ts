import {NgModule} from "@angular/core";
import { CommonModule } from '@angular/common';
import { ReversePipe } from './pipe/reverse-pipe';
import { httpInterceptorProviders } from './interceptor';

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [
    ReversePipe
  ],
  declarations: [ReversePipe],
  providers: [httpInterceptorProviders],
})
export class CoreModule { }
