import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'structures',
  templateUrl: './structural-directives.component.html',
  styleUrls: ['./structural-directives.component.css']
})
export class StructuralDirectivesComponent implements OnInit {

  public isSimpleTrue :boolean = true;
  public toggleAnotherExample :boolean = true;
  public counter : number=0;
  public color:String = 'red';
  public colors = ['red','green','blue','orange'];

  constructor() { }

  ngOnInit() {
  }

  toggleExample(){
    this.counter ++;
    if(this.counter % 2===0){
      console.log('Inside deivider');
      this.toggleAnotherExample = !this.toggleAnotherExample;
    }
  }

}
