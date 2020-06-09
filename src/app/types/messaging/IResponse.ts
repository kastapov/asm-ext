import { ResponseStateEnum } from './ResponseStateEnum';
import { Payload } from './Payload';

export interface IResponse {
  state: ResponseStateEnum;
  payload: Payload;
}
