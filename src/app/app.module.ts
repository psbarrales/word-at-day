import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {SplashScreen} from '@ionic-native/splash-screen';
import {StatusBar} from '@ionic-native/status-bar';

import {WordAtDay} from './app.component';
import {PagesModule} from '../pages/pages.module';

@NgModule({
	declarations: [
		WordAtDay
	],
	imports: [
		BrowserModule,
		PagesModule,
		IonicModule.forRoot(WordAtDay)
	],
	bootstrap: [IonicApp],
	entryComponents: [
		WordAtDay
	],
	providers: [
		StatusBar,
		SplashScreen,
		{provide: ErrorHandler, useClass: IonicErrorHandler}
	]
})
export class AppModule {
}
