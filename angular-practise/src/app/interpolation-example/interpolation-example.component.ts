import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'interpolation-tut',
  templateUrl: './interpolation-example.component.html',
  styleUrls: ['./interpolation-example.component.css']
})
export class InterpolationExampleComponent implements OnInit {

  public name = 'Pratik';
  public message = ' this is an example of String interpolation';
  public dateTime : Date = new Date;
  constructor() { }

  ngOnInit() {
  }

}
