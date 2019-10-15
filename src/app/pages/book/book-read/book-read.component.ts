import {Component, OnInit, ViewChild} from '@angular/core';
import {BookService} from '../../../core/service/book.service';
import {ActivatedRoute, Router} from '@angular/router';
import {AlertController, IonContent, MenuController} from '@ionic/angular';
import {Chapter} from '../../../../model/chapter.model';
import {DomSanitizer} from '@angular/platform-browser';
import {timer} from 'rxjs';

@Component({
    selector: 'app-book-read',
    templateUrl: './book-read.component.html',
    styleUrls: ['./book-read.component.scss'],
})
export class BookReadComponent implements OnInit {
    @ViewChild(IonContent, {static: false})
    content: IonContent;

    titles: string[];
    chapterId = 1;
    chapter: Chapter;
    bookId: string;

    showOps = false;


    constructor(private bookService: BookService,
                private router: Router,
                private menu: MenuController,
                public alertController: AlertController,
                private domSanitizer: DomSanitizer,
                private route: ActivatedRoute) {
        this.route.paramMap.subscribe(map => {
            this.bookId = map.get('id');
            this.bookService.findTitles(this.bookId).subscribe(titles => {
                this.titles = titles;
            });
            this.loadChapter(this.chapterId);
        });
    }

    ngOnInit() {
    }

    get chapterContent() {
        return this.domSanitizer.bypassSecurityTrustHtml(this.chapter ? this.chapter.content : '');
    }

    toggleMenu(toggle: boolean) {
        if (toggle) {
            this.menu.open('titles');
        }
        {
            this.menu.close('titles');
        }
    }

    loadChapter(chapterId: string | number) {
        this.chapterId = chapterId as any;
        this.bookService.findChapter(this.bookId, chapterId).subscribe(chapter => {
            if (!this.chapter) {
                this.alertController.create({
                    header: '提示',
                    message: '加载章节失败，请重试',
                    buttons: ['确认']
                }).then(alert => alert.present);
            }
            this.chapter = chapter;
            this.chapter.content = this.chapter.content.split('-').map(line => `<div class="chapter-line">${line}</div>`).join('');
            this.toggleMenu(false);
            this.showOps = false;
            timer(300).subscribe(() => {
                this.content.fullscreen = true
                this.content.scrollToTop().then(data =>{
                });
            });
        });
    }

    goBack() {
        this.router.navigate(['/home']);
    }

    toggleOps() {
        this.showOps = !this.showOps;
    }

    onChapterClick(event) {
        const pageY = event.pageY;
        const screenY = document.body.clientHeight;
        if (pageY > screenY * 0.35 && pageY < screenY * 0.7) {
            this.toggleOps();
        }

    }
}
