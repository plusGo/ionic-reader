import {Routes} from '@angular/router';
import {BookIntroComponent} from './book-intro/book-intro.component';
import {BookReadComponent} from './book-read/book-read.component';

export const ROUTER_CONFIG: Routes = [
    {path: 'intro/:id', component: BookIntroComponent},
    {path: 'read/:id', component: BookReadComponent},
];
