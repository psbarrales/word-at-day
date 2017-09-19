var config = require('config');

module.exports = {
	
	'step-1': function (browser) {
		browser
			.maximizeWindow()
			.url(config.get('urls.trips.homePath'));
	}
	
};
