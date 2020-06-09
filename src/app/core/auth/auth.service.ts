import { Injectable } from '@angular/core';
import { BackgroundService } from '../background/background.service';
import { LoginCredentials } from '../../types/messaging/login/LoginCredentials';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private backgroundService: BackgroundService) {
  }

  login(credentials: LoginCredentials) {
    return this.backgroundService.login(credentials);
  }

  isAuthenticated() {
    return false;
  }
}
