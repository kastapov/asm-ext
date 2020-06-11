import { Injectable } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { startWith, switchMap } from 'rxjs/operators';
import { DateUtil } from '../../util/date-util';
import { API_BASE } from '../../../background/config';
import { IStatistic } from '../../types/statistic/IStatistic';
import { StatisticRequest } from '../../types/statistic/StatisticRequest';
import { ConfigService } from '../../core/service/config.service';
import { PeriodEnum } from '../../types/config/PeriodEnum';
import { Router } from '@angular/router';
import { PageEnum } from '../../types/config/PageEnum';
import { ChartTypeEnum } from '../../types/config/ChartTypeEnum';

@Injectable({
  providedIn: 'root'
})
export class StatService {

  constructor(private http: HttpClient, private configService: ConfigService, private router: Router) {
  }

  public getObservable(): Observable<Array<IStatistic>> {
    return interval(this.configService.config.poolingInterval)
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
    const chartType: ChartTypeEnum = this.getChartType();
    switch (chartType) {
      case ChartTypeEnum.HEATMAP:
      case ChartTypeEnum.LINE:
        return  this.createRequestForSeries();
      case ChartTypeEnum.PIE:
        return  this.createRequestForPoint();
    }
  }

  private getChartType(): ChartTypeEnum {
    if (this.router.url === `/${PageEnum.MONITORS}`) {
      return this.configService.config.monitorChartType
    } else {
      return this.configService.config.statChartType
    }
  }

  private createRequestForSeries(): StatisticRequest {
    const period: PeriodEnum = this.configService.config.observingPeriod.period;
    const dateFrom = DateUtil.getDateSubMinutesISO(this.configService.config.observingPeriod.duration);
    return new StatisticRequest(dateFrom, period).groupRequest.MONITOR();
  }

  private createRequestForPoint(): StatisticRequest {
    const dateFrom = DateUtil.getDateSubMinutesISO(this.configService.config.observingPeriod.duration);
    return new StatisticRequest(dateFrom, undefined).groupRequest.MONITOR();
  }
}
