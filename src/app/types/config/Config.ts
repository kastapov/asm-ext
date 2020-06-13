import { PollingIntervalEnum } from './PollingIntervalEnum';
import { PageEnum } from './PageEnum';
import { ChartTypeEnum } from './ChartTypeEnum';
import { LogsLimitEnum } from './LogsLimitEnum';
import { ObservingDurationEnum } from './ObservingDurationEnum';
import { MonitorsFilterConfig } from './MonitorsFilterConfig';

export class Config {
  pollingInterval: PollingIntervalEnum;
  defaultPage: PageEnum;
  statChartType: ChartTypeEnum;
  monitorChartType: ChartTypeEnum;
  observingDuration: ObservingDurationEnum;
  logsLimit: LogsLimitEnum;
  monitorsList: Array<string|number>;
  monitorsFilterConfig: MonitorsFilterConfig;

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
