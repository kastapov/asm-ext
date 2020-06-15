import { MetricEnum } from './MetricEnum';
import { ChartTypeEnum } from './ChartTypeEnum';

export class StatConfig {
  metric: MetricEnum;
  upStatusChartType: ChartTypeEnum;
  performanceChartType: ChartTypeEnum;

  constructor() {
    this.metric = MetricEnum.UPTIME;
    this.upStatusChartType = ChartTypeEnum.HEATMAP;
    this.performanceChartType = ChartTypeEnum.STACKED_BAR;
  }
}
