//to start..
    //npm install
    //npm run serve

// import global stylesheet
import './styles/main.css';

//imports
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

//bootstrap our module and attach it to our webpage
//need the bootstrap component loaded in from app.component.ts
platformBrowserDynamic().bootstrapModule(AppModule);