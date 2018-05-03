import { Component, OnInit, Renderer2, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Post } from '../post-model';
import { PostService } from '../post.service';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-post-list',
    templateUrl: './post-list.component.html',
    styleUrls: ['./post-list.component.sass']
})
export class PostListComponent implements OnInit, AfterViewInit {
    posts: Observable<Post>;
    isLoading = true;

    @ViewChild('postContainer') postContainer: ElementRef;

    constructor(
        private postSvc: PostService, 
        private renderer: Renderer2,
        private title: Title
    ) {}

    ngOnInit() {
        this.title.setTitle('Posts');
        this.loadPosts();
        
    }


    ngAfterViewInit(): void {
        this.listenToScroll();
    }

    search(search: string) {
        console.log(search);
    }

    loadPosts(): void {
        this.postSvc.getData().subscribe(
            data => {
                this.posts = data;
                this.isLoading = false;
            },
            error => console.log(error)
        );
    }

    private listenToScroll() {
        const container = this.postContainer.nativeElement;
        this.renderer.listen(window, 'scroll', () => {
            window.scrollY > 500
                ? this.renderer.addClass(container, 'active')
                : this.renderer.removeClass(container, 'active');
        });
    }

    onResize(event: Event) {
        console.log('Resize:event');
    }

    onScroll(event: Event) {
        console.log('Scroll:event');
    }
}
