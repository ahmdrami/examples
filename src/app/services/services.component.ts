import { Component, OnInit } from '@angular/core';
import { HttpserviceService } from './httpservice.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.sass']
})
export class ServicesComponent implements OnInit {

  constructor(
    private Svc: HttpserviceService
  ) { }

  ngOnInit() {
    this.Svc.getData().subscribe(data => console.log(data));
  }

}
