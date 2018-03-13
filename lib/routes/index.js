/*
 * Setup routings
 *
 * @param {Slay} app instance of Slay app
 * @param {Object} opts configurations
 * @param {Function} next callback function for completion
 *
 * @public
 */

module.exports = function route(app, opts, next) {
	app.perform('actions', function (done) {
		//routes here

		done();
	});

	next();
}

