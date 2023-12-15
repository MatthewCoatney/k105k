import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from "@ngx-formly/core";
import { FormlyIonicModule } from "@ngx-formly/ionic";
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AmplifyAuthenticatorModule } from "@aws-amplify/ui-angular";
import { ComponentsModule } from '../components/components.module';

import { LoginPage } from './login.page';

const routes: Routes = [
  {
    path: '',
    component: LoginPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ComponentsModule,
    AmplifyAuthenticatorModule,
    FormlyIonicModule,
    FormlyModule
  ],
  declarations: [LoginPage],
})
export class LoginPageModule {}
