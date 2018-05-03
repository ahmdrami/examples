import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Post } from '../post-model';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.sass']
})
export class PostListComponent implements OnInit {
  posts: Observable<Post>;
  constructor(
    private postSvc: PostService
  ) { }

  ngOnInit() {
    this.postSvc.getData().subscribe(
      data => {
        this.posts = data;
        console.log(this.posts);
      },
      error => console.log(error)
    );
  }

  search(search: string) {
    console.log(search);
  }

}
