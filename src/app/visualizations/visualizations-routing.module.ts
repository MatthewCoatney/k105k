import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "crm-dashboard",
        loadChildren: () => import("./crm-dashboard/crm-dashboard.module").then(m => m.CrmDashboardModule)
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class VisualizationsRoutingModule { }
