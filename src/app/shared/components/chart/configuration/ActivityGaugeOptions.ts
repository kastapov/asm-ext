import { ChartOptions } from '../../../../types/chart/ChartOptions';

export const ActivityGaugeOptions: Partial<ChartOptions> = {
  chart: {
    type: "radialBar"
  },
  plotOptions: {
    radialBar: {
    }
  },
  dataLabels: {
    enabled: true,
    formatter: function (val, opts) {
      return opts.w.config.series[opts.seriesIndex]
    },
  },
  labels: ["Resolve", "Connect", "Processing", "Transfer"]
}
