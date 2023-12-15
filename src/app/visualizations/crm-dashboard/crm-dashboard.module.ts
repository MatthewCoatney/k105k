import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from "@angular/router";
import { IonicModule } from "@ionic/angular";

// ngx-charts - lib: https://swimlane.gitbook.io/ngx-charts/
import { NgxChartsModule } from "@swimlane/ngx-charts";

import { ChartsSharedModule } from '../charts/charts-shared.module';
import { CrmDashboardPage } from "./crm-dashboard.page";
import { CrmDashboardService } from './crm-dashboard.service';


const routes: Routes = [
  {
    path: "",
    component: CrmDashboardPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ChartsSharedModule,
    NgxChartsModule
  ],
  declarations: [
    CrmDashboardPage
  ],
  providers: [CrmDashboardService]
})
export class CrmDashboardModule { }
