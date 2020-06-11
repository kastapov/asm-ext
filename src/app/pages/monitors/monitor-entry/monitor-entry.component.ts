import { Component, Input, OnInit } from '@angular/core';
import { IMonitor } from '../../../types/monitor/IMonitor';

@Component({
  selector: 'app-monitor-entry',
  templateUrl: './monitor-entry.component.html',
  styleUrls: ['./monitor-entry.component.scss']
})
export class MonitorEntryComponent implements OnInit {

  @Input() monitorEntry: IMonitor;

  constructor() { }

  ngOnInit(): void {
  }

}
