import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormInputs } from './form-output/formInput.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: []
})
export class AppComponent {
  title = 'Welcome to Angular 6 tutorials';
  public parentData = 'Hi Pratik This message is from App component';

  constructor() {   
  }
  
  ngOnInit(){  
  }

 
}
