import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  @Input()
  title : string

  @Input()
  type : string

  constructor() { }

  ngOnInit() {
    this.type = `alert alert-${this.type}`
  }
}