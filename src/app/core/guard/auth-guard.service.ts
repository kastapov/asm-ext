import { Injectable } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(public auth: AuthService, public router: Router) {
  }

  canActivate(): Promise<boolean> {
    return this.auth.checkAuthorisation().then(isAuthorized => {
      if (!isAuthorized) {
        this.router.navigate(['login'])
      }
      return isAuthorized;
    })
      .catch(() => this.router.navigate(['login']));
  }
}
