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
  public errorMsg;


  constructor(private _getMyService : MyServiceService) { }

  ngOnInit() {
    this.usersData = this._getMyService.getData();
    this._getMyService.getDataViaJson().subscribe(data => this.usersJsonData = data ,error =>this.errorMsg = error);
    this._getMyService.getDataViaHttp().subscribe(data => this.usersHttpData[0] = data ,error =>this.errorMsg = error);
  }

}
