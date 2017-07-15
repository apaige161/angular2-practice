import { Component, Input } from'@angular/core';
import { Item } from '../shared/item.model'

@Component({
    selector: 'app-item',
    templateUrl: 'item.component.html',
    styleUrls: ['item.component.css']
})

export class ItemComponent {
    //we will get an error without the input decorator
   @Input() item: Item;
}
