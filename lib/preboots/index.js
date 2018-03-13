const winston = require('winston');
const path = require('path');

/*
 * Setup the ordering of prebooting in the application
 *
 * @param {Slay} app instance of Slay app
 * @param {Obejct} options configurations
 * @param {Function} callback function for completion
 */

module.exports = function preboot(app, options, callback) {
  app.preboot(require('slay-log')({
    transports: [
      new (winston.transports.Console)({
        raw: app.env !== 'local'
      })
    ]
  }));

  app.preboot(require('slay-config')({
    file: { file: path.join(app.rootDir, 'config', app.env + '.json') }
  }));

  // preboots will be here.

  callback();
};

