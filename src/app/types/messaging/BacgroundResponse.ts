import { ResponseStateEnum } from './ResponseStateEnum';
import { Payload } from './Payload';
import { IResponse } from './IResponse';

export class BackgroundResponse implements IResponse {
  state: ResponseStateEnum;
  payload: Payload;

  constructor(state: ResponseStateEnum, payload: Payload) {
    this.state = state;
    this.payload = payload;
  }

  static OK(payload: Payload) {
    return new BackgroundResponse(ResponseStateEnum.OK, payload);
  }

  static ERROR(payload: Payload) {
    return new BackgroundResponse(ResponseStateEnum.ERROR, payload)
  }

  static FAIL(payload: Payload) {
    return new BackgroundResponse(ResponseStateEnum.FAIL, payload)
  }
}
