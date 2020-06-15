import { ChartOptions } from '../../../../types/chart/ChartOptions';

export const ActivityGaugeOptions: Partial<ChartOptions> = {
  chart: {
    type: "radialBar"
  },
  plotOptions: {
    radialBar: {
      offsetY: 0,
      startAngle: 0,
      endAngle: 270,
      hollow: {
        margin: 5,
        size: "30%",
        background: "transparent",
        image: undefined
      },
      dataLabels: {
        name: {
          show: false
        },
        value: {
          show: false
        }
      }
    }
  },
  dataLabels: {
    enabled: true
  },
  legend: {
    show: true,
    floating: true,
    fontSize: "13px",
    position: "left",
    offsetX: 0,
    offsetY: 4,
    labels: {
      useSeriesColors: true
    },
    formatter: function(seriesName, opts) {
      debugger;
      return seriesName + ":  " + (opts.w.globals.series[opts.seriesIndex] || 0);
    },
    itemMargin: {
      horizontal: 3
    }
  },
  labels: ["Resolve", "Connect", "Processing", "Transfer"]
}
