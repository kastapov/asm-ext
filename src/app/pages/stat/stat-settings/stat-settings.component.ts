import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { StatConfig } from '../../../types/config/StatConfig';
import { ConfigService } from '../../../core/service/config.service';
import { MetricEnum } from '../../../types/config/MetricEnum';
import { ChartTypeEnum } from '../../../types/config/ChartTypeEnum';

@Component({
  selector: 'app-stat-settings',
  templateUrl: './stat-settings.component.html',
  styleUrls: ['./stat-settings.component.scss']
})
export class StatSettingsComponent implements OnInit {
  @Output() onConfigChanged: EventEmitter<any> = new EventEmitter();
  statConfig: StatConfig;

  MetricEnum = MetricEnum;
  ChartTypeEnum = ChartTypeEnum;

  constructor(private configService: ConfigService) { }

  ngOnInit(): void {
    this.statConfig = this.configService.config.statConfig;
  }

  triggerChanges() {
    this.configService.saveConfig();
    this.onConfigChanged.emit();
  }

}
