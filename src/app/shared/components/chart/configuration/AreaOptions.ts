import { ChartOptions } from '../../../../types/chart/ChartOptions';

export const AreaOptions: Partial<ChartOptions> = {
  chart: {
    type: "area",
    stacked: true,
  },
  fill: {
    type: 'gradient'
  },
  dataLabels: {
    enabled: false
  },
  legend: {
    show: false
  }
}
