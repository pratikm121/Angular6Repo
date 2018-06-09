import { Component } from '@angular/core';

@Component({
  selector: 'app-warning',
  templateUrl: './WarningAlert.component.html',
  styleUrls: ['./WarningAlert.component.css']
})
export class WarningAlert{

  showAlert = true;
  title = ', this is your FIRST WARNING title';
  name = 'Pratik';
  warningMessage = 'Warning title will be shown in 2 seconds';
  buttonClick = "No button was clicked";

  constructor(){
    /* setInterval(() =>{      
      if(this.showAlert){
        this.showAlert = false;
        this.warningMessage = 'Warning title will be shown in 2 seconds';
      }else{
        this.showAlert = true;
        this.warningMessage = 'Warning title will be hidden in 2 seconds';
      }
      },2000); */
  }

  onButtonClick(){
    this.buttonClick = "button was clicked";
  }

  

}