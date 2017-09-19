import {Component, Input} from '@angular/core';
import {NavController} from 'ionic-angular';
import {ColaboratePage} from '../../pages/menu/colaborate/colaborate';
import {SettingsPage} from '../../pages/menu/settings/settings';

@Component({
	selector: 'header-main',
	templateUrl: 'header-main.html'
})

export class HeaderMainComponent {
	@Input() title: string;
	@Input() hideColaborate: boolean = false;
	@Input() hideSettings: boolean = false;
	
	constructor(public navCtrl: NavController) {
	}
	
	goCollaborate() {
		this.navCtrl.push(ColaboratePage);
	}
	
	goSettings() {
		this.navCtrl.push(SettingsPage);
	}
}