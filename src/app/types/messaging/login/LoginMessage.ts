import { IMessage } from '../IMessage';
import { ActionEnum } from '../ActionEnum';
import { LoginCredentials } from './LoginCredentials';

export class LoginMessage implements IMessage {
  action: ActionEnum;
  payload: LoginCredentials;

  constructor(credentials: LoginCredentials) {
    this.action = ActionEnum.LOGIN;
    this.payload = credentials;
  }
}
