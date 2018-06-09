import { Component } from '@angular/core';

@Component({
  selector: 'app-success',
  templateUrl: './SuccessAlert.component.html',
  styleUrls: ['./SuccessAlert.component.css']
})
export class SuccessAlert{
  showAlert = true;

  constructor(){
    /* setInterval(() =>{      
      if(this.showAlert){
        this.showAlert = false;
      }else{
        this.showAlert = true;
      }
      },3000); */
  }


  title: string = ', this is your FIRST SUCCESS title';
  name : string= 'Pratik';

}