import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { IMonitor } from '../../../types/monitor/IMonitor';
import { IStatistic } from '../../../types/statistic/IStatistic';
import { MonitorsService } from '../monitors.service';
import { ConfigService } from '../../../core/service/config.service';

@Component({
  selector: 'app-monitor-entry',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './monitor-entry.component.html',
  styleUrls: ['./monitor-entry.component.scss']
})
export class MonitorEntryComponent implements OnInit {

  @Input() monitorEntry: IMonitor;
  @Input() statistic: Array<IStatistic>;
  uptimeThreshold: number = 50;

  constructor(private monitorsService: MonitorsService, private configService: ConfigService) { }

  ngOnInit(): void {
  }

  selectMonitor(id: number) {
    this.configService.toggleMonitorInList(id);
  }

  isSelected(id: number) {
    return this.configService.config.monitorsList.includes(id);
  }
}
