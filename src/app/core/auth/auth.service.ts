import { Injectable } from '@angular/core';
import { BackgroundService } from '../background/background.service';
import { LoginCredentials } from '../../types/messaging/login/LoginCredentials';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AccessToken } from '../../types/messaging/login/AccessToken';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthorized: boolean = false;
  accessToken: string = null;

  constructor(private backgroundService: BackgroundService, private router: Router) {
  }

  login(credentials: LoginCredentials): Observable<AccessToken> {
    return this.backgroundService.login(credentials)
      .pipe(
        tap(({access_token}) => this.authorise(access_token))
      );
  }

  private authorise(accessToken: string) {
    this.isAuthorized = true;
    this.accessToken = accessToken;
    this.router.navigate(['widget']);
  }

  checkAuthorisation(): Promise<boolean> {
    if (this.isAuthorized) {
      return Promise.resolve(true);
    } else {
      return this.backgroundService.checkTokenValidity()
        .toPromise()
        .then(({access_token}) => {
          this.authorise(access_token);
          return true;
        })
        .catch(error => {
          console.log(error);
          return false;
        });
    }
  }
}
