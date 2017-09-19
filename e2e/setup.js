const chromedriver = require('chromedriver');
const winston = require('winston');
const config = require('config');

module.exports = {
  'default': {
    isLocal: true
  },

  'chrome': {
    isLocal: true
  },

  'remote': {
    isLocal: false
  },

  before: function(done) {
    winston.emitErrs = true;
    winston.configure({
      level: config.get('logging.level'),
      transports: [new winston.transports.Console({
        handleExceptions: true,
        level: config.get('logging.level'),
        json: false,
        colorize: config.get('logging.colorize'),
        timestamp: config.get('logging.timestamp')
      })],
      exitOnError: false
    });
    winston.info('[setup] Logging setup');

    if (this.isLocal) {
      chromedriver.start();
      winston.info('[setup] chrome start');
    }
    done();
  },

  after: function(done) {
    if (this.isLocal) {
      chromedriver.stop();
      winston.info('[setup] chrome stop');
    }
    done();
  }
};
