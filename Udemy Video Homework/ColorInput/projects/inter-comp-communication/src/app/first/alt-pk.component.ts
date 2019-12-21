import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { EvAl } from "./ev-al";

@Component({
  selector: "app-alt-pk",
  templateUrl: "./alt-pk.component.html",
  styles: []
})
export class AltPkComponent implements OnInit {
  @Output()
  picked: EventEmitter<EvAl> = new EventEmitter();
  constructor() {}

  ngOnInit() {}

  onPick(alert: string) {
    let evAlert: EvAl = {
      al: alert
    };
    this.picked.emit(evAlert);
  }
}
