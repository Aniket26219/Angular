import { Component, EventEmitter} from '@angular/core';
import { Table } from './domain';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ColorInput';


  mainrow : Array<Table> = new Array<Table>()

  fetchbtn(){
    this.mainrow.push({ id: 1, product: 'PC', quantity: 3, price: 120000 })
    this.mainrow.push({ id: 2, product: 'Laptop', quantity: 1, price: 40000 })
    this.mainrow.push({ id: 3, product: 'Mouse', quantity: 3, price: 1500 })
    this.mainrow.push({ id: 4, product: 'Keyboard', quantity: 3, price: 3000 })
  }

  deleterows(mainrows : Table){
    console.log(`delete clicked and event out of the component is invoked`, mainrows)
    this.mainrow.forEach((data,num) =>{
      if(data.id === mainrows.id){
        this.mainrow.splice(num , 1)
      }
    })
  }

  addrows(addingrow: Table){
    this.mainrow.push(addingrow)
  }
}
