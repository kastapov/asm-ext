import { IStatistic } from '../../../../types/statistic/IStatistic';
import { PointTransformer } from './PointTransformer';
import { SeriesTransformer } from './SeriesTransformer';
import { DataPoint } from '../../../../types/chart/DataPoint';
import { Series } from '../../../../types/chart/Series';

export class ActivityGaugeSeriesDataTransformer extends SeriesTransformer {
  public transformData(input: Array<IStatistic>): Array<number> {
    if (input === undefined || !input.length) {
      return [];
    }
    const filteredValues = SeriesTransformer.filterOutEmptyPoints(input);
    const averages = filteredValues.reduce((avg, stat, i, { length }) => {
      const values = this.toDataPoint(stat).x;
      const toAverage = this.avg(length);
      return [
        toAverage(avg[0], values[0]),
        toAverage(avg[1], values[1]),
        toAverage(avg[2], values[2]),
        toAverage(avg[3], values[3])
      ];
    }, [0, 0, 0, 0])
    const max = Math.max.apply(Math, averages);
    return averages.map(a => this.toPercents(a, max));
  }

  private avg( length: number): Function {
    return (avg: number, value: number): number => {
      return avg + value / length;
    }
  }

  toDataPoint(stat: IStatistic): DataPoint {
    return new DataPoint([stat.metrics.rtime, stat.metrics.ctime, stat.metrics.ptime, stat.metrics.ttime], null);
  }

  private toPercents(a: number, max: number) {
    return Math.round(a / max * 100);
  }
}
