import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {SettingsPage} from './settings/settings';
import {ColaboratePage} from './colaborate/colaborate';
import {ComponentModule} from '../../components/component.module';

@NgModule({
	declarations: [
		SettingsPage,
		ColaboratePage
	],
	imports: [
		IonicPageModule.forChild(SettingsPage),
		IonicPageModule.forChild(ColaboratePage),
		ComponentModule
	],
	entryComponents: [
		SettingsPage,
		ColaboratePage
	]
})
export class MenuModule {
}