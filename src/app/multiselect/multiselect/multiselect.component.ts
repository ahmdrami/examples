import { Component, OnInit, Input, AfterContentInit } from '@angular/core';
import { DataModel } from '../data.model';
import { findIndex } from 'lodash';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'app-multiselect',
    templateUrl: './multiselect.component.html',
    styleUrls: ['./multiselect.component.sass']
})
export class MultiselectComponent implements OnInit {

    @Input() selected: DataModel[];
    @Input() data: Observable<DataModel[]>;

    optionsData: DataModel[];
    showMenu: boolean;
    search: string;
    constructor() {}

    ngOnInit() {
        this.selected = (this.selected) ? this.selected : [];
        this.data.subscribe(data => {
            this.optionsData = data;
            this.applyChecks();
        });

    }

    toggleItemSelection(item: DataModel) {

        this.toggleCheckBox(item);
        if (findIndex(this.selected, { id: item.id }) < 0) {
            this.selected.push(item);
            return;
        }

        this.selected.splice(findIndex(this.selected, { id: item.id }) , 1);


    }

    showOptions(): void {
        this.showMenu = true;
    }

    toggleMenu(): void {
        this.showMenu = !this.showMenu;
    }

    private applyChecks() {
        if (this.selected) {
            this.optionsData.forEach(item => {
                if (findIndex(this.selected, { id: item.id }) > -1) {
                    item.selected = true;
                }
            });
        }
    }

    private toggleCheckBox(item: DataModel) {
        item.selected = !item.selected;
    }
}
