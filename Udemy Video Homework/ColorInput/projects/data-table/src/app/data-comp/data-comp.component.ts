import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TableRow } from './../data-domain';

@Component({
  selector: 'app-data-comp',
  templateUrl: './data-comp.component.html',
  styleUrls: ['./data-comp.component.css']
})
export class DataCompComponent implements OnInit {

  @Input()
  rows : Array<TableRow> = new Array()

  @Output()
  deleterow : EventEmitter<TableRow> = new EventEmitter()

  constructor() { }

  ngOnInit() { 
  }

  ondelete(row : TableRow){
    this.deleterow.emit(row)
  }
}
