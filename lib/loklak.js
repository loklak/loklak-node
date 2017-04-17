/* global require, module */

var request = require('request-json');

var Loklak = module.exports = function () {
	this.httpClient = request.createClient('http://loklak.org/api/');
};

// Public API Exposure.

Loklak.prototype.status = function (cb) {
	this.httpClient.get('status.json', function (err, res, body) {
		if (err) {
			cb({});
		} else {
			cb(body);
		}
	});
};

Loklak.prototype.hello = function (cb) {
	this.httpClient.get('hello.json', function (err, res, body) {
		if (err) {
			cb({});
		} else {
			cb(body);
		}
	});
};

Loklak.prototype.peers = function (cb) {
	this.httpClient.get('peers.json', function (err, res, body) {
		if (err) {
			cb({});
		} else {
			cb(body);
		}
	});
};

Loklak.prototype.geocode = function (places, cb) {
	this.httpClient.get(
		'geocode.json?places=' + places.toString(),
		function (err, res, body) {
			if (err) {
				cb({});
			} else {
				cb(body);
			}
		}
		);
};

Loklak.prototype.user = function (params, cb) {
	if (params.name === undefined) {
		cb({});
		return;
	}
	var url = 'user.json?name=' + params.name;
	if (params.followers !== undefined) {
		url += '&followers=' + params.folllowers;
	}
	if (params.following !== undefined) {
		url += '&following=' + params.folllowing;
	}
	this.httpClient.get(url, function (err, res, body) {
		if (err) {
			cb({});
		} else {
			cb(body);
		}
	});
};

Loklak.prototype.search = function (params, cb) {
	if (params.q === undefined) {
		cb({});
		return;
	}
	var query = params.q;
	if (params.since !== undefined) {
		query += ' since:' + params.since;
	}
	if (params.until !== undefined) {
		query += ' until:' + params.until;
	}
	if (params.fromUser !== undefined) {
		query += ' from:' + params.fromUser;
	}
	this.httpClient.get('search.json?q=' + query, function (err, res, body) {
		if (err) {
			cb({});
		} else {
			cb(body);
		}
	});
};

Loklak.prototype.suggest = function (params, cb) {
	var apiUrl = "suggest.json?";
	if (params.q !== undefined) {
        apiUrl += 'q=' + params.q + '&';
	}
	if (params.count !== undefined) {
		apiUrl += 'count=' + params.count + '&';
	}
	if (params.order !== undefined) {
		apiUrl += 'order=' + params.order + '&';
	}
	if (params.orderBy !== undefined) {
		apiUrl += 'orderBy=' + params.orderBy + '&';
	}
	if (params.since !== undefined) {
		apiUrl += 'since=' + params.since + '&';
	}
	if (params.until !== undefined) {
		apiUrl += 'until=' + params.until + '&';
	}
	apiUrl = apiUrl.substring(0, apiUrl.length - 1);
    console.log(apiUrl);
    this.httpClient.get(apiUrl, function (err, res, body) {
		if (err) {
			cb({});
		} else {
			cb(body);
		}
	});
};

module.exports = new Loklak();