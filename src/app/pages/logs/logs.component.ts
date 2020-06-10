import { Component, OnInit } from '@angular/core';
import { ILogEntry } from '../../types/ILogEntry';
import { LogsService } from './logs.service';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.scss']
})
export class LogsComponent implements OnInit {

  constructor(private logsService: LogsService) { }

  logs: Array<ILogEntry>;

  ngOnInit(): void {
    this.logsService.subscribeForLogs().subscribe(logs => this.logs = logs);
  }
}
