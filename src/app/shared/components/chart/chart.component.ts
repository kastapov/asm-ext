import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { ChartComponent as ApexChartComponent } from 'ng-apexcharts';
import * as _ from 'lodash';
import { ChartOptions } from '../../../types/chart/ChartOptions';
import { ChartTypeEnum } from '../../../types/config/ChartTypeEnum';
import { IStatistic } from '../../../types/statistic/IStatistic';
import { HeatMapSeriesDataTransformer } from './transformer/HeatMapSeriesDataTransformer';
import { ITransformer } from './transformer/ITransformer';
import { HeatMapOptions } from './configuration/HeatMapOptions';
import { SeriesChartOptions } from './configuration/SeriesChartOptions';
import { GeneralOptions } from './configuration/GeneralOptions';
import { GaugePointDataTransformer } from './transformer/GaugePointDataTransformer';
import { GaugeOptions } from './configuration/GaugeOptions';
import { AreaOptions } from './configuration/AreaOptions';
import { AreaSeriesDataTransformer } from './transformer/AreaSeriesDataTransformer';
import { ActivityGaugeSeriesDataTransformer } from './transformer/ActivityGaugeSeriesDataTransformer';
import { ActivityGaugeOptions } from './configuration/ActivityGaugeOptions';

@Component({
  selector: 'app-chart',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit, OnChanges {
  @ViewChild(ApexChartComponent) chart: ApexChartComponent;
  @Input() chartType: ChartTypeEnum
  @Input() stats: Array<IStatistic>
  @Input() inputOptions: Partial<ChartOptions>;
  public chartOptions: Partial<ChartOptions> = {};

  constructor() {
  }

  ngOnInit() {
    const options = _.merge(this.generateOptions(), this.inputOptions);
    const seriesTransformer: ITransformer = this.getTransformerForSeries();
    options.series = seriesTransformer.transformData(this.stats);
    this.chartOptions = options;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.stats?.currentValue) {
      const options = _.merge(this.generateOptions(), this.inputOptions);
      const seriesTransformer: ITransformer = this.getTransformerForSeries();
      options.series = seriesTransformer.transformData(changes.stats.currentValue);
      this.chartOptions = options;
    }
  }

  private generateOptions(chartType = this.chartType) {
    let options: Array<Partial<ChartOptions>> = []
    switch (chartType) {
      case ChartTypeEnum.HEATMAP:
        options = [{...SeriesChartOptions}, {...HeatMapOptions}];
        break
      case ChartTypeEnum.STACKED_BAR:
        options = [{...SeriesChartOptions}, {...AreaOptions}];
        break
      case ChartTypeEnum.GAUGE:
        options = [{...GaugeOptions}];
        break
      case ChartTypeEnum.ACTIVITY_GAUGE:
        options = [{...SeriesChartOptions}, {...ActivityGaugeOptions}];
        break
    }
    return _.merge({...GeneralOptions}, ...options, {...this.inputOptions});
  }

  private getTransformerForSeries(chartType = this.chartType): ITransformer {
    switch (chartType) {
      case ChartTypeEnum.HEATMAP:
        return new HeatMapSeriesDataTransformer();
      case ChartTypeEnum.GAUGE:
        return new GaugePointDataTransformer();
      case ChartTypeEnum.ACTIVITY_GAUGE:
        return new ActivityGaugeSeriesDataTransformer();
      case ChartTypeEnum.STACKED_BAR:
        return new AreaSeriesDataTransformer();
    }
  }
}
