import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_BASE } from '../../../background/config';
import { interval, Observable } from 'rxjs';
import { startWith, switchMap } from 'rxjs/operators';
import { DateUtil } from '../../util/date-util';
import { ILog } from '../../types/log/ILog';
import { LogsRequest } from '../../types/log/LogsRequest';

@Injectable({
  providedIn: 'root'
})
export class LogsService {
  private observable$: Observable<Array<ILog>>;

  constructor(private http: HttpClient) { }

  public getObservable(): Observable<Array<ILog>> {
    if (!this.observable$) {
      this.observable$ = interval(60000)
        .pipe(
          startWith(0),
          switchMap(() => this.loadLogs())
        );
    }
    return this.observable$;
  }

  private loadLogs(): Observable<Array<ILog>> {
    const lastHour = DateUtil.getDateSubHoursEncoded(2);
    const request = new LogsRequest(lastHour);
    return this.http.get<Array<ILog>>(`${API_BASE}/log?`, { params: request.toHttpParams() });
  }
}
