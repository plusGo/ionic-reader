import {NgModule} from '@angular/core';
import {ShareModule} from '../../share/share.module';
import {RouterModule} from '@angular/router';
import {ROUTER_CONFIG} from './book.router';
import {BookIntroComponent} from './book-intro/book-intro.component';
import {BookReadComponent} from './book-read/book-read.component';


@NgModule({
    declarations: [BookIntroComponent, BookReadComponent],
    imports: [
        ShareModule,
        RouterModule.forChild(ROUTER_CONFIG)
    ]
})
export class BookModule {
}
