var express = require('express');
var router = express.Router();
var passport = require('passport');

/* GET home page. */
router.get('/', passport.authenticate('jwt', {session:false}), function(req, res, next) {
  res.json({ success: true, message: 'You are authorized!' });
});

module.exports = router;
