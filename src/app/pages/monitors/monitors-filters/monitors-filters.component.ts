import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../../core/service/config.service';

@Component({
  selector: 'app-monitors-filters',
  templateUrl: './monitors-filters.component.html',
  styleUrls: ['./monitors-filters.component.scss']
})
export class MonitorsFiltersComponent implements OnInit {

  constructor(private configService: ConfigService) { }

  ngOnInit(): void {
  }

}
