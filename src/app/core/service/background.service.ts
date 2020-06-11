import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MessagingService } from './messaging.service';
import { Payload } from '../../types/messaging/Payload';
import { ActionEnum } from '../../types/messaging/ActionEnum';
import { Message } from '../../types/messaging/Message';
import { AccessToken } from '../../types/messaging/login/AccessToken';
import { LoginMessage } from '../../types/messaging/login/LoginMessage';
import { LoginCredentials } from '../../types/messaging/login/LoginCredentials';

@Injectable({
  providedIn: 'root'
})
export class BackgroundService {

  constructor(private messaging: MessagingService) { }

  login(credentials: LoginCredentials): Observable<AccessToken> {
    return this.messaging.send(new LoginMessage(credentials));
  }

  logout(): Observable<Payload> {
    return this.messaging.send(new Message(ActionEnum.LOGOUT));
  }

  checkTokenValidity(): Observable<AccessToken> {
    return this.messaging.send(new Message(ActionEnum.CHECK_LOGIN));
  }
}