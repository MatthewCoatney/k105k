import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RightAltPage } from './right-alt.page';

const routes: Routes = [
  {
    path: '',
    component: RightAltPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RightAltPageRoutingModule {}
