import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_BASE } from '../../../background/config';
import { LogsRequest } from '../../types/LogsRequest';
import { interval, Observable, Subscription } from 'rxjs';
import { startWith, switchMap } from 'rxjs/operators';
import { ILogEntry } from '../../types/ILogEntry';
import { DateUtil } from '../../util/date-util';

@Injectable({
  providedIn: 'root'
})
export class LogsService {
  private observable$: Observable<Array<ILogEntry>>;
  constructor(private http: HttpClient) { }

  public getLogsObservable(): Observable<Array<ILogEntry>> {
    if (!this.observable$) {
      this.observable$ = interval(60000)
        .pipe(
          startWith(0),
          switchMap(() => this.loadLogs())
        );
    }
    return this.observable$;
  }

  private loadLogs(): Observable<Array<ILogEntry>> {
    const lastHour = DateUtil.getDateSubHours(2);
    const today = DateUtil.getTodayDate();
    const request = new LogsRequest(lastHour, today);
    return this.http.get<Array<ILogEntry>>(`${API_BASE}/log`, { params: request.toHttpParams() });
  }
}
