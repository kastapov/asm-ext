import { SeriesTransformer } from './SeriesTransformer';
import { IStatistic } from '../../../../types/statistic/IStatistic';
import { DataPoint } from '../../../../types/chart/DataPoint';
import { Series } from '../../../../types/chart/Series';
import * as moment from 'moment';

export class AreaSeriesDataTransformer {
  public transformData(input: Array<IStatistic>): Array<number | Series> {
    if (input === undefined) {
      return [];
    }
    const filteredValues = SeriesTransformer.filterOutEmptyPoints(input);
    const result: Array<Series> = [];
    result.push(new Series('rtime', undefined, filteredValues.map(s => this.toDataPoint('rtime', s))))
    result.push(new Series('ctime', undefined, filteredValues.map(s => this.toDataPoint('ctime', s))))
    result.push(new Series('ptime', undefined, filteredValues.map(s => this.toDataPoint('ptime', s))))
    result.push(new Series('ttime', undefined, filteredValues.map(s => this.toDataPoint('ttime', s))))
    return result;
  }

  toDataPoint(statName: string, stat: IStatistic): DataPoint {
    return new DataPoint(stat.timestamp, stat.metrics[statName]);
  }
}
