import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { StatService } from './stat.service';
import { IStatistic } from '../../types/statistic/IStatistic';

@Component({
  selector: 'app-stat',
  templateUrl: './stat.component.html',
  styleUrls: ['./stat.component.scss']
})
export class StatComponent implements OnInit {
  subscription: Subscription;
  statistic: Array<IStatistic>;

  constructor(private statService: StatService) { }

  ngOnInit(): void {
    this.subscription = this.statService.getObservable().subscribe(statistic => this.statistic = statistic);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
