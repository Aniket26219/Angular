import { Component } from '@angular/core';
import { Eves } from './first/Eves';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ColorInput';

  clk(eves : Eves){
    console.log(eves)
  }
}
