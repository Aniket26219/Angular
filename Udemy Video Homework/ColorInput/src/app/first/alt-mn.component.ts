import { Component, OnInit, Input } from '@angular/core';
import { EvAl } from './ev-al';

@Component({
  selector: 'app-alt-mn',
  templateUrl: './alt-mn.component.html',
  styles: []
})
export class AltMnComponent implements OnInit {

  @Input()
  alerttyp : EvAl
  constructor() { }

  ngOnInit() {
  }
}
