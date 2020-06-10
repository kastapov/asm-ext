import { HttpParams } from '@angular/common/http';

export class LogsRequest {
  // monitor: Array<number>;
  from: string;
  to: string;
  extended: boolean;
  limit: number;

  constructor(from: string, to: string) {
    this.from = from;
    this.extended = true;
    this.to = to;
    this.limit = 50;
  }

  public toHttpParams(): HttpParams {
    const params: HttpParams = new HttpParams();
    params.set("from", this.from);
    params.set("to", this.to);
    params.set("extended", String(this.extended));
    params.set("limit", String(this.limit));
    return params;
  }
}
