import { RequestParams } from '../RequestParams';

export class LogsRequest extends RequestParams {
  monitor: Array<number>;
  from: string;
  to: string;
  extended: boolean;
  limit: number;

  constructor() {
    super();
    this.limit = 50;
  }
}
