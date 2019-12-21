import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { InterCompCommuUsingServicesComponent } from './inter-comp-commu-using-services/inter-comp-commu-using-services.component';
import { PickerComponent } from './inter-comp-commu-using-services/picker.component';
import { MakerComponent } from './inter-comp-commu-using-services/maker.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    InterCompCommuUsingServicesComponent,
    PickerComponent,
    MakerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
