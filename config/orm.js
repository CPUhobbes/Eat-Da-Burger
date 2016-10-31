/*
Here is the O.R.M. where you write functions that takes inputs and conditions and turn them into database commands like SQL.
*/
var connection = require('../config/connection.js');

function printQuestionMarks(num) {
	var arr = [];

	for (var i = 0; i < num; i++) {
		arr.push('?');
	}

	return arr.toString();
}

function objToSql(ob) {
	// column1=value, column2=value2,...
	var arr = [];

	for (var key in ob) {
		if (ob.hasOwnProperty(key)) {
			arr.push(key + '=' + ob[key]);
		}
	}

	return arr.toString();
}

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
	}
};

module.exports = orm;
