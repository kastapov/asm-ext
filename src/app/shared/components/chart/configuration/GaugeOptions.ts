import { ChartOptions } from '../../../../types/chart/ChartOptions';

export const GaugeOptions: Partial<ChartOptions> = {
  chart: {
    height: 350,
    type: "radialBar"
  },
  plotOptions: {
    radialBar: {
      hollow: {
        size: "70%"
      }
    }
  },
  labels: ["Average Uptime"]
}
