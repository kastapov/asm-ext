import { Injectable } from '@angular/core';
import { Config } from '../../types/config/Config';
import { BackgroundService } from './background.service';
import { catchError, finalize, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private _config;

  constructor(private backgroundService: BackgroundService, private router: Router) {

  }

  saveConfig() {
    this.backgroundService.saveConfig(this._config).subscribe();
  }

  loadConfig(): Observable<Config> {
    if (!this._config) {
      return this.backgroundService.loadConfig()
        .pipe(
          tap(config => {
            if (config) {
              this._config = config;
            } else {
              this._config = new Config();
            }
          }),
          catchError(() => {
            this._config = new Config();
            return of(this._config);
          }),
          finalize(() => this.router.navigate(this._config.defaultPage)),
        );
    }
    return new Observable(this._config);
  }

  get config(): Config {
    return this._config;
  }
}
