import { ITransformer } from './ITransformer';
import { IStatistic } from '../../../../types/statistic/IStatistic';
import { Series } from '../../../../types/chart/Series';
import { DataPoint } from '../../../../types/chart/DataPoint';

export abstract class SeriesTransformer implements ITransformer {
  public transformData(input: Array<IStatistic>): Array<Series> {
    if (input === undefined) {
      return [];
    }
    const filteredValues = SeriesTransformer.filterOutEmptyPoints(input);
    const groupedValues = this.groupByMonitorName(filteredValues);
    const result: Array<Series> = [];
    groupedValues.forEach((stat: Array<IStatistic>, key) => {
      result.push(new Series(key, undefined, stat.map(this.toDataPoint)))
    })
    return result;
  }

  abstract toDataPoint(stat: IStatistic): DataPoint;

  private groupByMonitorName(statistic: Array<IStatistic>): Map<string, Array<IStatistic>> {
    const map = new Map<string, Array<IStatistic>>();
    statistic.forEach((stat) => {
      const key = stat.monitors[0].name;
      const collection = map.get(key);
      if (!collection) {
        map.set(key, [stat]);
      } else {
        collection.push(stat);
      }
    });
    return map;
  }

  static filterOutEmptyPoints(input: Array<IStatistic>) {
    return input.filter(s => s.monitors.length > 0);
  }
}
