import {Component} from '@angular/core';

import {Platform} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import {hasExtra, NgxHttpConfig, NgxHttpExtra} from 'ngx-http-builder';
import {LoadingService} from './core/service/loading.service';
import {timer} from 'rxjs';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss']
})
export class AppComponent {
    constructor(
        private platform: Platform,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar,
        private loadingService: LoadingService) {
        NgxHttpConfig.builder()
            .baseUrl('http://localhost:8050/')
            .addInterceptor({
                request: (req) => {
                    if (hasExtra(req, NgxHttpExtra.IGNORE_LOAD)) {
                        return;
                    }
                    this.loadingService.show();
                },
                response: (res) => {
                    timer(800).subscribe(() => {
                        this.loadingService.hide();
                    });
                }
            });
        this.initializeApp();
    }

    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });
    }
}
