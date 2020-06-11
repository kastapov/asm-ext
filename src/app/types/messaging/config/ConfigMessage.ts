import { ActionEnum } from '../ActionEnum';
import { Config } from '../../config/Config';
import { IMessage } from '../IMessage';


export class ConfigMessage implements IMessage {
  action: ActionEnum;
  payload: Config;

  constructor(config: Config) {
    this.action = ActionEnum.SAVE_CONFIG;
    this.payload = config;
  }
}
