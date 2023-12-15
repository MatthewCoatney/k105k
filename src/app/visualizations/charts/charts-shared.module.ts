import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// ngx-charts - lib: https://swimlane.gitbook.io/ngx-charts/
import { NgxChartsModule } from "@swimlane/ngx-charts";

import { CustomDoughnutChartComponent } from './custom-doughnut-chart/custom-doughnut-chart.component';
import { CustomLineChartComponent } from './custom-line-chart/custom-line-chart.component';
import { CustomProgressBarDirective } from './custom-progress-bar-chart/custom-progress-bar.directive';


@NgModule({
  declarations: [
    CustomDoughnutChartComponent,
    CustomLineChartComponent,
    CustomProgressBarDirective
  ],
  imports: [
    CommonModule,
    NgxChartsModule
  ],
  exports: [
    CustomDoughnutChartComponent,
    CustomLineChartComponent,
    CustomProgressBarDirective
  ]
})
export class ChartsSharedModule { }
