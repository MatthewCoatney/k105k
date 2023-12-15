import { Injectable } from '@angular/core';

@Injectable()
export class CrmDashboardService {

  constructor() { }

  // ? Revenue data for the doughnut chart
  public getRevenueData() {
    const revenueData = {
      name: 'Revenue',
      value: 5094,
      total: 8940
    };

    return revenueData;
  }

  // ? Campaign progress data for the doughnut chart
  public getCampaignProgressData() {
    const campaignProgressChartData = {
      name: 'Campaign Progress',
      value: 85,
      total: 100
    };

    return campaignProgressChartData;
  }

  // ? Earnings and Revenue data for the line chart
  public getCampaignPerformanceData() {
    const campaignPerformanceData = [
      {
        name: "Earnings",
        series: [
          {
            value: 680,
            name: "Mon"
          },
          {
            value: 932,
            name: "Tue"
          },
          {
            value: 901,
            name: "Wed"
          },
          {
            value: 934,
            name: "Thu"
          },
          {
            value: 1290,
            name: "Fri"
          },
          {
            value: 1330,
            name: "Sat"
          },
          {
            value: 1320,
            name: "Sun"
          }
        ]
      },
      {
        name: "Revenue",
        series: [
          {
            value: 620,
            name: "Mon"
          },
          {
            value: 999,
            name: "Tue"
          },
          {
            value: 1003,
            name: "Wed"
          },
          {
            value: 1200,
            name: "Thu"
          },
          {
            value: 1100,
            name: "Fri"
          },
          {
            value: 1200,
            name: "Sat"
          },
          {
            value: 1500,
            name: "Sun"
          }
        ]
      }
    ];

    return campaignPerformanceData;
  }
}
