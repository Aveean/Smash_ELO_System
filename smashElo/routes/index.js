var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/playerlist', function(req, res) {
	var db = req.db;
	var collection = db.get('players');
	collection.find({}, {}, function(e, docs) {
		res.render('playerlist', {
			"playerlist" : docs
		});
	});
});

module.exports = router;
