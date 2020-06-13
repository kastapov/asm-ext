import {NgModule} from "@angular/core";
import { CommonModule } from '@angular/common';
import { ReversePipe } from './pipe/reverse.pipe';
import { httpInterceptorProviders } from './interceptor';
import { EnumArrayPipe } from './pipe/enum-array.pipe';
import { ReplaceUnderscorePipe } from './pipe/replace-underscore.pipe';
import { MonitorsFilteringPipe } from './pipe/monitors-filtering.pipe';

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [
    ReversePipe,
    EnumArrayPipe,
    ReplaceUnderscorePipe,
    MonitorsFilteringPipe
  ],
  declarations: [ReversePipe, EnumArrayPipe, ReplaceUnderscorePipe, MonitorsFilteringPipe],
  providers: [httpInterceptorProviders],
})
export class CoreModule { }
