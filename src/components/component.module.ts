import {NgModule} from '@angular/core';
import {IonicModule} from 'ionic-angular';
import {HeaderMainComponent} from './header-main/header-main.component';

@NgModule({
	imports: [
		IonicModule
	],
	declarations: [
		HeaderMainComponent
	],
	entryComponents: [],
	providers: [],
	exports: [
		HeaderMainComponent
	]
})
export class ComponentModule {
}