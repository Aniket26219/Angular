import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { AltPkComponent } from './first/alt-pk.component';
import { AltMnComponent } from './first/alt-mn.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    AltPkComponent,
    AltMnComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
