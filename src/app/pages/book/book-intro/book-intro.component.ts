import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {BookService} from '../../../core/service/book.service';
import {Book} from '../../../../model/book.model';

@Component({
    selector: 'app-book-intro',
    templateUrl: './book-intro.component.html',
    styleUrls: ['./book-intro.component.scss'],
})
export class BookIntroComponent implements OnInit {
    book: Book;

    constructor(private route: ActivatedRoute,
                private router: Router,
                private bookService: BookService) {
        this.route.paramMap.subscribe(map => {
            const id = map.get('id');
            this.bookService.findById(id).subscribe(book => {
                this.book = book;
            });
        });
    }

    ngOnInit() {
    }

    goToRead(id: string) {
        this.router.navigate(['/book/read', id]);
    }


}
