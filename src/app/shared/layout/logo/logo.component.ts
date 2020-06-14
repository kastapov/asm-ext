import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChromeService } from '../../../core/service/chrome.service';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent implements OnInit {

  constructor(private router: Router, private chromeService: ChromeService) {
  }

  ngOnInit(): void {
  }

  openAsm() {
    switch (this.router.url) {
      case('/stat'): {
        this.chromeService.openTab(`charts.php`);
        break;
      }
      case('/groupedLogs'): {
        this.chromeService.openTab(`logviewer.php`);
        break;
      }
      case('/monitors'): {
        this.chromeService.openTab(`settings.php`);
        break;
      }
      default: {
        this.chromeService.openTab(``);
      }
    }
  }
}
