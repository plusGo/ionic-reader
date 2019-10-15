import {Injectable} from '@angular/core';
import {LoadingController} from '@ionic/angular';

@Injectable({
    providedIn: 'root'
})
export class LoadingService {
    private loading;

    constructor(public loadingController: LoadingController) {
    }

    async show() {
        this.loading = await this.loadingController.create({
            message: '加载中',
        });
        await this.loading.present();
    }

    hide() {
        if(this.loading){
            this.loading.dismiss();
        }
    }
}
