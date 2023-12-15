import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

import { WordpressService } from '../wordpress.service';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.page.html',
  styleUrls: ['./posts.page.scss']
})
export class WordpressPostsPage implements OnInit {
  posts: Array<any> = new Array<any>();
  categoryId: number;
  categoryTitle: string;

  constructor(
    public loadingController: LoadingController,
    private route: ActivatedRoute,
    public wordpressService: WordpressService
  ) {}

  ngOnInit() {
    this.route.data.subscribe((routeData) => {
      const data = routeData['data'];

      this.posts = data.posts;
      this.categoryId = data.categoryId;
      this.categoryTitle = data.categoryTitle;
    });
  }

  loadData(event: any) {
    const page = Math.ceil(this.posts.length / 10) + 1;

    this.wordpressService.getRecentPosts(this.categoryId, page)
    .subscribe({
      next: (newPagePosts: []) => {
        this.posts.push(...newPagePosts);
        event.target.complete();
      },
      error: (err) => {
        // ! There are no more posts available
        event.target.disabled = true;
      }
    });
  }
}
