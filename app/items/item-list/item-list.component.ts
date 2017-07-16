import { Component, OnInit } from'@angular/core';
import { ItemService } from '../shared/item.service'
import { Item } from '../shared/item.model'

@Component({
    selector: 'app-item-list',
    templateUrl: 'item-list.component.html',
    styleUrls: ['item-list.component.css']
})

export class ItemListComponent implements OnInit {
    items: Item[];
    //the constructor function is used to wire up our dependencies
    //by using the private or public keyword, gets added to the prototype so the service
        //is available to other methods on the components 
    constructor(private itemService: ItemService){
        
    }

    ngOnInit(){
        //setting the itemService
        this.itemService.getItems()
                        .then(items => 
                            this.items = items
                        );
    }
}