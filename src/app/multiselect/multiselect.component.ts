import { Component, OnInit } from '@angular/core';
import { DataModel } from './data.model';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-multiselect-body',
  templateUrl: './multiselect.component.html',
  styleUrls: ['./multiselect.component.sass']
})
export class MultiSelectBodyComponent implements OnInit {
  data: Observable<DataModel[]>;
  selectedData: DataModel[] = [
    {id: 10, name: 'Clementina DuBuque', username: 'Moriah.Stanton'}
  ];
  constructor(

  ) { }

  ngOnInit() {
  }

}
