import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { ChromeService } from '../../../core/service/chrome.service';
import { ILog } from '../../../types/log/ILog';
import { DateUtil } from '../../../util/date-util';

@Component({
  selector: 'app-log-entry',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './log-entry.component.html',
  styleUrls: ['./log-entry.component.scss']
})
export class LogEntryComponent implements OnInit {

  @Input() logEntry: ILog;

  constructor(private chromeService: ChromeService) { }

  ngOnInit(): void {
  }

  openLog(): void {
    this.chromeService.openTab(`reports/check/detail/${this.logEntry.monitor.id}/${this.logEntry.id}`);
  }
}
