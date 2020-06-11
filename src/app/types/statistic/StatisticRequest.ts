import { RequestParams } from '../RequestParams';

export class StatisticRequest extends RequestParams {
  monitor: Array<number>;
  from: string;
  to: string;
  groupBy: string;
  period: string;

  constructor(from: string, period: string) {
    super();
    this.from = from;
    this.period = period;
  }

  public get groupRequest() {
    return {
      MONITOR: () => {
        this.groupBy = 'monitor';
        return this;
      },
      LOCATION: () => {
        this.groupBy = 'location';
        return this;
      }
    }
  }
}
