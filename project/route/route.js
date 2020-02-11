import {home} from '../page/home.js';
import {apiView} from "../page/api.js";
import {contact} from "../page/contact.js";

const url = window.location.pathname;
switch (url) {
    case '/':
        console.log('home');
        home();
        break;
    case '/api':
        console.log('api');
        apiView();
        break;
    case '/contact':
        console.log('contact');
        contact();
        break;
}



