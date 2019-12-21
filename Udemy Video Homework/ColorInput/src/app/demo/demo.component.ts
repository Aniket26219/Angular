import { Component, OnInit, Input, Output, EventEmitter, ElementRef, ViewChild } from '@angular/core';
import { Table } from '../domain';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  @ViewChild('inpid',{static : false})
  inpid : ElementRef

  @ViewChild('inpproduct',{static : false})
  inpproduct : ElementRef

  @ViewChild('inpquantity',{static : false})
  inpquantity : ElementRef

  @ViewChild('inpprice',{static : false})
  inpprice : ElementRef

  @Input()
  componentrows : Array<Table> = new Array<Table>()

  @Output()
  deleterow : EventEmitter<Table> = new EventEmitter()

  @Output()
  addrow =new EventEmitter<Table>()

  emobj : Table

  constructor() { }

  ngOnInit() {
  }

  ondelete(comprow : Table){
    this.deleterow.emit(comprow)
  }

  onadd(){
    this.emobj = ({
      id : this.inpid.nativeElement.value,
      product : this.inpproduct.nativeElement.value,
      quantity : this.inpquantity.nativeElement.value,
      price : this.inpprice.nativeElement.value
    })
    this.addrow.emit(this.emobj)
  }
}
