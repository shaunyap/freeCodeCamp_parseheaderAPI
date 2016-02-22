var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  var software = req.headers['user-agent'];
  var language = req.headers['accept-language'].split(",")[0];
  var ipaddress = req.headers['x-forwarded-for'];
  res.render('index', { ipaddress: ipaddress, language: language, software: software });
});

module.exports = router;
