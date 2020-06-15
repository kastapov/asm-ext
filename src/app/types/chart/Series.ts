import { DataPoint } from './DataPoint';

export class Series {
  name?: string;
  type?: string;
  data: Array<number|DataPoint>;

  constructor(name: string, type: string, data: Array<number|DataPoint>) {
    this.name = name;
    this.type = type;
    this.data = data;
  }
}
