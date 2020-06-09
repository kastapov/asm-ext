import { Component, OnInit } from '@angular/core';
import { LoginCredentials } from '../../types/messaging/login/LoginCredentials';
import { AuthService } from '../../core/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  credentials: LoginCredentials = new LoginCredentials();
  errorMessage: string = '';

  constructor(private authService: AuthService) { }

  doLogin() {
    this.authService
      .login(this.credentials)
      .subscribe(() => {}, err => this.errorMessage = err.error || err.message);
  }
}
