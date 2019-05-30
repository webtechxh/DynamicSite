"use strict"
var express = require('express');
var router = express.Router();
var database = require('../database');
var credential = require('credential');

var cred=credential();

/* POST register a new user. */
router.post('/', function(req, res, next) {
  var username = req.body.username;
  var pwd = req.body.password;
  var userData = await database.getUserByUsername(username);
  if (!userData){
    return res.json({success: false, message: 'User does not exist'});
  }
  storedHash = userData.password;

  cred.verify(userData, pwd, authUser);
  async function authUser(err, isValid){
    if (err) throw err;
    if (isValid){
      //authenticate them
    }
  }
});

module.exports = router;
