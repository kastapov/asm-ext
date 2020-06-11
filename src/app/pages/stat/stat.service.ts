import { Injectable } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { startWith, switchMap } from 'rxjs/operators';
import { DateUtil } from '../../util/date-util';
import { API_BASE } from '../../../background/config';
import { IStatistic } from '../../types/statistic/IStatistic';
import { StatisticRequest } from '../../types/statistic/StatisticRequest';

@Injectable({
  providedIn: 'root'
})
export class StatService {
  private observable$: Observable<Array<IStatistic>>;
  constructor(private http: HttpClient) { }

  public getObservable(): Observable<Array<IStatistic>> {
    if (!this.observable$) {
      this.observable$ = interval(60000)
        .pipe(
          startWith(0),
          switchMap(() => this.loadStatistic())
        );
    }
    return this.observable$;
  }

  private loadStatistic(): Observable<Array<IStatistic>> {
    const lastHour = DateUtil.getDateSubHoursISO(2);
    const request = (new StatisticRequest(lastHour)).groupRequest.MONITOR();
    return this.http.get<Array<IStatistic>>(`${API_BASE}/statistic`, { params: request.toHttpParams() });
  }
}
