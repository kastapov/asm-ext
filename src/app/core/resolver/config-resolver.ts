import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Config } from '../../types/config/Config';
import { ConfigService } from '../service/config.service';

@Injectable()
export class ConfigResolver implements Resolve<Observable<Config>> {

  public constructor(private configService: ConfigService) { }

  public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Config> {
    return this.configService.loadConfig();
  }
}
