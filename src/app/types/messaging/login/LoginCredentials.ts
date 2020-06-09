import { Payload } from '../Payload';

export class LoginCredentials implements Payload {
  email: string;
  password: string;

  constructor() {
    this.email = '';
    this.password = '';
  }
}
