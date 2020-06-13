import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ConfigService } from '../../../core/service/config.service';
import { MonitorsFilterConfig } from '../../../types/config/MonitorsFilterConfig';

@Component({
  selector: 'app-monitors-filters',
  templateUrl: './monitors-filters.component.html',
  styleUrls: ['./monitors-filters.component.scss']
})
export class MonitorsFiltersComponent implements OnInit {
  filtersConfig: MonitorsFilterConfig;
  @Output() onFilteringChanged: EventEmitter<any> = new EventEmitter();

  constructor(private configService: ConfigService) { }

  ngOnInit(): void {
    this.filtersConfig = this.configService.config.monitorsFilterConfig;
  }

  invertConfigValue(parameterName: string) {
    this.filtersConfig[parameterName] = !this.filtersConfig[parameterName];
    this.triggerChanges();
  }

  clearSelection() {
    this.configService.config.monitorsList = [];
    this.triggerChanges()
  }

  isClearSelectionActive() {
    return this.configService.config.monitorsList.length > 0;
  }

  resetTag() {
    this.filtersConfig.selectedTag = null;
    this.triggerChanges();
  }

  resetFolder() {
    this.filtersConfig.selectedFolderId = null;
    this.triggerChanges();
  }

  private triggerChanges() {
    this.configService.saveConfig();
    this.onFilteringChanged.emit();
  }
}
