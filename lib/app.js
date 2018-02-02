const { App } = require('slay');
const util = require('util');
const path = require('path');


/**
 * Slay App
 *
 * @constructor
 * @class Application
 * @param {String} root Root directory of the application
 * @param {Object} options Configuration
 * @param {String} options.env environment
 * @private
 */
module.exports = class Application extends App {
  constructor(root, options) {
    super(...arguments);

    this.env = process.env.NODE_ENV || options.env || 'development';
    App.call(this, root, options);
  }
}

