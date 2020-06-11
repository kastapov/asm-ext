import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IMonitor } from '../../types/monitor/IMonitor';
import { MonitorsService } from './monitors.service';
import { StatService } from '../stat/stat.service';
import { IStatistic } from '../../types/statistic/IStatistic';

@Component({
  selector: 'app-monitors',
  templateUrl: './monitors.component.html',
  styleUrls: ['./monitors.component.scss']
})
export class MonitorsComponent implements OnInit, OnDestroy {
  subscriptionMonitors: Subscription;
  subscriptionStats: Subscription;
  monitors: Array<IMonitor>;
  statistic: Array<IStatistic>;

  constructor(private monitorsService: MonitorsService, private statService: StatService) { }

  ngOnInit(): void {
    this.subscriptionMonitors = this.monitorsService.getObservable().subscribe(monitors => this.monitors = monitors);
    this.subscriptionStats = this.statService.getObservable().subscribe(statistic => this.statistic = statistic);
  }

  ngOnDestroy(): void {
    this.subscriptionMonitors.unsubscribe();
    this.subscriptionStats.unsubscribe();
  }
}
