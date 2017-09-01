import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-new-component',
  template: '<h1>Hi</h1> <button [disabled]="buttonStatus" (click)="myMethod($event)">My Button</button>',
  styles: [`
  h1 {
      text-decoration:underline;
  }
`]
})
export class MyNewComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  buttonStatus = false;

  myMethod(event) {
    console.log(event);
  }

}
