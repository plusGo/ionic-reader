import {Injectable} from '@angular/core';
import {LoadingController} from '@ionic/angular';

@Injectable({
    providedIn: 'root'
})
export class LoadingService {

    constructor(public loadingController: LoadingController) {
    }

    async show() {
        const loading = await this.loadingController.create({
            message: '加载中',
        });
        await loading.present();
    }

    hide() {
        this.loadingController.dismiss();
    }
}
