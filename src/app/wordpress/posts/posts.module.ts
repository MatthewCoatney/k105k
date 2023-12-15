import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { WordpressPostsPage } from './posts.page';
import { WordpressPostsResolver } from './posts.resolver';
import { WordpressService } from '../wordpress.service';
import { WordpressNativeService } from '../wordpress.native.service';


const routes: Routes = [
  {
    path: '',
    component: WordpressPostsPage,
    resolve: {
      data: WordpressPostsResolver
    },
    // ? Because we use the same route for all posts and for category posts, we need to add this to refetch data
    runGuardsAndResolvers: 'paramsOrQueryParamsChange' 
  },
  {
    path: 'post/:id',
    loadChildren: () => import('../post/post.module').then(m => m.WordpressPostPageModule)
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [WordpressPostsPage],
  providers: [
    WordpressService,
    WordpressNativeService,
    WordpressPostsResolver
  ]
})
export class WordpressPostsPageModule {}
