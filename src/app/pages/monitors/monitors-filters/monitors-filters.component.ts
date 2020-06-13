import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ConfigService } from '../../../core/service/config.service';
import { MonitorsFilterConfig } from '../../../types/config/MonitorsFilterConfig';

@Component({
  selector: 'app-monitors-filters',
  templateUrl: './monitors-filters.component.html',
  styleUrls: ['./monitors-filters.component.scss']
})
export class MonitorsFiltersComponent implements OnInit {
  filtersConfig: MonitorsFilterConfig;

  constructor(private configService: ConfigService) { }

  ngOnInit(): void {
    this.filtersConfig = this.configService.config.monitorsFilterConfig;
  }

  invertConfigValue(parameterName: string) {
    this.filtersConfig[parameterName] = !this.filtersConfig[parameterName];
    this.configService.saveConfig();
  }
}
