import { RequestParams } from '../RequestParams';
import { LogsLimitEnum } from '../config/LogsLimitEnum';

export class LogsRequest extends RequestParams {
  monitor: Array<number>;
  from: string;
  to: string;
  extended: boolean;
  limit: number;

  constructor(logsLimit: LogsLimitEnum) {
    super();
    this.limit = logsLimit;
  }
}
