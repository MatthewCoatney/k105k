import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { WordpressPostPage } from './post.page';
import { WordpressPostResolver } from './post.resolver';
import { WordpressService } from '../wordpress.service';


const routes: Routes = [
  {
    path: '',
    component: WordpressPostPage,
    resolve: {
      data: WordpressPostResolver
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [WordpressPostPage],
  providers: [WordpressService, WordpressPostResolver]
})
export class WordpressPostPageModule {}
