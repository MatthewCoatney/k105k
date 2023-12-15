import { Component } from '@angular/core';

@Component({
  selector: 'app-sliding-tabs',
  templateUrl: './sliding-tabs.page.html',
  styleUrls: [
    './styles/sliding-tabs.page.scss',
    './styles/sliding-tabs.md.scss',
    './styles/sliding-tabs.io.scss'
  ]
})
export class SlidingTabsPage {
  segmentValue = 'food';

  constructor() {}

  segmentChanged(ev): void {
    this.segmentValue = ev.detail.value;
  }
}
