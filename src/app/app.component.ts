import { Component } from '@angular/core';
import {DataService} from './data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //template: '<p> {{ someProperty }} </p>',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(private dataService:DataService)
  {}
  someProperty:string = '';
  ngOnInit()
  {
    console.log(this.dataService.cars);
    this.someProperty = this.dataService.myData();
  }
 
}
