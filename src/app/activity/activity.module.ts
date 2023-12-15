import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ComponentsModule } from '../components/components.module';

import { ActivitiesFilterModalComponent } from './activities-filter-modal/activities-filter.modal';
import { ActivityPage } from './activity.page';
import { ActivityService } from './activity.service';


const routes: Routes = [
  {
    path: '',
    component: ActivityPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ComponentsModule
  ],
  declarations: [ActivityPage, ActivitiesFilterModalComponent],
  providers: [ActivityService]
})
export class ActivityPageModule {}
