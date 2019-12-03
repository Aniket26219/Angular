import { Component } from '@angular/core';
import { Eves } from './first/Eves';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ColorInput';

  ev : Eves

  clk(eves : Eves){
    this.ev = eves
    console.log(eves)
  }
}
