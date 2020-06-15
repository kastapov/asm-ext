import { HttpParams } from '@angular/common/http';
import { HttpEncoder } from '../core/encoder/htttp-encoder';

export class RequestParams {
  public toHttpParams(): HttpParams {
    let params: HttpParams = new HttpParams({encoder: new HttpEncoder()});
    for (let [key, value] of Object.entries(this)) {
      if (value !== undefined) {
        if (value instanceof Array) {
          debugger;
            params = params.append(`${String(key)}`, value.join(','));
        } else {
          params = params.append(String(key), String(value));
        }
      }
    }
    return params;
  }
}
