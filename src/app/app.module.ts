//root module

/*General Notes*/
        //an angular application need a module
        //a module needs a component
        //each of these need a bit of metadata by using decorators to apply some configuration
        //must add each component to the 'declations'
        //component = template(view) + class(brings template to life) + decorator(wires up metadata from the class to template)
    /* lifecycle hooks */
        //ngOnInit calls when a component is being initialized
        //ngOnDestroy is called when a component is destroyed
    /* data binding */
        //one way -> class to template... interpalation {{something}}
        //one way -> template to class... attribute binding <input [target]="expression" />
            //child to parent component <button (event)="expression"></button>
        //two way -> between class and template
            //<input [(target)]="expression" />
    /* question... */
        //why do we have to use .toPromise on a server request


//NgModule is the foundation of angular applications, need at lease 1 for it to work
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
//has a static method that connects our inMemory service to the angular http service
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { FormsModule } from '@angular/forms';

//import custom components
import { AppComponent } from './app.component';
import { ItemListComponent, ItemComponent, ItemService } from './items'; //everything is imported from a barrel file (index.ts)
import { InMemoryItemService } from './backend'; //loads in our InMemoryDbService which has seeded data

//the decorator
@NgModule({
    //imports array is only for angular modules
    imports: [
        BrowserModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(InMemoryItemService) //wont be using for a production product
        ],
    //the providers property is angular's special place for services
    providers:[ItemService],
    //tells angular to start these components at launch
    declarations: [
        AppComponent,
        ItemComponent, //put child components first!!
        ItemListComponent
        ],  //'declarations' registering all of our app's components
    bootstrap: [AppComponent] //generally only put the parents component in the bootstrap
})

//export this to use in our main.ts file
export class AppModule {

}