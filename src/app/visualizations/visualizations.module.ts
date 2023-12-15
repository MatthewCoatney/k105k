import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { ShellModule } from '../shell/shell.module';

import { VisualizationsRoutingModule } from './visualizations-routing.module';


@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    ShellModule,
    VisualizationsRoutingModule
  ],
  declarations: []
})
export class VisualizationsModule { }
