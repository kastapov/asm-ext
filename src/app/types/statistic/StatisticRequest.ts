import { HttpParams } from '@angular/common/http';
import { RequestParams } from '../RequestParams';

export class StatisticRequest extends RequestParams {
  monitor: Array<number>;
  from: string;
  to: string;
  groupBy: string;

  constructor(from: string) {
    super();
    this.from = from;
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
