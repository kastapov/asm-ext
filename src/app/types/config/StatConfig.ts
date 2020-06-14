import { MetricEnum } from './MetricEnum';
import { ChartTypeEnum } from './ChartTypeEnum';

export class StatConfig {
  metric: MetricEnum;
  upStatusChartType: ChartTypeEnum;
  performanceChartType: ChartTypeEnum;

  constructor() {
    this.metric = MetricEnum.UP_STATUS;
    this.upStatusChartType = ChartTypeEnum.HEATMAP;
    this.performanceChartType = ChartTypeEnum.STACKED_BAR;
  }
}
