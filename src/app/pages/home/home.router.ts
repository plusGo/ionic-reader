import {Routes} from '@angular/router';
import {HomeComponent} from './home.component';

export const ROUTER_CONFIG: Routes = [
    {path: '', component: HomeComponent},
    {path: 'book', component: HomeComponent},
];
