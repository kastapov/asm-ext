import { IStatistic } from '../../../../types/statistic/IStatistic';
import { PointTransformer } from './PointTransformer';

export class GaugePointDataTransformer extends PointTransformer {

  toDataPoint(stat: IStatistic): number {
    return stat.metrics.uptime;
  }
}
