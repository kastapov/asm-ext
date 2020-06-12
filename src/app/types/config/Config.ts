import { PollingIntervalEnum } from './PollingIntervalEnum';
import { PageEnum } from './PageEnum';
import { ChartTypeEnum } from './ChartTypeEnum';
import { LogsLimitEnum } from './LogsLimitEnum';
import { ObservingDurationEnum } from './ObservingDurationEnum';

export class Config {
  pollingInterval: PollingIntervalEnum;
  defaultPage: PageEnum;
  statChartType: ChartTypeEnum;
  monitorChartType: ChartTypeEnum;
  observingDuration: ObservingDurationEnum;
  logsLimit: LogsLimitEnum;
  monitorsList: Array<string|number>;

  constructor() {
    this.pollingInterval = PollingIntervalEnum.MINUTE;
    this.defaultPage = PageEnum.CONFIG;
    this.statChartType = ChartTypeEnum.HEATMAP;
    this.monitorChartType = ChartTypeEnum.PIE;
    this.observingDuration = ObservingDurationEnum.ONE_HOUR;
    this.logsLimit = LogsLimitEnum.FIFTY;
    this.monitorsList = [];
  }
}
