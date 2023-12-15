import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ComponentsModule } from '../components/components.module';
import { PipesModule } from '../pipes/pipes.module';
import { ContactsPage } from './contacts.page';
import { ContactsService } from './contacts.service';


const routes: Routes = [
  {
    path: '',
    component: ContactsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ComponentsModule,
    PipesModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ContactsPage],
  providers: [ContactsService]
})
export class ContactsPageModule {}
