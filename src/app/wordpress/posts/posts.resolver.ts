import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { WordpressService } from '../wordpress.service';
import { WordpressNativeService } from '../wordpress.native.service';


@Injectable()
export class WordpressPostsResolver implements Resolve<any> {
  // constructor(private wordpressService: WordpressService) {}
  constructor(private wordpressService: WordpressNativeService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    const categoryId = route.queryParams['categoryId'];
    const categoryTitle = route.queryParams['title'];

    return this.wordpressService.getRecentPosts(categoryId).pipe(
      map((posts) => {
        return { posts, categoryTitle, categoryId };
      })
    );
  }
}
