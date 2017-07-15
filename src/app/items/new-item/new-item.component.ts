import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
//eventEmitter is a way for angular to send and recieve data between two components
//Output decorator is used to let us send data out to the parent via the event emitter
//ViewChild allows the component to inspect the template looking for local var 
        //and assign the local var as member properties of the component
import { NgForm } from '@angular/forms'
import { ItemService } from '../shared/item.service'

@Component({
    selector: 'new-item',
    templateUrl: 'new-item.component.html'
})

export class CreateSaw {
    //set the values of the comment added field
    model: string = "";
    serialNumber: string = "";
    @Input() itemId: number;

    //set up eventemitter
        //this is not a global event, still needs work
        //communicates between components and directives
        //to connect the item.component and the comment-form.component...
            //add event binding to the <app-item-comment-form> in the html
    @Output() onModelAdded = new EventEmitter<{model: string}>();
    @Output() onSerialAdded = new EventEmitter<{serialNumber: string}>();
    //binds the local var
    @ViewChild('newChainsawaw') newChainsaw: NgForm;
    
    //have to import ItemService before we can use our add comment method
    //private keyword tells the app to append the variable to the prototype during the transpalation process
    //making it available on the instance of the class
    constructor(private itemService: ItemService){

    }


//how should i go about this bit
    //GOAL: capture input data and build a new object for the inventory??????

    //TypeError: Cannot create property 'id' on number '201'

    onSubmit(newChainsawaw: NgForm){
        let model = { model: this.model};
        this.itemService.addModel(this.model)
            .then(() => {
                this.onModelAdded.emit(model);
                //goal: clear data from the form after data is entered
                this.newChainsaw.resetForm();
            });

        let serialNumber = {serialNumber: this.serialNumber}
        this.itemService.addSerialNumber(this.serialNumber)
                    .then(() => {
                        this.onSerialAdded.emit(serialNumber);
                        //goal: clear data from the form after data is entered
                         this.newChainsaw.resetForm();
                    })
        
    }

    

}

