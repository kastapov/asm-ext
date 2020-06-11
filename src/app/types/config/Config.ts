import { PoolingIntervalEnum } from './PoolingIntervalEnum';
import { PageEnum } from './PageEnum';
import { ChartTypeEnum } from './ChartTypeEnum';
import { ObservingPeriod } from './ObservingPeriod';
import { ObservingPeriods } from './ObservingPeriods';

export class Config {
  poolingInterval: PoolingIntervalEnum;
  defaultPage: PageEnum;
  statChartType: ChartTypeEnum;
  monitorChartType: ChartTypeEnum;
  observingPeriod: ObservingPeriod;

  constructor() {
    this.poolingInterval = PoolingIntervalEnum.MINUTE;
    this.defaultPage = PageEnum.MONITORS;
    this.statChartType = ChartTypeEnum.HEATMAP;
    this.monitorChartType = ChartTypeEnum.PIE;
    this.observingPeriod = ObservingPeriods.ONE_HOUR;
  }
}
