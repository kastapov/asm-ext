import { Component, Input, OnInit } from '@angular/core';
import { ILogEntry } from '../../../types/ILogEntry';
import { BASE_URL } from '../../../../background/config';
import { ChromeService } from '../../../core/service/chrome.service';

@Component({
  selector: 'app-log-entry',
  templateUrl: './log-entry.component.html',
  styleUrls: ['./log-entry.component.scss']
})
export class LogEntryComponent implements OnInit {

  @Input() logEntry: ILogEntry;

  constructor(private chromeService: ChromeService) { }

  ngOnInit(): void {
  }

  openLog() {
    this.chromeService.openTab(`reports/check/detail/${this.logEntry.monitor.id}/${this.logEntry.id}`);
  }

}
