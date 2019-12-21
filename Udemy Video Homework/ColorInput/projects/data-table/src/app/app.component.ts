import { Component } from '@angular/core';
import { TableRow } from './data-domain';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'data-table';

  data = new Array<TableRow>()

  fetchbtn(){
    this.data.push({ id: 1, item: 'pc', quantity: 1, price: 30000 })
    this.data.push({ id: 2, item: 'laptop', quantity: 1, price: 20000 })
    this.data.push({ id: 3, item: 'keybord', quantity: 2, price: 3000 })
    this.data.push({ id: 4, item: 'mouse', quantity: 4, price: 2500 })
  }

  deleterows(row : TableRow){
    console.log(`delete clicked from main component`, row)
    this.data.forEach((dt,numb) =>{
      if(dt.id === row.id)
      this.data.splice(numb,1)
    })
  }
}
