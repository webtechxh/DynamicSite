"use strict"
var express = require('express');
var router = express.Router();
var database = require('../database');
var credential = require('credential');
var jwt = require('jsonwebtoken');
var config = require('../config/auth');

var cred=credential();

/* POST register a new user. */
router.post('/', async function(req, res, next) {
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
      const token = jwt.sign(userData, config.secret, {expiresIn: 604800});
      authJson = {
        success: true,
        token: 'JWT ' + token,
        user: {
          username: userData.username,
          email: userData.email
        }
      };
      res.json(authJson);
    }
    else {
      return res.json({success: false, message: 'Wrong password'});
    }
  }
});

module.exports = router;
