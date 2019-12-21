
import { EventEmitter } from '@angular/core';
import { EvAl } from 'projects/inter-comp-communication/src/app/first/ev-al';


export class AlertService {

  private AlEv: EventEmitter<EvAl> = new EventEmitter()
  constructor() { }

  publishAl(ale : string){
    this.AlEv.emit( {al : ale})
  }

  subscribeAl(callbackfn : (ev : EvAl) => void){
    this.AlEv.subscribe(eve => callbackfn(eve) )
  }
}
