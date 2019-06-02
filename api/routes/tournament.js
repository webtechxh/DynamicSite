var express = require('express');
var router = express.Router();
var passport = require('passport');

/* CREATE tournament db entry. */
router.post('/', passport.authenticate('jwt', {session:false}), function(req, res, next) {
  res.json({ success: true, message: 'You are authorized!' });
});

router.get('/:id', function(req, res, next) {
  //var tState = getTournamentStateById(req.id);
  res.json({success: true, tournamentId: req.params.id});
});

module.exports = router;
