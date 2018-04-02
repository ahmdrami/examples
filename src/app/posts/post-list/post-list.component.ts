import { Component, OnInit } from '@angular/core';
import { HttpserviceService } from '../../services/httpservice.service';
import { Observable } from 'rxjs/Observable';
import { Post } from '../post-model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.sass']
})
export class PostListComponent implements OnInit {
  posts: Observable<Post>;
  constructor(
    private svc: HttpserviceService
  ) { }

  ngOnInit() {
    this.svc.getData().subscribe(
      data => {
        this.posts = data;
      },
      error => console.log(error)
    );
  }

  search(search: string) {
    console.log(search);
  }

}
