var express = require('express');
var router = express.Router();
var database = require('../database');
var passport = require('passport');

/* CREATE tournament db entry. */
router.post('/', passport.authenticate('jwt', {session:false}), async function(req, res, next) {
  //database.createTournamentSchema();
  var state = JSON.stringify(req.body.state);
  var createdId = await database.createTournament(req.user.email, state, "");
  console.log(createdId.id);
  res.json({ success: true, message: req.body.state, tournamentId: createdId.id});
});

router.get('/:id', function(req, res, next) {
  tState = getTournamentStateById(req.params.id);
  res.json({success: true, state:tState, tournamentId: req.params.id});
});

module.exports = router;
