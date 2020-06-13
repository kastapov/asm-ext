import { Injectable } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { startWith, switchMap } from 'rxjs/operators';
import { DateUtil } from '../../util/date-util';
import { IStatistic } from '../../types/statistic/IStatistic';
import { StatisticRequest } from '../../types/statistic/StatisticRequest';
import { ConfigService } from '../../core/service/config.service';
import { PeriodEnum } from '../../types/config/PeriodEnum';
import { Router } from '@angular/router';
import { PageEnum } from '../../types/config/PageEnum';
import { ChartTypeEnum } from '../../types/config/ChartTypeEnum';
import { API_BASE } from '../../../background/common';
import { ObservingPeriodsMapping } from '../../types/config/ObservingPeriodsMapping';

@Injectable({
  providedIn: 'root'
})
export class StatService {

  constructor(private http: HttpClient, private configService: ConfigService, private router: Router) {
  }

  public getObservable(): Observable<Array<IStatistic>> {
    return interval(this.configService.config.pollingInterval)
      .pipe(
        startWith(0),
        switchMap(() => this.loadStatistic())
      );
  }

  private loadStatistic(): Observable<Array<IStatistic>> {
    const request = this.createRequest();
    return this.http.get<Array<IStatistic>>(`${API_BASE}/statistic`, {params: request.toHttpParams()});
  }

  createRequest(): StatisticRequest {
    const chartType: ChartTypeEnum = this.isStatForMonitors() ?
      this.configService.config.monitorChartType : this.configService.config.statChartType;
    const monitors: Array<number|string> = this.isStatForMonitors() ? undefined : this.configService.config.monitorsList;
    switch (chartType) {
      case ChartTypeEnum.HEATMAP:
      case ChartTypeEnum.LINE:
      case ChartTypeEnum.BAR:
        return  this.createRequestForSeries(monitors);
      case ChartTypeEnum.PIE:
      case ChartTypeEnum.GAUGE:
        return  this.createRequestForPoint(monitors);
    }
  }

  private isStatForMonitors(): boolean {
    return this.router.url === `/${PageEnum.MONITORS}`;
  }

  private createRequestForSeries(monitors: Array<number|string>): StatisticRequest {
    const period: PeriodEnum = ObservingPeriodsMapping[this.configService.config.observingDuration];
    const dateFrom = DateUtil.getDateSubMinutesISO(this.configService.config.observingDuration);
    return new StatisticRequest(dateFrom, period, monitors).groupRequest.MONITOR();
  }

  private createRequestForPoint(monitors: Array<number|string>): StatisticRequest {
    const dateFrom = DateUtil.getDateSubMinutesISO(this.configService.config.observingDuration);
    return new StatisticRequest(dateFrom, undefined, monitors).groupRequest.MONITOR();
  }
}
