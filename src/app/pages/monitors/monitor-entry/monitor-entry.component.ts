import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Monitor } from '../../../types/monitor/Monitor';
import { IStatistic } from '../../../types/statistic/IStatistic';
import { MonitorsService } from '../monitors.service';
import { ConfigService } from '../../../core/service/config.service';
import { MonitorEntry } from '../../../types/monitor/MonitorEntry';

@Component({
  selector: 'app-monitor-entry',
  templateUrl: './monitor-entry.component.html',
  styleUrls: ['./monitor-entry.component.scss']
})
export class MonitorEntryComponent implements OnInit {

  @Input() monitorEntry: MonitorEntry;
  @Output() onEntryChanged: EventEmitter<any> = new EventEmitter();

  constructor(private monitorsService: MonitorsService, private configService: ConfigService) { }

  ngOnInit(): void {
  }

  selectMonitor(id: number) {
    this.configService.toggleMonitorInList(id);
  }

  isSelected(id: number) {
    return this.configService.isMonitorSelected(id);
  }

  onTagSelect(tag: string) {
    this.configService.toggleTagSelection(tag);
    this.onEntryChanged.emit()
  }

  onFolderSelect(folderId: number) {
    this.configService.toggleFolderSelection(folderId);
    this.onEntryChanged.emit()
  }

  isFolderSelected(folderId: number) {
    return this.configService.config.monitorsFilterConfig.selectedFolderId === folderId;
  }

  isTagSelected(tag: string): boolean {
    return this.configService.config.monitorsFilterConfig.selectedTag === tag;
  }
}
