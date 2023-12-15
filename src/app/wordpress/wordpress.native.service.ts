import { Injectable } from '@angular/core';

import { forkJoin, from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { CapacitorHttp, HttpResponse } from '@capacitor/core';

import { environment } from '../../environments/environment';


@Injectable()
export class WordpressNativeService {
  constructor() {}

  public getPost(postId: any): Observable<any> {
    const postPromise: Promise<HttpResponse> = CapacitorHttp.get({
      url: `${environment.wordpress_api_url}posts/${postId}`
    });

    const postObservable: Observable<HttpResponse> = from(postPromise)
    .pipe(
      map((postResponse: HttpResponse) => {
        const post = postResponse.data;

        return  post;
      })
    );

    return postObservable;
  }

  public getRecentPosts(categoryId: any, page: number = 1): Observable<any> {
    // ? If you want to query posts by category
    let category_url = categoryId ? '&categories=' + categoryId : '';

    const recentPostsPromise: Promise<HttpResponse> = CapacitorHttp.get({
      url: environment.wordpress_api_url +
      'posts?page=' +
      page +
      '&orderby=modified' + // ? Order by last modified date
      category_url
    });

    const recentPostsObservable: Observable<HttpResponse> = from(recentPostsPromise)
    .pipe(
      map((postsResponse: HttpResponse) => {
        const posts = postsResponse.data;

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
    const commentsPromise: Promise<HttpResponse> = CapacitorHttp.get({
      url: environment.wordpress_api_url + 'comments?post=' + postId + '&page=' + page
    });

    const commentsObservable: Observable<HttpResponse> = from(commentsPromise)
    .pipe(
      map((commentsResponse: HttpResponse) => {
        const comments = commentsResponse.data;

        return  comments;
      })
    );

    return commentsObservable;
  }

  public getAuthor(author): Observable<any> {
    const authorPromise: Promise<HttpResponse> = CapacitorHttp.get({
      url: environment.wordpress_api_url + 'users/' + author
    });

    const authorObservable: Observable<HttpResponse> = from(authorPromise)
    .pipe(
      map((authorResponse: HttpResponse) => {
        const author = authorResponse.data;

        return  author;
      })
    );

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
    const categoryPromise: Promise<HttpResponse> = CapacitorHttp.get({
      url: environment.wordpress_api_url + 'categories/' + category
    });

    const categoryObservable: Observable<HttpResponse> = from(categoryPromise)
    .pipe(
      map((categoryResponse: HttpResponse) => {
        const category = categoryResponse.data;

        return  category;
      })
    );

    return categoryObservable;
  }
}
