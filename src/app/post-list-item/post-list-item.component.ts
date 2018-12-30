import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {

  postTitle = 'Ta mère en string de guerre !!!';
  postContent = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
  postLoveIts = 56;
  postDontLoveIts = 76;
  postDate = '26/12/2018 à 20:32';

  constructor() { }

  ngOnInit() {
  }

  getContent() {
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
