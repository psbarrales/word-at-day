import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';

@Component({
	selector: 'page-settings',
	templateUrl: 'settings.html'
})
export class SettingsPage {

	title: string;

	constructor(public navCtrl: NavController, public navParams: NavParams) {
		this.title = 'Configuraciones';
	}


}
