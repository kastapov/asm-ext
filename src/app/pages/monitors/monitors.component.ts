import { Component, OnDestroy, OnInit } from '@angular/core';
import { forkJoin, Subscription } from 'rxjs';
import { Monitor } from '../../types/monitor/Monitor';
import { MonitorsService } from './monitors.service';
import { StatService } from '../stat/stat.service';
import { IStatistic } from '../../types/statistic/IStatistic';
import { ConfigService } from '../../core/service/config.service';
import { Config } from '../../types/config/Config';
import { MonitorEntry } from '../../types/monitor/MonitorEntry';
import { IMonitorFolder } from '../../types/monitor/IMonitorFolder';
import { BackgroundService } from '../../core/service/background.service';
import { BackgroundStatPayload } from '../../types/messaging/stat/BackgroundStatPayload';

@Component({
  selector: 'app-monitors',
  templateUrl: './monitors.component.html',
  styleUrls: ['./monitors.component.scss']
})
export class MonitorsComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  monitors: Array<MonitorEntry> = [];
  config: Config;
  uptimeThreshold: number = 70;

  constructor(private monitorsService: MonitorsService,
              private statService: StatService,
              private configService: ConfigService,
              private backgroundService: BackgroundService) {
  }

  ngOnInit(): void {
    this.subscription = forkJoin([
      this.statService.getObservable(),
      this.monitorsService.getMonitorsObservable(),
      this.monitorsService.getFoldersObservable()
    ]).subscribe(([s, m, f]) => this.monitors = this.transformMonitors(s, m, f));
    this.config = this.configService.config;
  }


  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  getStatForMonitor(monitorId: number, statistic: Array<IStatistic>): Array<IStatistic> {
    return statistic.filter((s: IStatistic) => s.monitors.some(m => m.id === monitorId));
  }

  isMonitorFailing(statistic: Array<IStatistic>): boolean {
    //TODO: here should be more complex metric calculation since we do not have a flag in API;
    return statistic.slice(-1)?.pop()?.metrics.uptime < this.uptimeThreshold;
  }

  isMonitorActive(statistic: Array<IStatistic>): boolean {
    //TODO: here should be more complex metric calculation since we do not have a flag in API;
    return statistic.slice(-1)?.pop()?.metrics.uptime > 0;
  }

  getFolderForMonitor(folders: Array<IMonitorFolder>, folderId: number): IMonitorFolder {
    return folders.find(f => f.id === folderId);
  }

  private transformMonitors(statistic: Array<IStatistic>,
                            monitors: Array<Monitor>,
                            folders: Array<IMonitorFolder>): Array<MonitorEntry> {
    return monitors.map(monitor => {
      const monitorEntry: MonitorEntry = <MonitorEntry>monitor;
      const monitorStat: Array<IStatistic> = this.getStatForMonitor(monitor.id, statistic);
      monitorEntry.isActive = this.isMonitorActive(monitorStat);
      monitorEntry.isFailing = this.isMonitorFailing(monitorStat);
      monitorEntry.stat = monitorStat;
      monitorEntry.folder = this.getFolderForMonitor(folders, monitor.folderId);
      return monitorEntry;
    })
  }

  updateList() {
    this.monitors = [...this.monitors];
    this.sendMockedStats();
  }

  //TODO: This is only for demo purpose
  private sendMockedStats() {
    const selectedMonitorsList = this.configService.config.monitorsList;
    const failingNumber = this.monitors.filter(e => e.isFailing && selectedMonitorsList.includes(e.id)).length;
    if (failingNumber) {
      this.backgroundService.updateStatMock(BackgroundStatPayload.FAIL(failingNumber));
    } else {
      const activeNumber = this.monitors.filter(e => e.isActive && selectedMonitorsList.includes(e.id)).length;
      this.backgroundService.updateStatMock(BackgroundStatPayload.OK(activeNumber));
    }
  }
}
