import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

@Component({
	selector: 'page-beer',
	templateUrl: 'beer.html'
})
export class BeerPage {

	title: string;

	constructor(public navCtrl: NavController) {
		this.title = 'Donar';
	}


}
