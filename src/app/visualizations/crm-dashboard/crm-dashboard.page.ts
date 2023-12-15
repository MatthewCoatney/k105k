import { Component, OnInit, ViewChild } from "@angular/core";
import { UntypedFormControl, UntypedFormGroup } from "@angular/forms";
import { LineChartComponent } from "@swimlane/ngx-charts";
import { curveLinear, curveNatural } from "d3-shape";

import { CrmDashboardService } from "./crm-dashboard.service";


@Component({
  selector: "app-crm-dashboard",
  templateUrl: "./crm-dashboard.page.html",
  styleUrls: ["./crm-dashboard.page.scss"]
})
export class CrmDashboardPage implements OnInit {
  @ViewChild(LineChartComponent) chartInstance?: LineChartComponent;

  customChartFiltersForm: UntypedFormGroup;

  revenueChartData: any;

  campaignProgressChartData: any;

  doughnutColorScheme = {
    active: '#2c93e8',
    background: '#cce3fa'
  };

  lineChartColorScheme = {
    domain: ["#338fe2", "#3b5eab"]
  };

  lineChartOptions: any;

  campaignPerformanceData = [];

  constructor(
    private crmDashboardService: CrmDashboardService
  ) {
    this.customChartFiltersForm = new UntypedFormGroup({
      selected_option: new UntypedFormControl('week')
    });

    const isSmooth = true;

    this.lineChartOptions = {
      showXAxis: true,
      showYAxis: true,
      showLegend: false,
      showGridLines: true,
      showXAxisLabel: false,
      showYAxisLabel: false,
      legendPosition: "right",
      // ? autoScale: true changes the y axis reference
      autoScale: false,
      curve: isSmooth ? curveNatural : curveLinear,
      roundDomains: true
    };

    this.revenueChartData = crmDashboardService.getRevenueData();
    this.campaignProgressChartData = crmDashboardService.getCampaignProgressData();
    this.campaignPerformanceData = crmDashboardService.getCampaignPerformanceData();
  }

  ngOnInit() {
    console.log('not empty');
  }
}
