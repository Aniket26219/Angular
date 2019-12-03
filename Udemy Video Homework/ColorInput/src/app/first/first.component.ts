import { Component, OnInit } from '@angular/core';
import { EvAl } from './ev-al';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styles: []
})
export class FirstComponent implements OnInit {

  eval : EvAl
  constructor() { }

  ngOnInit() {
  }

  captureAlert(evAle : EvAl){
    console.log(`Received Event ${evAle}`)
    this.eval = evAle
  }
}
