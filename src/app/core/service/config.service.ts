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
  private _config: Config;

  constructor(private backgroundService: BackgroundService, private router: Router) {
  }

  saveConfig() {
    this.backgroundService.saveConfig(this._config).subscribe();
  }

  loadConfig(): Observable<Config> {
    if (!this._config) {
      return this.loadFromBackground();
    }
    return of(this._config);
  }

  private loadFromBackground() {
    return this.backgroundService.loadConfig()
      .pipe(
        tap((config: Config) => {
          if (config) {
            this._config = config;
          } else {
            this._config = new Config();
            this.saveConfig();
          }
        }),
        catchError(() => {
          this.createNewAndSave();
          return of(this._config);
        }),
        finalize(() => {
          this.router.navigate([this._config.defaultPage])
        }),
      );
  }

  private createNewAndSave() {
    this._config = new Config();
    this.saveConfig();
  }

  get config(): Config {
    return this._config;
  }
}
