import {Component, OnInit} from '@angular/core';
import {Book, BookTypeOption} from '../../../model/book.model';
import {BookService} from '../../core/service/book.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
    bookTypeOption = BookTypeOption;
    slideOpts = {
        initialSlide: 1,
        speed: 400,
        autoplay: true
    };
    bookList: Book[];

    constructor(private bookService: BookService,
                private router: Router) {
        this.bookService.findList().subscribe(bookList => {
            this.bookList = bookList;
        });
    }

    ngOnInit() {
    }

    goToIntro(id: string) {
        this.router.navigate(['/book/intro', id]);
    }
}
