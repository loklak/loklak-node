var expect = require('chai').expect(),
	should = require('chai').should(),
	assert = require('assert'),
	loklak = require('../lib/loklak');

// Test Cases

describe('#equals', function () {
	it('verifies that the URLs are equal', function () {
		url = 'http://api.loklak.org/api/';
		assert.equal(url, loklak.httpClient.host, 'URL is the same as production server');
	});
});

describe('#hello', function () {
	it('verifies that the hello responds correctly', function () {
		loklak.hello( function (helloResponse) {
			assert.property(helloResponse, 'status');
		});
	});
});