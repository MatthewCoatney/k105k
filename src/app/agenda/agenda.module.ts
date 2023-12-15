import { IonicModule } from '@ionic/angular';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from '../components/components.module';
import { AgendaPage } from './agenda.page';
import { AgendaResolver } from './agenda.resolver';
import { AgendaService } from './agenda.service';


const routes: Routes = [
  {
    path: '',
    component: AgendaPage,
    resolve: {
      data: AgendaResolver
    }
  }
];

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    ComponentsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AgendaPage],
  providers: [AgendaResolver, AgendaService]
})
export class AgendaPageModule {}
