import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {WordsWordPage} from '../word/word';

@Component({
	selector: 'page-words-list',
	templateUrl: 'list.html'
})
export class WordsListPage {
	
	title: string;
	
	constructor(public navCtrl: NavController) {
		this.title = 'Listado de palabras';
	}
	
	showWord(word) {
		this.navCtrl.push(WordsWordPage, {
			word: word
		});
	}
	
}
