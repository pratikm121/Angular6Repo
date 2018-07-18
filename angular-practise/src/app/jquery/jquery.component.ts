import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-jquery',
  templateUrl: './jquery.component.html',
  styleUrls: ['./jquery.component.css']
})
export class JqueryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('button').click(function(){
      alert('Got the Jquery');
    });

    $( function() {
      $( "#datepicker" ).datepicker();
    } );
  }

}
