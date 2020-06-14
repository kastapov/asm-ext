import { Component, OnDestroy, OnInit } from '@angular/core';
import { LogsService } from './logs.service';
import { Subscription } from 'rxjs';
import { ILog } from '../../types/log/ILog';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.scss']
})
export class LogsComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  groupedLogs: Map<String, Array<ILog>>;

  constructor(private logsService: LogsService, private datePipe: DatePipe) { }

  ngOnInit(): void {
    this.subscription = this.logsService.getObservable().subscribe(logs => this.groupedLogs = this.groupByDate(logs));
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  private groupByDate(logs: Array<ILog>): Map<String, Array<ILog>> {
    const map = new Map<String, Array<ILog>>();
    logs.forEach((log) => {
      const date = this.datePipe.transform(log.start, 'longDate');
      const collection = map.get(date);
      if (!collection) {
        map.set(date, [log]);
      } else {
        collection.push(log);
      }
    });
    return map;
  }
}
