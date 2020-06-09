import { ActionEnum } from './ActionEnum';
import { IMessage } from './IMessage';
import { Payload } from './Payload';

export class Message implements IMessage {
  action: ActionEnum
  payload: Payload

  constructor(action: ActionEnum, payload: Object = {}) {
    this.action = action;
    this.payload = payload;
  }
}
