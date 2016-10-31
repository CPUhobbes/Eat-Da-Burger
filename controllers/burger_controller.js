/*
Here is where you create all the functions that will do the routing for your app, and the logic of each route.
*/
var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');

router.get('/', function (req, res) {
	return burger.all(function (data) {
		var hbsObject = { burgers: data };
		console.log(hbsObject);
		res.render('index', hbsObject);
	});
});

// router.get('/cats', function (req, res) {
// 	cat.all(function (data) {
// 		var hbsObject = { cats: data };
// 		console.log(hbsObject);
// 		res.render('index', hbsObject);
// 	});
// });

router.post('/create', function (req, res) {
	burger.create(req.body.burger, function () {
		res.redirect('/');
	});
});

//router.put('/update/:id', function (req, res) {
// 	var condition = 'id = ' + req.params.id;

//  	console.log('condition', condition);

	//burger.update({ sleepy: req.body.sleepy }, condition, function () {
	//	res.redirect('/');
	//});
//});

module.exports = router;
