import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../../../core/service/config.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(private configService: ConfigService) { }

  ngOnInit(): void {
  }

  getSelectedMonitors(): String {
    return String(this.configService.config.monitorsList.length || '');
  }
}
