import { Component, Input, OnInit } from '@angular/core';
import { ChartTypeEnum } from '../../../../types/config/ChartTypeEnum';
import { IStatistic } from '../../../../types/statistic/IStatistic';
import { ChartOptions } from '../../../../types/chart/ChartOptions';


@Component({
  selector: 'app-simple-chart',
  templateUrl: './simple-chart.component.html',
  styleUrls: ['./simple-chart.component.scss']
})
export class SimpleChartComponent implements OnInit {
  @Input() chartType: ChartTypeEnum
  @Input() stats: Array<IStatistic>
  options: Partial<ChartOptions>;

  constructor() {
  }

  ngOnInit(): void {
    this.options = {
      chart: {
        height: 15,
        toolbar: {
          show: false
        },
        sparkline: {
          enabled: true
        }
      },
      yaxis: {
        labels: {
          show: false,
        }
      },
      xaxis: {
        labels: {
          show: false,
        }
      },
    }
  }
}
