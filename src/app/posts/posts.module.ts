import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { PostListComponent } from './post-list/post-list.component';
import { PostDetailComponent } from './post-list/post-detail/post-detail.component';
import { PostService } from './post.service';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    PostsRoutingModule,
    HttpClientModule,
    SharedModule
  ],
  declarations: [
    PostListComponent,
    PostDetailComponent
  ],
  providers: [
    PostService
  ]
})
export class PostsModule { }
