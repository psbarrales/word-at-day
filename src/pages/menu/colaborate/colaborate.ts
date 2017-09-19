import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';

@Component({
	selector: 'page-colaborate',
	templateUrl: 'colaborate.html'
})
export class ColaboratePage {

	title: string;

	constructor(public navCtrl: NavController, public navParams: NavParams) {
		this.title = 'Colaborar';
	}


}
