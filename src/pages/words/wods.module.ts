import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {WordsListPage} from './list/list';
import {WordsWordPage} from './word/word';
import {ComponentModule} from '../../components/component.module';

@NgModule({
	declarations: [
		WordsListPage,
		WordsWordPage
	],
	imports: [
		ComponentModule,
		IonicPageModule.forChild(WordsListPage),
		IonicPageModule.forChild(WordsWordPage)
	],
	entryComponents: [
		WordsListPage,
		WordsWordPage
	]
})
export class WordsModule {
}