import { Component, OnInit,NgModule, Output, Input } from '@angular/core';
import { QueryFormService } from '../query-form.service';

@Component({
  selector: 'property-binding',
  templateUrl: './property-binding-example.component.html',
  styleUrls: ['./property-binding-example.component.css']
})
export class PropertyBindingExampleComponent implements OnInit {

  private showExample:boolean;
  @Output('myOutputValue') private yourTemplateReference:String;
  public anotherComponentOutput:String;
  private twoWayBinding:String;


  constructor(private _queryFormService :QueryFormService) { }

  ngOnInit() {
   
  }

  toggleExample(event){
    this.showExample = !this.showExample;
    console.log(event);
  }

  showTemplateReferenceValue(event){
    this.yourTemplateReference = event.value;
    this.anotherComponentOutput = this._queryFormService.getFormData().name;
  }

  

}
