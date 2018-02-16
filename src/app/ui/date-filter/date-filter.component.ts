import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Filter} from "./date-filter.model";

@Component({
  selector: 'app-date-filter',
  templateUrl: './date-filter.component.html'
})
export class DateFilterComponent implements OnInit {

  @Output()
  change = new EventEmitter<Filter>();

  filter = new Filter();

  constructor() { }

  ngOnInit() {
  }


  update(key: string, value: string) {
    this.filter[key] = value;

    this.change.emit(this.filter);
  }


}
