import { Component, OnInit } from '@angular/core';
import { AlertService } from './alert.service';
import { EvAl } from 'projects/inter-comp-communication/src/app/first/ev-al';

@Component({
  selector: 'app-maker',
  template: `
    <div class="row">
      <div class="col-md-12">
        <div style="height: 500px;" [class]="aleve?.al">

        </div>
      </div>
    </div>
  `,
  styles: []
})
export class MakerComponent implements OnInit {

  aleve : EvAl
  constructor(
    private AlService: AlertService
  ) { }

  ngOnInit() {
    this.AlService.subscribeAl((eva : EvAl) => {
      this.aleve = eva
    })
  }

}
