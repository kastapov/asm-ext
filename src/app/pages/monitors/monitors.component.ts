import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IMonitor } from '../../types/monitor/IMonitor';
import { MonitorsService } from './monitors.service';

@Component({
  selector: 'app-monitors',
  templateUrl: './monitors.component.html',
  styleUrls: ['./monitors.component.scss']
})
export class MonitorsComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  monitors: Array<IMonitor>;

  constructor(private monitorsService: MonitorsService) { }

  ngOnInit(): void {
    this.subscription = this.monitorsService.getObservable().subscribe(monitors => this.monitors = monitors);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
