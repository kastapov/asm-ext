import { IStatistic } from '../../../../types/statistic/IStatistic';
import { PointTransformer } from './PointTransformer';

export class GaugePointDataTransformer extends PointTransformer {

  toDataPoint(stat: IStatistic): number {
    return Math.round(stat.metrics.uptime * 100) / 100;
  }
}
