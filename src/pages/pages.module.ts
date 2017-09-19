import {NgModule} from '@angular/core';
import {DonationModule} from './donation/donation.module';
import {WordsModule} from './words/wods.module';
import {MenuModule} from './menu/menu.module';
import {SplashPage} from './splash/splash';
import {HomePage} from './home/home';
import {IonicModule} from 'ionic-angular';
import {ComponentModule} from '../components/component.module';

@NgModule({
	imports: [
		ComponentModule,
		IonicModule,
		MenuModule,
		WordsModule,
		DonationModule
	],
	declarations: [
		HomePage,
		SplashPage
	],
	entryComponents: [
		HomePage,
		SplashPage
	],
	providers: [],
	exports: []
})
export class PagesModule {
}