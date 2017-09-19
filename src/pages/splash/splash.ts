import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {HomePage} from '../home/home';

@Component({
	selector: 'page-splash',
	templateUrl: 'splash.html'
})
export class SplashPage {

	title: string;

	constructor(public navCtrl: NavController) {
		this.title = 'Splash App';
		setTimeout(() => {
			this.navCtrl.setRoot(HomePage)
		}, 2500);
	}

}
