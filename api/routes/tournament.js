var express = require('express');
var router = express.Router();
var database = require('../database');
var passport = require('passport');

/* CREATE tournament db entry. */
router.post('/', passport.authenticate('jwt', {session:false}), async function(req, res, next) {
  //database.createTournamentSchema();
  var state = JSON.stringify(req.body.state);
  try{
    var createdId = await database.createTournament(req.user.email, state, "");
  } catch (e) {
    res.json({success: false, message: "Failed to upload!"});
  }
  console.log(createdId.id);
  res.json({ success: true, message: req.body.state, tournamentId: createdId.id});
});

router.get('/:id', async function(req, res, next) {
  try{
    var tState = await database.getTournamentById(req.params.id);
  } catch (e) {
    res.json({success: false, message: "Failed to find the tournament!"});
  }
  res.json({success: true, state: tState.state, tournamentId: req.params.id});
});

router.put('/:id', passport.authenticate('jwt', {session:false}), async function(req, res, next) {
  var state = JSON.stringify(req.body.state);
  try{
    var tState = await database.getTournamentById(req.params.id);
  } catch (e) {
    res.json({success: false, message: "Failed to find the tournament!"});
  }
  if (tState.userEmail != req.user.email){
    return res.json({success: false, message: "Not authorized to update this tournament!"});
  }
  try{
    result = await database.updateTournament(req.params.id, JSON.stringify(req.body.state));
    res.json({success: true, message:"Successfully updated!"});
  } catch(e){
    console.log(e);
    res.json({success: false, message: "Failed to update the tournament!"});
  }
}) ;

module.exports = router;
