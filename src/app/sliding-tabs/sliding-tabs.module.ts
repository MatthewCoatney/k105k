import { IonicModule } from '@ionic/angular';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from '../components/components.module';
import { SlidingTabsPage } from './sliding-tabs.page';


const routes: Routes = [
  {
    path: '',
    component: SlidingTabsPage
  }
];

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    ComponentsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SlidingTabsPage],
  providers: []
})
export class SlidingTabsPageModule {}
