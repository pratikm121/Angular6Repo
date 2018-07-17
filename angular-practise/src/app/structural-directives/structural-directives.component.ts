import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'structures',
  templateUrl: './structural-directives.component.html',
  styleUrls: ['./structural-directives.component.css']
})
export class StructuralDirectivesComponent implements OnInit {

  private isSimpleTrue :boolean = true;
  private toggleAnotherExample :boolean = true;
  private counter : number=0;
  private color:String = 'red';
  private colors = ['red','green','blue','orange'];

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
