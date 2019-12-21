import { Component, OnInit } from '@angular/core';
import { AlertService } from './alert.service';

@Component({
selector: 'app-picker',
template: `
    <div class="row">
        <div class="col-md-12">
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <div class="card-title">Please choose a alert</div>
                    <div class="alert alert-primary" (click)="onPick('alert alert-primary')">
                        Simple Primary alert
                    </div>
                    <div class="alert alert-secondary" (click)="onPick('alert alert-secondary')">
                        Simple Primary alert
                    </div>
                    <div class="alert alert-info" (click)="onPick('alert alert-info')">
                        Simple Primary alert
                    </div>
                    <div class="alert alert-success" (click)="onPick('alert alert-success')">
                        Simple Primary alert
                    </div>
                    <div class="alert alert-warning" (click)="onPick('alert alert-warning')">
                        Simple Primary alert
                    </div>
                    <div class="alert alert-danger" (click)="onPick('alert alert-danger')">
                        Simple Primary alert
                    </div>
                </div>
            </div>
        </div>
    </div>`,
styles: []
})
export class PickerComponent implements OnInit {

    constructor(
        private AlService : AlertService
    ) { }

    ngOnInit() {
    }

    onPick(alert : string){
        this.AlService.publishAl(alert)
    }
}
