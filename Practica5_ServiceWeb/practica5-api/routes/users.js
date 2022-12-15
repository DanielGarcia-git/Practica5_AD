const ManagerDB = require('../Managers/ManagerDB');
var express = require('express');
var router = express.Router();

router.get('/login', function(req, res, next) {
  var managerDB = new ManagerDB();
  return res.send(Object.values("messages"));
});

router.post('/register', function(req, res, next) {
  
});

module.exports = router;
