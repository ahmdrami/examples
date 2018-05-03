import { Component, OnInit, Input, Attribute, HostBinding } from '@angular/core';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.sass']
})
export class PostDetailComponent implements OnInit {
  static nextId = 1;
  @Input() post: any;
  @HostBinding() id = `post-list-item-${PostDetailComponent.nextId++}`;
  @HostBinding('style.padding') padding = '1px';
  
  constructor(
    @Attribute('class') private hostId: string // Get directive attribute
  ) { }

  ngOnInit() {
  }

}
