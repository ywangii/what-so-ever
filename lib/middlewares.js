const bodyParser = require('body-parser');

module.exports = function middleware(app, options, callback) {
  app.use(bodyParser.json());

  callback();
};

