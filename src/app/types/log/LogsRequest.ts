import { RequestParams } from '../RequestParams';

export class LogsRequest extends RequestParams {
  monitor: Array<number>;
  from: string;
  to: string;
  extended: boolean;
  limit: number;

  constructor(from: string = undefined) {
    super();
    this.from = from;
    this.extended = true;
    this.limit = 50;
  }
}
