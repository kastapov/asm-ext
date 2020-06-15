import { Component, Input, OnInit } from '@angular/core';
import { ChartTypeEnum } from '../../../../types/config/ChartTypeEnum';
import { IStatistic } from '../../../../types/statistic/IStatistic';
import { ChartOptions } from '../../../../types/chart/ChartOptions';

@Component({
  selector: 'app-fullsize-chart',
  templateUrl: './fullsize-chart.component.html',
  styleUrls: ['./fullsize-chart.component.scss']
})
export class FullsizeChartComponent implements OnInit {
  @Input() chartType: ChartTypeEnum
  @Input() stats: Array<IStatistic>
  options: Partial<ChartOptions>;

  constructor() { }

  ngOnInit(): void {
    this.options = {
      chart: {
        width: '100%',
        height: 290
      },
    }
  }

}
