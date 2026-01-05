import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RightAltPageRoutingModule } from './right-alt-routing.module';

import { RightAltPage } from './right-alt.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RightAltPageRoutingModule
  ],
  declarations: [RightAltPage]
})
export class RightAltPageModule {}
