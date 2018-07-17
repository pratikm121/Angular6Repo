import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormInputs } from './form-output/formInput.model';
import { QueryFormInput } from './query-form-input';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['../styles.css']
})
export class AppComponent {
  title = 'Welcome to Angular 6 tutorials';
  public parentData = 'Hi Pratik This message is from App component';
  public testMessage="";
  queryFormInput = new QueryFormInput('Pratik', 'pratik@rotterdam.com',46464,'','Morning',true);

  constructor() {   
  }
  
  ngOnInit() {
    
  }

 
}
