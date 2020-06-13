import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Monitor } from '../../../types/monitor/Monitor';
import { IStatistic } from '../../../types/statistic/IStatistic';
import { MonitorsService } from '../monitors.service';
import { ConfigService } from '../../../core/service/config.service';
import { MonitorEntry } from '../../../types/monitor/MonitorEntry';

@Component({
  selector: 'app-monitor-entry',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './monitor-entry.component.html',
  styleUrls: ['./monitor-entry.component.scss']
})
export class MonitorEntryComponent implements OnInit {

  @Input() monitorEntry: MonitorEntry;

  constructor(private monitorsService: MonitorsService, private configService: ConfigService) { }

  ngOnInit(): void {
  }

  selectMonitor(id: number) {
    this.configService.toggleMonitorInList(id);
  }

  isSelected(id: number) {
    return this.configService.isMonitorSelected(id);
  }
}
