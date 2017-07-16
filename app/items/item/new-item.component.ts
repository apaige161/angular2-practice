import { Component } from '@angular/core';
import { Saw } from './contact.component';


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

//where is this data going?

export class CreateSaw {

    saws: Array<Saw>;
    constructor(){
        this.saws = [];
    }
    addSaw(model: string, serial: string){
        //creates element
        let saw = new Saw(model,serial);
        //pushes the element to the DOM
        this.saws.push(saw);
    }

    removeSaw(saw: any){
        let index = this.saws.indexOf(saw);
        this.saws.splice(index,1);
    }


}