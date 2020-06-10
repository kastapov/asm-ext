import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenizerInterceptor } from './tokenizer.interceptor.js';

export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: TokenizerInterceptor, multi: true },
];
