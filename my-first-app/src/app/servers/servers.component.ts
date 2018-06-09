import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {

  title = ', this is your practise area';
  name = 'Pratik';
  userName = '';
  userStatusName = '';
  userUpdateStatus = false;
  userbackgroundColor = '';

  

  onUpdateUserName(event: Event){
    this.userName = (<HTMLInputElement>event.target).value;
  }

  onSubmitButton(){    
    this.userStatusName = this.userName;
    this.userUpdateStatus = true;
    this.userbackgroundColor = this.userUpdateStatus ? 'red':'green';
  } 
  
  onResetButton(){
    this.userName = '';
    this.userStatusName = '';
    this.userUpdateStatus = false;
    this.userbackgroundColor = this.userUpdateStatus ? 'red':'brown';
}

}
