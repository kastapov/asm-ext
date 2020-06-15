import { ChartOptions } from '../../../../types/chart/ChartOptions';
import * as moment from 'moment';

export const SeriesChartOptions: Partial<ChartOptions> = {
  xaxis: {
    labels: {
      formatter(value: string): string {
        const date = moment(value);
        return date.utc().format('DD MMM HH:mm');
      }
    },
    type: "datetime"
  },
  tooltip:{
    x: {
      show: true
    }
  }
}
