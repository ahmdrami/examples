import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.sass']
})
export class FileUploadComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  dragenter(event: Event) {
    event.preventDefault();
    console.log(event);
  }

}
