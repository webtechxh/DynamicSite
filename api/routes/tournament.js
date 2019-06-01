var express = require('express');
var router = express.Router();
var passport = require('passport');

/* CREATE tournament db entry. */
router.post('/', passport.authenticate('jwt', {session:false}), function(req, res, next) {
  res.json({ success: true, message: 'You are authorized!' });
});

module.exports = router;
