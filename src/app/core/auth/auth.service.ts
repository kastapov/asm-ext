import { Injectable } from '@angular/core';
import { BackgroundService } from '../background/background.service';
import { LoginCredentials } from '../../types/messaging/login/LoginCredentials';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Payload } from '../../types/messaging/Payload';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthorized = false;

  constructor(private backgroundService: BackgroundService, private router: Router) {
  }

  login(credentials: LoginCredentials): Observable<Payload> {
    return this.backgroundService.login(credentials)
      .pipe(
        tap(() => this.authorise())
      );
  }

  private authorise() {
    this.isAuthorized = true;
    this.router.navigate(['widget']);
  }

  private isTokenActive(): Promise<boolean> {
    return this.backgroundService.checkTokenValidity().toPromise();
  }

  checkAuthorisation(): Promise<boolean> {
    if (this.isAuthorized) {
      return Promise.resolve(true);
    } else {
      return this.isTokenActive();
    }
  }
}
