import { ActionEnum } from './ActionEnum';
import { Payload } from './Payload';

export interface IMessage {
  action: ActionEnum
  payload: Payload
}
