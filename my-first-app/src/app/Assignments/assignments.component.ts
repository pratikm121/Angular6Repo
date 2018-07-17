import { Component} from '@angular/core';

@Component({
    selector: 'app-assignments',
    templateUrl: './assignments.component.html',
    styleUrls: ['./assignments.component.css']
})

export class AssignmentsComponent{
    title = 'This is the assignment section of your page';
    /*Assignment 2 :BEGIN*/
    userName = '';

    onResetButton(){
        this.userName = '';
    }
    /*Assignment 2 :END*/

    /*Assignment 3 :BEGIN*/
    clickCounter = 0;
    showPara = true;
    clickCounterArray = [];

    onClickToggleButton(){
        this.showPara = !this.showPara;
        this.clickCounter++;
        this.clickCounterArray[this.clickCounter-1]=this.clickCounter;
        this.clickCounterArray;
        
        console.log('Array lenth is '+this.clickCounterArray.length +',counter = '+ this.clickCounter);
    }
    /*Assignment 3 :END*/
}
