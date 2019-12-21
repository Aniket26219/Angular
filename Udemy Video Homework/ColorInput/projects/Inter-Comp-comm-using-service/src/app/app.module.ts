import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InterCompCommuUsingServicesComponent } from './inter-comp-commu-using-services/inter-comp-commu-using-services.component';
import { PickerComponent } from './inter-comp-commu-using-services/picker.component';
import { MakerComponent } from './inter-comp-commu-using-services/maker.component';
import { AlertService } from './inter-comp-commu-using-services/alert.service';

@NgModule({
  declarations: [
    AppComponent,
    InterCompCommuUsingServicesComponent,
    PickerComponent,
    MakerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [AlertService],
  bootstrap: [AppComponent]
})
export class AppModule { }
