import { Component, Input, OnInit } from '@angular/core';
import { ILogEntry } from '../../../types/ILogEntry';
import { BASE_URL } from '../../../../background/config';

@Component({
  selector: 'app-log-entry',
  templateUrl: './log-entry.component.html',
  styleUrls: ['./log-entry.component.scss']
})
export class LogEntryComponent implements OnInit {

  @Input() logEntry: ILogEntry;

  constructor() { }

  ngOnInit(): void {
  }

  openLog() {
    chrome.tabs.create({
      url: `${BASE_URL}/reports/check/detail/${this.logEntry.monitor.id}/${this.logEntry.id}`
    });
  }

}
