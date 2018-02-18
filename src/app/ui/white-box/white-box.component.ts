import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-white-box',
  templateUrl: './white-box.component.html'
})
export class WhiteBoxComponent implements OnInit {

  @Input()
  title: string;

  constructor() { }

  ngOnInit() {
  }

}
