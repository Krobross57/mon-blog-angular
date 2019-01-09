import { Component, OnInit } from '@angular/core';
import { Post } from '../models/Post.model';
import { Router, ActivatedRoute } from '@angular/router';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {

  post: Post;

  constructor(private route: ActivatedRoute,private postsService: PostsService, private router: Router) { }

  ngOnInit() {
    this.post = new Post('', '', 0, 0, null);
    const id = this.route.snapshot.params['id'];
    this.postsService.getSinglePost(+id).then(
      (post: Post) => {
        this.post = post;
      }
    );
  }

  onBack() {
    this.router.navigate(['/posts']);
  }
}
