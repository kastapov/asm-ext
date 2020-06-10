import { Payload } from '../Payload';

export class AccessToken implements Payload {
  access_token: string;

  constructor(access_token: string) {
    this.access_token = access_token;
  }
}
