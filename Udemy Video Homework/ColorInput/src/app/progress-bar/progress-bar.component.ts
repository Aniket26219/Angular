import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit {

  wd : number = 10

  constructor() { }

  ngOnInit() {
  }

  progress(num : number){

    if(this.wd < 10){
      this.wd = 10
    } if(this.wd > 100){
      this.wd = 100
    }
    if(num){
      this.wd += 5
    }
    else{
      this.wd -= 5
    }
  }

}
