import { ChangeDetectorRef, Component, NgZone, OnInit } from '@angular/core';
import { ConfigService } from '../../core/service/config.service';
import { Config } from '../../types/config/Config';
import { PollingIntervalEnum } from '../../types/config/PollingIntervalEnum';
import { PageEnum } from '../../types/config/PageEnum';
import { LogsLimitEnum } from '../../types/config/LogsLimitEnum';
import { ChartTypeEnum } from '../../types/config/ChartTypeEnum';
import { ObservingPeriodsMapping } from 'src/app/types/config/ObservingPeriodsMapping';
import { ObservingDurationEnum } from '../../types/config/ObservingDurationEnum';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.scss']
})
export class ConfigComponent implements OnInit {
  keys = Object.keys;
  config: Config;
  PoolingIntervalEnum = PollingIntervalEnum;
  PageEnum = PageEnum;
  ChartTypeEnum = ChartTypeEnum;
  LogsLimitEnum = LogsLimitEnum;
  ObservingPeriodsMapping = ObservingPeriodsMapping;
  ObservingDurationEnum = ObservingDurationEnum;
  resetClicked = false;

  constructor(private configService: ConfigService) { }

  ngOnInit(): void {
    this.config = this.configService.config;
  }

  saveConfig() {
    this.configService.saveConfig();
  }

  resetConfig() {
    if (this.resetClicked) {
      this.configService.resetConfig();
      this.config = this.configService.config;
      this.resetClicked = false;
    } else {
      this.resetClicked = true;
    }
  }
}
