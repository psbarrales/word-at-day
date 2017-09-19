import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {WordsListPage} from '../words/list/list';
import {BeerPage} from '../donation/beer/beer';
import {NoAdsPage} from '../donation/noads/noads';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {
	
	title: string;
	
	constructor(public navCtrl: NavController) {
		this.title = 'Palabra al día';
	}
	
	goWords() {
		this.navCtrl.push(WordsListPage);
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve(true);
			}, 4500);
		});
	}
	
	goBeer() {
		this.navCtrl.push(BeerPage);
	}
	
	goNoAds() {
		this.navCtrl.push(NoAdsPage);
	}
}
