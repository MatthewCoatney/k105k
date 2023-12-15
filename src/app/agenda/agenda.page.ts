import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription, switchMap, Observable } from 'rxjs';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.page.html',
  styleUrls: ['./styles/agenda.page.scss']
})
export class AgendaPage implements OnInit {
  // Gather all component subscription in one place. Can be one Subscription or multiple (chained using the Subscription.add() method)
  subscriptions: Subscription;

  agenda: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.subscriptions = this.route.data
      .pipe(
        // Extract data for this page
        switchMap((resolvedRouteData: { source: Observable<any> }) => {
          return resolvedRouteData['data'].source;
        })
      )
      .subscribe({
        next: (pageData) => {
          this.agenda = pageData;
        },
        error: (error) => console.log(error)
      });
  }

  // NOTE: Ionic only calls ngOnDestroy if the page was popped (ex: when navigating back)
  // Since ngOnDestroy might not fire when you navigate from the current page, use ionViewWillLeave to cleanup Subscriptions
  ionViewWillLeave(): void {
    this.subscriptions.unsubscribe();
  }
}
