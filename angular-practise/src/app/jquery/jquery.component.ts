import { Component, OnInit } from '@angular/core';
import { MyServiceService } from '../my-service.service';
declare var $:any;

@Component({
  selector: 'app-jquery',
  templateUrl: './jquery.component.html',
  styleUrls: ['./jquery.component.css']
})
export class JqueryComponent implements OnInit {

  public jqueryDate : Date;
  restApiData = [];
  errorMsg = '';

  constructor(private _getMyService : MyServiceService) { }

  ngOnInit() {
     $('button').click(function(){
      console.log('Got the Jquery');
     });   

    $( function() {
      $( "#datepicker" ).datetimepicker({
        format: 'Y/m/d H:i'
       });

      //  $( "#datepicker" ).datepicker( "option", "showAnim", "slideDown" );
    } );

    $('#Submit').click(function(){
      this.jqueryDate = $( "#datepicker" ).datepicker().val();
      console.log(this.jqueryDate);
    });


  }

  submitJqueryValue(){
    console.log('reached');
    this._getMyService.getDataViaHttp().subscribe(data => {
      if(data.length>0){
          this.restApiData = data;          
          console.log('Got here'+data.length);
      }else{
          this.restApiData[0] = data;
          console.log('Got = '+data.toString);
      }
    } ,error =>this.errorMsg = error);  
  }
  
}
