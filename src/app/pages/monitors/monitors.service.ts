import { Injectable } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { startWith, switchMap } from 'rxjs/operators';
import { IMonitor } from '../../types/monitor/IMonitor';
import { ConfigService } from '../../core/service/config.service';
import { API_BASE } from '../../../background/common';

@Injectable({
  providedIn: 'root'
})
export class MonitorsService {
  private observable$: Observable<Array<IMonitor>>;

  constructor(private http: HttpClient, private configService: ConfigService) { }

  public getObservable(): Observable<Array<IMonitor>> {
    if (!this.observable$) {
      this.observable$ = interval(this.configService.config.pollingInterval)
        .pipe(
          startWith(0),
          switchMap(() => this.loadMonitors())
        );
    }
    return this.observable$;
  }

  private loadMonitors(): Observable<Array<IMonitor>> {
    return this.http.get<Array<IMonitor>>(`${API_BASE}/monitors`);
  }
}
