import {
  ApexAxisChartSeries,
  ApexChart,
  ApexDataLabels,
  ApexGrid,
  ApexStroke,
  ApexTitleSubtitle,
  ApexXAxis,
  ApexPlotOptions,
  ApexYAxis,
  ApexFill
} from 'ng-apexcharts';

export type ChartOptions = {
  series: Array<any>;
  chart: Partial<ApexChart>;
  xaxis: Partial<ApexXAxis>;
  yaxis: Partial<ApexYAxis>;
  plotOptions: Partial<ApexPlotOptions>;
  dataLabels: Partial<ApexDataLabels>;
  grid: Partial<ApexGrid>;
  stroke: Partial<ApexStroke>;
  title: Partial<ApexTitleSubtitle>;
  colors: string[];
  fill: ApexFill;
  labels: string[];
};
