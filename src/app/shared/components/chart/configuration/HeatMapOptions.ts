import { ChartOptions } from '../../../../types/chart/ChartOptions';

export const HeatMapOptions: Partial<ChartOptions> = {
  chart: {
    type: 'heatmap',
  },
  plotOptions: {
    heatmap: {
      enableShades: false,
      colorScale: {
        ranges: [
          {
            from: 0,
            to: 0,
            color: "#F44336"
          },
          {
            from: 1,
            to: 69,
            color: "#FF6F00"
          },
          {
            from: 70,
            to: 98,
            color: "#FDD835"
          },
          {
            from: 99,
            to: 100,
            color: "#4CAF50"
          }
        ]
      }
    }
  },
  dataLabels: {
    enabled: false
  },
}
