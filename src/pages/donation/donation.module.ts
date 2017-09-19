import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {BeerPage} from './beer/beer';
import {NoAdsPage} from './noads/noads';
import {ComponentModule} from '../../components/component.module';

@NgModule({
	declarations: [
		BeerPage,
		NoAdsPage
	],
	imports: [
		ComponentModule,
		IonicPageModule.forChild(BeerPage),
		IonicPageModule.forChild(NoAdsPage)
	],
	entryComponents: [
		BeerPage,
		NoAdsPage
	]
})
export class DonationModule {
}