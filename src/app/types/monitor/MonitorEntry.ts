import { IStatistic } from '../statistic/IStatistic';

export class MonitorEntry {
  id: number;
  type: string;
  name: string;
  folderName: string;
  tagNames: Array<string>;
  checkInterval: string;
  isActive: boolean;
  stat: Array<IStatistic>;
}
