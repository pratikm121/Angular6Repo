import { Component, OnInit, Input } from '@angular/core';
import { FormInputs } from './formInput.model';
import { QueryFormInput } from '../query-form-input';
import { QueryFormService } from '../query-form.service';
import { MyServiceService } from '../my-service.service';
import { ActivatedRoute } from '../../../node_modules/@angular/router';

@Component({
  selector: 'form-output',
  templateUrl: './form-output.component.html',
  styleUrls: ['./form-output.component.css']
})
export class FormOutputComponent {
  nationalities = ['', 'United States', 'United Kingdom', 'Iceland', 'South Korea'];
  topics = ['Angular', 'React','Vue'];
  queryFormInput = new QueryFormInput('Prark', 'pratik@rotterdam.com',4646478945,'','Morning',true);
  //queryFormInput:QueryFormInput;

  forminputs = new FormInputs(1,'','',23);
  submitted = false;
  errorMsg = '';
  anotherRestApiCall = [];
  
  ngOnInit(){     
  }

  constructor(private _queryFormService :QueryFormService,private _getMyService : MyServiceService,
  private _activatedRoute:ActivatedRoute){
  }
 
  onSubmit() { 
    this.submitted = true; 
    console.log('Name = '+this.queryFormInput.name);
    console.log('Email = '+this.queryFormInput.email);
    console.log('Phone = '+this.queryFormInput.phone);
    console.log('Topic = '+this.queryFormInput.topic);
    console.log('Timing = '+this.queryFormInput.timePreference);
    console.log('Subscribe = '+this.queryFormInput.choice);
    this._queryFormService.submitFormData(this.queryFormInput)
      .subscribe(data =>console.log('Success !! = '+data),error => this.errorMsg = error.statusText); 
    this._getMyService.getDataViaSpringRestApi3().subscribe(data => this.anotherRestApiCall[0] = data ,error =>this.errorMsg = error);         
  }

  
  
}
