import { Component, OnDestroy, OnInit } from '@angular/core';
import { ILogEntry } from '../../types/ILogEntry';
import { LogsService } from './logs.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.scss']
})
export class LogsComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  constructor(private logsService: LogsService) { }

  logs: Array<ILogEntry>;

  ngOnInit(): void {
    this.subscription = this.logsService.getLogsObservable().subscribe(logs => this.logs = logs);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
