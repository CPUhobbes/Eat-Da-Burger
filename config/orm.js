/*
Here is the O.R.M. where you write functions that takes inputs and conditions and turn them into database commands like SQL.
*/
var connection = require('./connection.js');

var orm = {
	all: function (callback) {
		var queryString = 'SELECT * FROM burgers;';
		connection.query(queryString, function (err, result) {
			if (err) throw err;
			callback(result);
		});
	},

	create: function (burger, callback) {

		connection.query("INSERT INTO burgers (burger_name, devoured) VALUES (?, ?) ", [burger, "1"], function (err, result) {
			if (err) throw err;
			callback(result);
		});
	},

	update: function (id, callback) {
		connection.query("UPDATE burgers SET devoured = 0 WHERE id = ?", id, function (err, result) {
			if (err) throw err;
			callback(result);
		});
	},
	
	delete: function (id, callback) {
		connection.query("DELETE FROM burgers WHERE id = ?", id, function (err, result) {
			if (err) throw err;
			callback(result);
		});
	}
};

module.exports = orm;
