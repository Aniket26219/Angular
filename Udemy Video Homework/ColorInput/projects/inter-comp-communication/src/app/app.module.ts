import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { AltMnComponent } from './first/alt-mn.component';
import { AltPkComponent } from './first/alt-pk.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    AltMnComponent,
    AltPkComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
