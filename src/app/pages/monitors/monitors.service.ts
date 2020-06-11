import { Injectable } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { startWith, switchMap } from 'rxjs/operators';
import { API_BASE } from '../../../background/config';
import { IMonitor } from '../../types/monitor/IMonitor';
import { MonitorEntry } from '../../types/monitor/MonitorEntry';

@Injectable({
  providedIn: 'root'
})
export class MonitorsService {
  private observable$: Observable<Array<IMonitor>>;
  private _watchlist: [];

  constructor(private http: HttpClient) { }

  public getObservable(): Observable<Array<IMonitor>> {
    if (!this.observable$) {
      this.observable$ = interval(60000)
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


  get watchlist(): [] {
    return this._watchlist;
  }
}
