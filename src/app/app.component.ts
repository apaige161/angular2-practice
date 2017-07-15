import { Component } from '@angular/core';

@Component ({
    //target app-root
    //this can be named anything as long as it is named the same in this file AND in the HTML
    //selectors ans templates are required
    selector: 'app-root',
    templateUrl: 'app.component.html', 
    //keep stylesheets and html in the same place as the component
    styleUrls: ['app.component.css'] 

})
export class AppComponent{
    //set emoji type
    emoji = ['🎉', '😍', '😜', '👍'];

    //rotate emojis
    activeEmoji: string;
    changeEmoji() {
        this.activeEmoji = this.emoji[Math.floor(Math.random() * this.emoji.length)];
    }


}