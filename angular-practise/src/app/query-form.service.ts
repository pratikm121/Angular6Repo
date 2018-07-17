import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '../../node_modules/@angular/common/http';
import {QueryFormInput} from './query-form-input';
import { throwError } from '../../node_modules/rxjs';
import {catchError} from '../../node_modules/rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class QueryFormService {

  _url = "https://jsonplaceholder.typicode.com/posts";
  myObjectFromAnotherComponent :QueryFormInput;

  constructor(private _http:HttpClient) { }

  submitFormData(queryFormInput:QueryFormInput){
    this.myObjectFromAnotherComponent = queryFormInput;
    return this._http.post<any>(this._url,queryFormInput).pipe(catchError(this.errorHandler));
  }

  errorHandler(error:HttpErrorResponse){
      return throwError(error);
  }

  getFormData(){
      console.log('Name2 = '+this.myObjectFromAnotherComponent.name);
      return this.myObjectFromAnotherComponent;
  }
}
