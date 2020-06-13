import { RequestParams } from '../RequestParams';
import { LogsLimitEnum } from '../config/LogsLimitEnum';

export class LogsRequest extends RequestParams {
  monitor: Array<number|string>;
  from: string;
  to: string;
  extended: boolean;
  limit: number;

  constructor(logsLimit: LogsLimitEnum, monitor: Array<number|string>) {
    super();
    this.limit = logsLimit;
    this.monitor = monitor;
  }
}
