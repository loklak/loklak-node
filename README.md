# Loklak API
[![Build Status](https://travis-ci.org/loklak/loklak_nodejs_api.svg?branch=master)](https://travis-ci.org/loklak/loklak_nodejs_api)
[![Code Climate](https://codeclimate.com/github/sudheesh001/loklak-node/badges/gpa.svg)](https://codeclimate.com/github/sudheesh001/loklak-node)
[![Dependency Status](https://gemnasium.com/badges/github.com/loklak/loklak_nodejs_api.svg)](https://gemnasium.com/github.com/loklak/loklak_nodejs_api)

Node.js wrapper for loklak.org API - [distributed tweet search server](https://github.com/loklak/loklak_server)
## Install
```
npm install --save loklak
```
## Using
```
var loklak = require('loklak');
```
### Status
```
loklak.status(function (data) {
  console.log(data);
});
```
### Hello
```
loklak.hello(function (data) {
  console.log(data);
});
```
### Peers
```
loklak.peers(function (data) {
  console.log(data);
});
```
### Geocode
```
loklak.geocode(['Votkinsk'], function (data) { console.log(data); })
```
### Users
```
loklak.user({name: 'sevazhidkov', followers: 20, following: 20}, function (data) { console.log(data); })
```
### Search
```
loklak.search({q: 'Code-in'}, function (data) { console.log(data); })
```

## Contact
Send me a message in Telegram: [@sevazhidkov](https://telegram.me/sevazhidkov). or [@sudheesh001](https://telegram.me/sudheesh001)

Or in Twitter: [@sevazhidkov](https://twitter.com/sevazhidkov). [@sudheesh001](https://twitter.com/sudheesh001)
