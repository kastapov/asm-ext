import { PollingIntervalEnum } from './PollingIntervalEnum';
import { PageEnum } from './PageEnum';
import { ChartTypeEnum } from './ChartTypeEnum';
import { LogsLimitEnum } from './LogsLimitEnum';
import { ObservingDurationEnum } from './ObservingDurationEnum';
import { MonitorsFilterConfig } from './MonitorsFilterConfig';
import { StatConfig } from './StatConfig';

export class Config {
  pollingInterval: PollingIntervalEnum;
  defaultPage: PageEnum;
  statConfig: StatConfig;
  monitorChartType: ChartTypeEnum;
  observingDuration: ObservingDurationEnum;
  logsLimit: LogsLimitEnum;
  monitorsList: Array<string|number>;
  monitorsFilterConfig: MonitorsFilterConfig;
  runBackgroundProcess: boolean;

  constructor() {
    this.pollingInterval = PollingIntervalEnum.NEVER_POLL;
    this.defaultPage = PageEnum.STAT;
    this.statConfig = new StatConfig();
    this.monitorChartType = ChartTypeEnum.HEATMAP;
    this.observingDuration = ObservingDurationEnum.ONE_HOUR;
    this.logsLimit = LogsLimitEnum.FIFTY;
    this.monitorsList = [];
    this.monitorsFilterConfig = new MonitorsFilterConfig();
    this.runBackgroundProcess = true;
  }
}
