import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
//eventEmitter is a way for angular to send and recieve data between two components
//Output decorator is used to let us send data out to the parent via the event emitter
//ViewChild allows the component to inspect the template looking for local var 
        //and assign the local var as member properties of the component
import { NgForm } from '@angular/forms'
import { ItemService } from '../shared/item.service'

@Component({
    selector: 'app-item-comment-form',
    templateUrl: 'item-comment-form.component.html'
})

export class ItemCommentFormComponent {
    //set the values of the comment added field
    name: string = "";
    comment: string = "";
    @Input() itemId: number;

    //set up eventemitter
        //this is not a global event, still needs work
        //communicates between components and directives
        //to connect the item.component and the comment-form.component...
            //add event binding to the <app-item-comment-form> in the html
    @Output() onCommentAdded = new EventEmitter<{name: string; comment:string;}>();
    //binds the local var
    @ViewChild('commentForm') commentForm: NgForm;
    
    //have to import ItemService before we can use our add comment method
    //private keyword tells the app to append the variable to the prototype during the transpalation process
    //making it available on the instance of the class
    constructor(private itemService: ItemService){

    }

    onSubmit(commentForm: NgForm){
        let comment = { name: this.name, comment: this.comment };
        this.itemService.addComment(this.itemId, comment)
            .then(() => {
                this.onCommentAdded.emit(comment);
                //goal: clear data from the form after data is entered
                this.commentForm.resetForm();
            })
        
    }

}

