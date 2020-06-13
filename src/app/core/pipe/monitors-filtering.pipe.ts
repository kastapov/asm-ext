import { Pipe, PipeTransform } from '@angular/core';
import { ConfigService } from '../service/config.service';
import { MonitorsFilterConfig } from '../../types/config/MonitorsFilterConfig';
import { MonitorEntry } from '../../types/monitor/MonitorEntry';

@Pipe({name: 'monitorsFiltering'})
export class MonitorsFilteringPipe implements PipeTransform {
  filters: MonitorsFilterConfig;

  constructor(private configService: ConfigService) {
    this.filters = configService.config.monitorsFilterConfig;
  }

  isMonitorSelected(monitorId: number): boolean {
    return this.configService.isMonitorSelected(monitorId);
  }

  isMonitorHasTagSelected(monitor: MonitorEntry): boolean {
    return monitor.tagNames.includes(this.filters.selectedTag);
  }

  transform(monitors: Array<MonitorEntry>): Array<MonitorEntry> {
    return monitors.filter(monitor => {
      return (!this.filters.active || monitor.isActive)
        && (!this.filters.failing || monitor.isFailing)
        && (!this.filters.selected || this.isMonitorSelected(monitor.id))
        && (!this.filters.selectedTag || this.isMonitorHasTagSelected(monitor))
        && (!this.filters.selectedFolderId || monitor.folderId === this.filters.selectedFolderId)
    });
  }
}

// return (this.filters.active && monitor.isActive)
//   || (this.filters.failing && monitor.isFailing)
//   || (this.filters.selected && this.isMonitorSelected(monitor.id))
//   || (this.filters.selectedTag && this.isMonitorHasTagSelected(monitor))
//   || (this.filters.selectedFolderId && monitor.folderId === this.filters.selectedFolderId)
