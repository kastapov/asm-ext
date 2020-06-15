import { ITransformer } from './ITransformer';
import { IStatistic } from '../../../../types/statistic/IStatistic';
import { SeriesTransformer } from './SeriesTransformer';

export abstract class PointTransformer implements ITransformer {
  public transformData(input: Array<IStatistic>): Array<number> {
    if (input === undefined || !input.length) {
      return [];
    }
    const filteredValues = SeriesTransformer.filterOutEmptyPoints(input);
    const average = filteredValues.reduce((avg, stat, i, { length }) => {
      return avg + this.toDataPoint(stat) / length;
    }, 0)
    return [average];
  }

  abstract toDataPoint(stat: IStatistic): number;
}
