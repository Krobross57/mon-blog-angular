import { Injectable } from '@angular/core';
import { Post } from '../models/Post.model';
import { Subject } from 'rxjs/Subject';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})

export class PostsService {

  posts: Post[] = [];
  postSubject = new Subject<Post[]>();

  constructor() {}

  emitPostSubject() {
    this.postSubject.next(this.posts);
  }

  savePosts() {
    firebase.database().ref('/posts').set(this.posts);
  }

  getPosts() {
      firebase.database().ref('/posts').on('value', (data) => {
        this.posts = data.val() ? data.val() : [];
        this.emitPostSubject();
      });
  }

  getSinglePost(id:number) {
    return new Promise(
      (resolve, reject) => {
        firebase.database().ref('/posts/' + id).once('value').then(
          (data) => {
            resolve(data.val());
          },
          (error) => {
            reject(error);
          }
        );
      }
    );
  }

  createNewPost(newPost: Post) {
    this.posts.push(newPost);
    this.savePosts();
    this.emitPostSubject();
  }

  removePost(index: number) {
    const postIndexToRemove = this.posts.indexOf(this.posts[index]);
    this.posts.splice(postIndexToRemove, 1);
    this.savePosts();
    this.emitPostSubject();
    console.log(postIndexToRemove);
  }

  increasePostLoveIts(index: number) {
    this.posts[index].loveIts++;
    if(this.posts[index].dontLoveIts > 0) {
      this.posts[index].dontLoveIts--;
    }
    this.savePosts();
    this.emitPostSubject();
  }

  increasePostDontLoveIts(index: number) {
    this.posts[index].dontLoveIts++;
    if(this.posts[index].loveIts > 0) {
      this.posts[index].loveIts--;
    }
    this.savePosts();
    this.emitPostSubject();
  }
}
