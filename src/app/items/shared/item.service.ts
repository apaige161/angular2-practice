/***** service ********/

//minimum requirements for a service in angular is it needs to be a class and have the
//@injectable decorator applied to it

//the Injectable class is angular's marker to make sure it is available for dependency injection

import { Item } from './item.model'
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()

export class ItemService {

    constructor(private http: Http){    
    }
    
    //post data to the server
    addComment(itemId: number, comment: { name: string; comment: string; }) {
        return this.http.post('/app/items/${itemId}/comments', comment)
            .toPromise();
    }

    addModel(model: string){
        return this.http.post('/app/items/', model)
            .toPromise();
    }

    addSerialNumber(serialNumber: string){
        return this.http.post('/app/items/', serialNumber)
            .toPromise();
    }




    getItems(): Promise<Item[]> { //will return a promise, array of objects
        return this.http.get('/app/items')
            .toPromise()
            .then(response => response.json().data as Item[])
    }
}