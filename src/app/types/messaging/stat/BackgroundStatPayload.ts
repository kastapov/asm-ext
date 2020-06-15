import { Payload } from '../Payload';
import { BackgroundStatusEnum } from './BackgroundStatusEnum';

export class BackgroundStatPayload implements Payload {
  status: BackgroundStatusEnum;
  number: number;


  constructor(status: BackgroundStatusEnum, number: number) {
    this.status = status;
    this.number = number;
  }

  static OK(number: number): BackgroundStatPayload {
    return new BackgroundStatPayload(BackgroundStatusEnum.OK, number)
  }

  static FAIL(number: number): BackgroundStatPayload {
    return new BackgroundStatPayload(BackgroundStatusEnum.FAIL, number)
  }
}
