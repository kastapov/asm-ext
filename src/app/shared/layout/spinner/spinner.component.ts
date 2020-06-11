import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
  RouterEvent
} from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit, OnDestroy {

  loading = true;
  subscription: Subscription;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.subscription = this.router.events.subscribe((event : RouterEvent) => {
      this.navigationInterceptor(event);
      return event;
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }


  navigationInterceptor(event: RouterEvent): void {
    if (event instanceof NavigationStart) {
      this.loading = true
    }
    if (event instanceof NavigationEnd) {
      this.loading = false
    }

    if (event instanceof NavigationCancel) {
      this.loading = false
    }
    if (event instanceof NavigationError) {
      this.loading = false
    }
  }
}
