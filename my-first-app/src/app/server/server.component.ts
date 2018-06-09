import { Component} from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styleUrls: ['./server.component.css']

})

export class ServerComponent{
    title = ', this is calling your server component';
    name = 'Pratik';
    serverName = '';
    serverStatus = '';
    serverUpdatedStatus = '';
    userName = '';

    onUpdateServerName(event: Event){
        this.serverName = (<HTMLInputElement>event.target).value;
    }

    onUpdateServerStatus(event: Event){
        this.serverStatus = (<HTMLInputElement>event.target).value;
    }

    onSubmitButton(){
        this.serverUpdatedStatus = 'The server ' + this.serverName + ' was created for you with status = ' + this.serverStatus;
    }

    onResetButton(){
        this.userName = '';
    }
}
