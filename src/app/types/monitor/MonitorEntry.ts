import { IStatistic } from '../statistic/IStatistic';
import { Monitor } from './Monitor';
import { IMonitorFolder } from './IMonitorFolder';

export class MonitorEntry extends Monitor {
  isActive: boolean;
  isFailing: boolean;
  folder: IMonitorFolder;
  stat: Array<IStatistic>;
}
