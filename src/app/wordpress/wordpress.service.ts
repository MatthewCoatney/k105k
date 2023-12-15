import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { forkJoin, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../environments/environment';


@Injectable()
export class WordpressService {
  constructor(public http: HttpClient) {}

  public getPost(postId: any): Observable<any> {
    const postObservable: Observable<any> = this.http.get(`${environment.wordpress_api_url}posts/${postId}`);

    return postObservable;
  }

  public getRecentPosts(categoryId: any, page: number = 1): Observable<any> {
    // ? If you want to query posts by category
    let category_url = categoryId ? '&categories=' + categoryId : '';

    const recentPostsObservable: Observable<any> = this.http
    .get(
      environment.wordpress_api_url +
      'posts?page=' +
      page +
      '&orderby=modified' + // ? Order by last modified date
      category_url
    )
    .pipe(
      map((posts: []) => {
        posts.forEach((post: any) => {
          // ? We remove the 'read more' link that the excerpt contains.
          // ? This is optional, you can remove this line if you want.
          post.excerpt.rendered = post.excerpt.rendered.split('<a')[0] + '</p>';
        });
        return posts;
      })
    );

    return recentPostsObservable;
  }

  public getComments(postId: number, page: number = 1): Observable<any> {
    const commentsObservable: Observable<any> = this.http.get(environment.wordpress_api_url + 'comments?post=' + postId + '&page=' + page);

    return commentsObservable;
  }

  public getAuthor(author): Observable<any> {
    const authorObservable: Observable<any> = this.http.get(environment.wordpress_api_url + 'users/' + author);

    return authorObservable;
  }

  public getPostCategories(post): Observable<any> {
    let observableBatch = [];

    post.categories.forEach((category: number) => {
      observableBatch.push(this.getCategory(category));
    });

    // ? Don't mind this deprecation (https://rxjs.dev/deprecations/array-argument)
    // ? observableBatch is already an Array of observables
    return forkJoin(observableBatch);
  }

  public getCategory(category: number): Observable<any> {
    const categoryObservable: Observable<any> = this.http.get(environment.wordpress_api_url + 'categories/' + category);

    return categoryObservable;
  }
}
