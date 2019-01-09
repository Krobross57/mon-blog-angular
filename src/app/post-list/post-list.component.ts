import { Component, OnInit, OnDestroy } from '@angular/core';
import { Post } from '../models/Post.model';
import { Subscription } from 'rxjs/Subscription';
import { PostsService } from '../services/posts.service';
import { Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy {

  posts: Post[];
  postsSubscription: Subscription;

  constructor(private postsService: PostsService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.postsSubscription = this.postsService.postSubject.subscribe(
      (posts: Post[]) => {
        this.posts = posts;
      }
    );
    this.postsService.getPosts();
    this.postsService.emitPostSubject();
  }

  onLoveItsPlus(index: number) {
    this.postsService.increasePostLoveIts(index);
  }

  onDontLoveItsPlus(index: number) {
    this.postsService.increasePostDontLoveIts(index);
  }

  onNewPost() {
    this.router.navigate(['/posts', 'new']);
  }

  onDeletePost(index: number) {
    this.postsService.removePost(index);
    this.router.navigate(['/posts']);
  }

  onViewPost(id: number) {
    this.router.navigate(['/posts', 'view', id]);
  }

  ngOnDestroy() {
    this.postsSubscription.unsubscribe();
  }
}
