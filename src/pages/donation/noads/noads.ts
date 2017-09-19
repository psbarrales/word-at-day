import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

@Component({
	selector: 'page-no-ads',
	templateUrl: 'noads.html'
})
export class NoAdsPage {

	title: string;

	constructor(public navCtrl: NavController) {
		this.title = 'Quitar publicidad';
	}


}
