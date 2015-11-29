var jwt = require('jwt-simple');
var moment = require('moment');
var config = require('config');

var middlewareAuth = function(req, res, next) {
	var token = req.query.token || req.headers['x-access-token'];

	if (!token) {
		var err = new Error('Forbidden');
		err.status = 403;

		return next(err);
	}

	try {
		var decoded = jwt.decode(token, config.get('jwtTokenSecret'));
		var isExired = moment(decoded.exp).isBefore(new Date());

		if (isExired) {
			var error = new Error('Unauthorized');
			error.status = 401;
			return next(error);
		} else {
			req.user = decoded.user;
			next();
		}
	} catch (err) {
		return next(err);
	}
};

module.exports = middlewareAuth;