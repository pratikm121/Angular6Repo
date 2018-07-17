import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'comp-interact',
  templateUrl: './component-interaction.component.html',
  styleUrls: ['./component-interaction.component.css']
})
export class ComponentInteractionComponent implements OnInit {

  @Input('valueFromANotherComponent') public myInputValue:String;
  @Output() public childEvent = new EventEmitter();
  @Output() public anotherComponentOutput = new EventEmitter();
  public outputValue:String;

  constructor() { }

  ngOnInit() {
  }

  fireEvent(){
      this.childEvent.emit('Hi this value is from Component Interaction compoment!!!');
      this.anotherComponentOutput.emit(''+ this.outputValue);
      console.log('Event Fired');
  }

}
