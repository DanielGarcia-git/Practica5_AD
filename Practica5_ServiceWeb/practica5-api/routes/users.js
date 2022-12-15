import "../Managers/ManagerDB/ManagerDB";

var express = require('express');
var router = express.Router();

router.post('/login', function(req, res, next) {
  var db = new ManagerDB();
});

router.post('/register', function(req, res, next) {
  
});

module.exports = router;
