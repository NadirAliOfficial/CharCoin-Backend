var express = require('express');
var router = express.Router();
const authenticateToken = require("./../middlewares/auth");

/* GET home page. */
router.get('/', authenticateToken, function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
