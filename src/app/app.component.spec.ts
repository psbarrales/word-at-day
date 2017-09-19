import {async, TestBed} from '@angular/core/testing';
import {IonicModule, Platform} from 'ionic-angular';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';

import {WordAtDay} from './app.component';
import {
	PlatformMock,
	StatusBarMock,
	SplashScreenMock
} from '../../test-config/mocks-ionic';

describe('WordAtDay Component', () => {
	let fixture;
	let component;
	
	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [WordAtDay],
			imports: [
				IonicModule.forRoot(WordAtDay)
			],
			providers: [
				{provide: StatusBar, useClass: StatusBarMock},
				{provide: SplashScreen, useClass: SplashScreenMock},
				{provide: Platform, useClass: PlatformMock}
			]
		});
	}));
	
	beforeEach(() => {
		fixture = TestBed.createComponent(WordAtDay);
		component = fixture.componentInstance;
	});
	
	it('Main module must to be created.', () => {
		expect(component instanceof WordAtDay).toBeTruthy();
	});
	
});