import { IStatistic } from '../../../../types/statistic/IStatistic';
import { Series } from '../../../../types/chart/Series';

export interface ITransformer {
  transformData(input: Array<IStatistic>): Array<number|Series>;
}
