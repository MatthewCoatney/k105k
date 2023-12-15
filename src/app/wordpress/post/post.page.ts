import { Component, OnInit } from '@angular/core';
import { LoadingController, AlertController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

import { WordpressService } from '../wordpress.service';
import { WordpressNativeService } from '../wordpress.native.service';


@Component({
  selector: 'app-post',
  templateUrl: './post.page.html',
  styleUrls: ['./post.page.scss']
})
export class WordpressPostPage implements OnInit {
  post: any;
  author: string;
  comments = [];
  categories = [];

  constructor(
    public loadingController: LoadingController,
    public alertController: AlertController,
    private route: ActivatedRoute,
    // private wordpressService: WordpressService
    private wordpressService: WordpressNativeService
  ) {}

  async ngOnInit() {
    this.route.data.subscribe((routeData) => {
      const data = routeData['data'];
      this.post = data.post;
      this.author = data.author.name;
      this.categories = data.categories;
      this.comments = data.comments;
    });
  }

  getComments() {
    return this.wordpressService.getComments(this.post.id);
  }

  loadMoreComments(event) {
    const page = this.comments.length / 10 + 1;

    this.wordpressService.getComments(this.post.id, page)
    .subscribe({
      next: (comments: []) => {
        this.comments.push(...comments);
        event.target.complete();
      },
      error: (err) => {
        // ! There are no more comments available
        event.target.disabled = true;
      }
    });
  }
}
