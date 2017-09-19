import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';

@Component({
	selector: 'page-word',
	templateUrl: 'word.html'
})
export class WordsWordPage {

	title: string;

	constructor(public navCtrl: NavController, public navParams: NavParams) {
		this.title = navParams.get('word');
	}


}
