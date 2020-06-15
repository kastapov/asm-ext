import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { StatService } from './stat.service';
import { IStatistic } from '../../types/statistic/IStatistic';
import { ConfigService } from '../../core/service/config.service';
import { StatConfig } from '../../types/config/StatConfig';
import { MetricEnum } from '../../types/config/MetricEnum';
import { ChartTypeEnum } from '../../types/config/ChartTypeEnum';

@Component({
  selector: 'app-stat',
  templateUrl: './stat.component.html',
  styleUrls: ['./stat.component.scss']
})
export class StatComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  statistic: Array<IStatistic>;
  statConfig: StatConfig;
  chartType: ChartTypeEnum;

  constructor(private statService: StatService, private configService: ConfigService) {
  }

  ngOnInit(): void {
    this.initSubscription();
    this.statConfig = this.configService.config.statConfig;
    this.chartType = this.getChartType();
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  getChartType() {
    if (this.statConfig.metric === MetricEnum.PERFORMANCE) {
      return this.statConfig.performanceChartType;
    }
    return this.statConfig.upStatusChartType;
  }

  onConfigChanged() {
    this.subscription.unsubscribe();
    this.chartType = this.getChartType();
    this.initSubscription();
  }

  private initSubscription() {
    this.subscription = this.statService.getObservableInterval().subscribe(statistic => {
      this.statistic = statistic;
    });
  }
}
