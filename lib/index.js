const App = exports.Application = require('./app');
const path = require('path');

/**
 * Create a new application and start it
 * @param {Object} options Options to start the application with.
 * @param {function} callback Continuation to respond to once complete.
 * @returns {Callback} callback function
 * @public
 */
exports.start = function (options, callback) {
  if (typeof options === 'function' && !callback) {
    callback = options;
    options = {};
  }

  const app = new App(path.join(__dirname, '..'), options);

  return app.start((err) => {
    callback(err, app);
  });
};
