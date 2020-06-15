import { SeriesTransformer } from './SeriesTransformer';
import { IStatistic } from '../../../../types/statistic/IStatistic';
import { DataPoint } from '../../../../types/chart/DataPoint';

export class HeatMapSeriesDataTransformer extends SeriesTransformer {

  toDataPoint(stat: IStatistic): DataPoint {
    return new DataPoint(stat.timestamp, stat.metrics.uptime);
  }
}
