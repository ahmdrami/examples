import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../post-model';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.sass']
})
export class PostDetailComponent implements OnInit {

  @Input() post: Post;
  constructor() { }

  ngOnInit() {
  }

}