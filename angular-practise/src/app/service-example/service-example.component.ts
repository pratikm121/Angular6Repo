import { Component, OnInit } from '@angular/core';
import { MyServiceService } from '../my-service.service';

@Component({
  selector: 'service-example',
  templateUrl: './service-example.component.html',
  styleUrls: ['./service-example.component.css']
})
export class ServiceExampleComponent implements OnInit {

  public usersData = [];
  public usersJsonData = [];
  public usersHttpData = [];
  public usersSpringRestApiData = [];
  public usersSpringRestApiData2 = [];
  public errorMsg;


  constructor(private _getMyService : MyServiceService) { }

  ngOnInit() {
    this.usersData = this._getMyService.getData();
    this._getMyService.getDataViaJson().subscribe(data => this.usersJsonData = data ,error =>this.errorMsg = error);
    this._getMyService.getDataViaHttp().subscribe(data => this.usersHttpData[0] = data ,error =>this.errorMsg = error);
    
  }

  getSpringRestApiData(){
    console.log('Beofre');
    this._getMyService.getDataViaSpringRestApi().subscribe(data => this.usersSpringRestApiData[0] = data ,error =>this.errorMsg = error);    
    console.log('After');
  }

  getSpringRestApiData2(){
    console.log('Beofre');
    this._getMyService.getDataViaSpringRestApi2().subscribe(data => this.usersSpringRestApiData2[0] = data ,error =>this.errorMsg = error);    
    console.log('After');
  }

}
