import {builder, NgxHttpExtra} from 'ngx-http-builder';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Book} from '../../../model/book.model';
import {map} from 'rxjs/operators';
import {Chapter} from '../../../model/chapter.model';

@Injectable({
    providedIn: 'root'
})
export class BookService {
    findChapter(bookId: string, chapterId: any): Observable<Chapter> {
        // return builder().url(`/api/book?book=${bookId}&id=${chapterId}`)
        return builder().url('/ionic-reader/assets/mock/book.mock.json')
            .get<Chapter>();
    }

    findList(): Observable<Book[]> {
        // return builder().url('/api/booklist')
        return builder().url('/ionic-reader/assets/mock/book-list.mock.json')
            .get<Book[]>();
    }

    findById(id: string): Observable<Book> {
        return this.findList().pipe(
            map(array => array[Math.floor(Math.random() * array.length)])
        );
    }

    findTitles(id: string): Observable<string[]> {
        // return builder().url('/api/titles?id=' + id)
        return builder().url('/ionic-reader/assets/mock/book-title.mock.json')
            .extra(NgxHttpExtra.IGNORE_LOAD)
            .get<any>()
            .pipe(map(res => {
                if (res && res.titles) {
                    return res.titles.split('-');
                }
                return res;
            }));
    }

}
