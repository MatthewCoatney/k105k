import {
  Component,
  Input,
  Output,
  ViewEncapsulation,
  EventEmitter,
  ChangeDetectionStrategy,
  ContentChild,
  TemplateRef
} from '@angular/core';
import { BaseChartComponent, calculateViewDimensions, ViewDimensions } from '@swimlane/ngx-charts';

// ? Inspired in:
// ?    - https://github.com/swimlane/ngx-charts/blob/f22f9b63c412528ff048e9f75ba62878689570a0/projects/swimlane/ngx-charts/src/lib/pie-chart/pie-grid-series.component.ts
// ?    - https://github.com/swimlane/ngx-charts/blob/72133d7d83db077460b5c8cefb1ddbf19a58a4fa/projects/swimlane/ngx-charts/src/lib/pie-chart/pie-series.component.ts
// ?    - https://github.com/swimlane/ngx-charts/blob/e2e10b5c9efd7c51aa317dd648955355118d9442/projects/swimlane/ngx-charts/src/lib/pie-chart/pie-arc.component.ts

@Component({
  selector: 'app-custom-doughnut-chart',
  templateUrl: './custom-doughnut-chart.component.html',
  styleUrls: ['./custom-doughnut-chart.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomDoughnutChartComponent extends BaseChartComponent {
  @Input() arcWidth: number = 0.15;
  @Input() gradient: boolean;

  @Input() tooltipDisabled: boolean = false;
  @Input() labelFormatting: any;
  @Input() trimLabels: boolean = true;
  @Input() maxLabelLength: number = 10;
  @Input() tooltipText: any;

  // ? Custom color scheme
  @Input() colorScheme: any;
  // ? Doughnut chart data
  @Input() chartData: any;
  // ? Optional margins
  @Input() margins: number[];

  // eslint-disable-next-line @angular-eslint/no-output-native
  @Output() select = new EventEmitter();

  @ContentChild('tooltipTemplate') tooltipTemplate: TemplateRef<any>;

  translation: string;
  outerRadius: number;
  innerRadius: number;
  dims: ViewDimensions;
  endAngle: number;

  update(): void {
    super.update();

    if (this.hasNoOptionalMarginsSet()) {
      this.margins = [5, 5, 5, 5];
    }

    this.dims = calculateViewDimensions({
      width: this.width,
      height: this.height,
      margins: this.margins
    });

    const xOffset = this.margins[3] + this.dims.width / 2;
    const yOffset = this.margins[0] + this.dims.height / 2;
    this.translation = `translate(${xOffset}, ${yOffset})`;
    
    this.outerRadius = (Math.min(this.dims.width, this.dims.height)) / 2;
    // ? Doughnut effect (else it will look like a pie chart instead)
    this.innerRadius = this.outerRadius * (1 - this.arcWidth);

    // ? Calculate value percent relative to total
    this.chartData.percent = Math.round((this.chartData.value * 100) / this.chartData.total);

    // ? Calculate end angle as the percentage of the total value
    // ? Given that a complete circle = Math.PI * 2
    this.endAngle = (this.chartData.percent / 100) * (Math.PI * 2);
  }

  onClick(data: any): void {
    this.select.emit(data);
    console.log('onClick', data);
  }

  private hasNoOptionalMarginsSet(): boolean {
    return !this.margins || this.margins.length <= 0;
  }
}
