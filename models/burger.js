/*
Here is where you setup a model for how to interface with the database.
*/

var orm = require('../config/orm.js');

var cat = {
	all: function (cb) {
		orm.all(function (res) {
			cb(res);
		});
	},
	// cols and vals are arrays
	create: function (burger, cb) {
		orm.create(burger, function (res) {
			cb(res);
		});
	},
	update: function (objColVals, condition, cb) {
		orm.update('cats', objColVals, condition, function (res) {
			cb(res);
		});
	}
};

module.exports = cat;

// cat.delete(condition, function(data){
// 	res.redirect('/cats');
// });
