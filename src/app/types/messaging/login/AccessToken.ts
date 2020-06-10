import { Payload } from '../Payload';

export class AccessToken implements Payload {
  access_token: string;

  constructor(accessToken: string) {
    this.access_token = accessToken;
  }
}
