import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { DummyDataInterface } from './DummyDataInterface';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';



@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  private _dummyDataJsonUrl = "/assets/DummyData/dummyData.json";
  private _actualDataJsonUrl = "https://jsonplaceholder.typicode.com/posts/1";

  constructor(private http:HttpClient) { }

  getData(){
    return [
      {"id": 1, "userId":1, "title" :"Mr Mehta" ,"body": "Hello from Pratik"},
      {"id": 2, "userId":2, "title" :"Mrs Mehta" ,"body": "Hello from Manvi"},
      {"id": 3, "userId":3, "title" :"Mrs Mehta" ,"body": "Hello from Charu"},
    ];
  }

  getDataViaHttp():Observable<DummyDataInterface[]>{
    return this.http.get<DummyDataInterface[]>(this._actualDataJsonUrl).catch(this.errorHandler);
  }

  getDataViaJson():Observable<DummyDataInterface[]>{
    return this.http.get<DummyDataInterface[]>(this._dummyDataJsonUrl);
  }

  errorHandler(error:HttpErrorResponse){
    return Observable.throw(error.message || "Server Error");
  }

}
