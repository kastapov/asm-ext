import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { interval, Observable } from 'rxjs';
import { startWith, switchMap } from 'rxjs/operators';
import { ILog } from '../../types/log/ILog';
import { LogsRequest } from '../../types/log/LogsRequest';
import { ConfigService } from '../../core/service/config.service';
import { API_BASE } from '../../../background/common';

@Injectable({
  providedIn: 'root'
})
export class LogsService {
  private observable$: Observable<Array<ILog>>;

  constructor(private http: HttpClient, private configService: ConfigService) { }

  public getObservable(): Observable<Array<ILog>> {
    if (!this.observable$) {
      this.observable$ = interval(this.configService.config.pollingInterval)
        .pipe(
          startWith(0),
          switchMap(() => this.loadLogs())
        );
    }
    return this.observable$;
  }

  private loadLogs(): Observable<Array<ILog>> {
    const logsLimit: number = this.configService.config.logsLimit;
    const monitors: Array<string|number> = this.configService.config.monitorsList;
    const request = new LogsRequest(logsLimit, monitors);
    return this.http.get<Array<ILog>>(`${API_BASE}/log?`, { params: request.toHttpParams() });
  }
}
