import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Eves } from './Eves';

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

  @Output()
  btnclk : EventEmitter<Eves> = new EventEmitter()

  constructor() { }

  ngOnInit() {
    this.type = `alert alert-${this.type}`
  }

  clkbtn(){
    let eves : Eves = {
      titlei : this.title,
      typei : this.type
    }
    this.btnclk.emit(eves)
  }
}