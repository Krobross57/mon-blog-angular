import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../app.component';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {

  @Input() post: Post;

  constructor() { }

  ngOnInit() {
  }

  getPostTitle() {
    return this.post.title;
  }

  getPostContent() {
    return this.post.content;
  }

  getPostLoveIts() {
    return this.post.loveIts;
  }

  getPostDontLoveIts() {
    return this.post.dontLoveIts;
  }

  getPostDate() {
    return this.post.date_creation;
  }

  getItemShadowColor() {
    if(this.post.loveIts > this.post.dontLoveIts) {
      return '0px 0px 10px #28a745';
    }
    if(this.post.dontLoveIts > this.post.loveIts) {
      return '0px 0px 10px #dc3545';
    }
  }

  increasePostLoveIts() {
    this.post.loveIts ++;
    if (this.post.dontLoveIts > 0) {
      this.post.dontLoveIts --;
    }
  }

  increasePostDontLoveIts() {
    this.post.dontLoveIts ++;
    if (this.post.loveIts > 0) {
      this.post.loveIts --;
    }
  }
}
