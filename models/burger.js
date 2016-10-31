/*
Here is where you setup a model for how to interface with the database.
*/

var orm = require('../config/orm.js');

var burger = {
	all: function (callback) {
		orm.all(function (res) {
			callback(res);
		});
	},
	// cols and vals are arrays
	create: function (burger, callback) {
		orm.create(burger, function (res) {
			callback(res);
		});
	},
	update: function (id, callback) {
		orm.update(id, function (res) {
			callback(res);
		});
	}
};

module.exports = burger;

