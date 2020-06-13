import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Monitor } from '../../types/monitor/Monitor';
import { ConfigService } from '../../core/service/config.service';
import { API_BASE } from '../../../background/common';
import { IMonitorFolder } from '../../types/monitor/IMonitorFolder';

@Injectable({
  providedIn: 'root'
})
export class MonitorsService {
  constructor(private http: HttpClient, private configService: ConfigService) { }

  public getMonitorsObservable(): Observable<Array<Monitor>> {
      return this.loadMonitors();
  }

  public getFoldersObservable(): Observable<Array<IMonitorFolder>> {
    return this.loadFolders();
  }

  private loadMonitors(): Observable<Array<Monitor>> {
    return this.http.get<Array<Monitor>>(`${API_BASE}/monitors`);
  }

  private loadFolders(): Observable<Array<IMonitorFolder>> {
    return this.http.get<Array<IMonitorFolder>>(`${API_BASE}/folders`);
  }
}
