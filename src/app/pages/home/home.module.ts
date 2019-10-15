import {NgModule} from '@angular/core';
import {ShareModule} from '../../share/share.module';
import {RouterModule} from '@angular/router';
import {ROUTER_CONFIG} from './home.router';
import {HomeComponent} from './home.component';


@NgModule({
    declarations: [HomeComponent],
    imports: [
        ShareModule,
        RouterModule.forChild(ROUTER_CONFIG)
    ]
})
export class HomeModule {
}
