import {async, TestBed} from '@angular/core/testing';
import {IonicModule, NavController} from 'ionic-angular';
import {HomePage} from './home';
import {ComponentModule} from '../../components/component.module';
import {WordsListPage} from '../words/list/list';

describe('Home Page', () => {
	let fixture;
	let component;
	
	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [
				HomePage,
				WordsListPage
			],
			imports: [
				ComponentModule,
				IonicModule.forRoot(HomePage)
			],
			providers: [
				NavController
			]
		});
	}));
	
	beforeEach(() => {
		fixture = TestBed.createComponent(HomePage);
		component = fixture.componentInstance;
	});
	
	it('Home must to be created.', () => {
		expect(component instanceof HomePage).toBeTruthy();
	});
	
});