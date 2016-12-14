import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { PostsService } from '../posts.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-post-single',
  templateUrl: './post-single.component.html',
  styleUrls: ['./post-single.component.css'],
  providers: [PostsService]
})
export class PostSingleComponent implements OnInit {

  post: Post;

  loading: string = "Loading...";

  constructor( private postsService: PostsService, private route: ActivatedRoute ) { }

  getPost(id){
    this.postsService
        .getPost(id)
        .subscribe(
            res => {
              this.post = res;
            },
            error => {
              this.loading = "No posts found";
            },
            () => {}
        );
  }

  ngOnInit() {

    this.route.params.forEach((params: Params) => {
      let id = params['id'];
      this.getPost(id)
    });

  }

}
