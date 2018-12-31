import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {

  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postLoveIts: number;
  @Input() postDontLoveIts: number;
  @Input() postDate: Date;

  constructor() { }

  ngOnInit() {
  }

  getPostTitle() {
    return this.postTitle;
  }

  getPostContent() {
    return this.postContent;
  }

  getPostLoveIts() {
    return this.postLoveIts;
  }

  getPostDontLoveIts() {
    return this.postDontLoveIts;
  }

  getPostDate() {
    return this.postDate
  }

  getItemShadowColor() {
    if(this.postLoveIts > this.postDontLoveIts) {
      return '0px 0px 10px #28a745';
    }
    if(this.postDontLoveIts > this.postLoveIts) {
      return '0px 0px 10px #dc3545';
    }
  }

  increasePostLoveIts() {
    this.postLoveIts ++;
    if (this.postDontLoveIts > 0) {
      this.postDontLoveIts --;
    }
  }

  increasePostDontLoveIts() {
    this.postDontLoveIts ++;
    if (this.postLoveIts > 0) {
      this.postLoveIts --;
    }
  }
}
