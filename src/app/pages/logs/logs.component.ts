import { Component, OnDestroy, OnInit } from '@angular/core';
import { LogsService } from './logs.service';
import { Subscription } from 'rxjs';
import { ILog } from '../../types/log/ILog';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.scss']
})
export class LogsComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  logs: Array<ILog>;

  constructor(private logsService: LogsService) { }

  ngOnInit(): void {
    this.subscription = this.logsService.getObservable().subscribe(logs => this.logs = logs);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
