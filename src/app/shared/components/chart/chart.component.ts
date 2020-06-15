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
      const seriesTransformer: ITransformer = this.getTransformerForSeries();
      this.chartOptions.series = seriesTransformer.transformData(changes.stats.currentValue);
    }
    if (changes.chartType?.currentValue) {
      const options = _.merge(this.generateOptions(changes.chartType.currentValue), this.inputOptions);
      this.chartOptions.chart = options.chart;
    }
  }

  private generateOptions(chartType = this.chartType) {
    let options: Array<Partial<ChartOptions>> = []
    switch (this.chartType) {
      case ChartTypeEnum.HEATMAP:
        options = [SeriesChartOptions, HeatMapOptions];
        break
      case ChartTypeEnum.STACKED_BAR:
        options = [SeriesChartOptions, HeatMapOptions];
        break
      case ChartTypeEnum.GAUGE:
        options = [GaugeOptions];
        break
      case ChartTypeEnum.ACTIVITY_GAUGE:
        options = [SeriesChartOptions, HeatMapOptions];
        break
    }
    return _.merge(GeneralOptions, ...options, this.inputOptions);
  }

  private getTransformerForSeries(): ITransformer {
    switch (this.chartType) {
      case ChartTypeEnum.HEATMAP:
        return new HeatMapSeriesDataTransformer();
      case ChartTypeEnum.GAUGE:
        return new GaugePointDataTransformer();
      case ChartTypeEnum.ACTIVITY_GAUGE:
        return new HeatMapSeriesDataTransformer();
      case ChartTypeEnum.STACKED_BAR:
        return new HeatMapSeriesDataTransformer();
    }
  }
}
