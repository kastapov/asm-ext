import { Component, Input, OnInit } from '@angular/core';
import { ILogEntry } from '../../../types/ILogEntry';

@Component({
  selector: 'app-log-entry',
  templateUrl: './log-entry.component.html',
  styleUrls: ['./log-entry.component.scss']
})
export class LogEntryComponent implements OnInit {

  @Input() logEntry: ILogEntry;

  constructor() { }

  ngOnInit(): void {
  }

}
