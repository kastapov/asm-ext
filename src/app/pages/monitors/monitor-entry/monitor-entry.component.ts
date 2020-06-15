import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MonitorsService } from '../monitors.service';
import { ConfigService } from '../../../core/service/config.service';
import { MonitorEntry } from '../../../types/monitor/MonitorEntry';
import { ChromeService } from '../../../core/service/chrome.service';

@Component({
  selector: 'app-monitor-entry',
  templateUrl: './monitor-entry.component.html',
  styleUrls: ['./monitor-entry.component.scss']
})
export class MonitorEntryComponent implements OnInit {

  @Input() monitorEntry: MonitorEntry;
  @Output() onEntryChanged: EventEmitter<any> = new EventEmitter();
  opened: boolean = false;

  constructor(private monitorsService: MonitorsService,
              private configService: ConfigService,
              private chromeService: ChromeService) {
  }

  ngOnInit(): void {
  }

  selectMonitor(id: number) {
    this.configService.toggleMonitorInList(id);
    this.onEntryChanged.emit();
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

  openGraphs() {
    this.chromeService.openTab(`charts.php?vrid=${this.monitorEntry.id}`);
  }

  openLogs() {
    this.chromeService.openTab(`logviewer.php?rid=${this.monitorEntry.id}`);
  }

  editMonitor() {
    this.chromeService.openTab(`settings/monitor/edit/${this.monitorEntry.id}`);
  }

  get chartType() {
    return this.configService.config.monitorChartType;
  }

  onOpen() {
    this.opened = true;
  }
}
