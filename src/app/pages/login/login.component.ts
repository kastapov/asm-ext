import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username: string;
  password: string;
  errorMessage: string = '';

  constructor() { }

  doLogin() {

  }
}
