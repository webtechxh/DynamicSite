import React from 'react';
import { Link } from "react-router-dom"
import Image from './teamphoto.png'; // Import using relative path

function Tournamentresults() {
  return (
    <div class="top-padding text-center">
      <h1>Bristol University Hopscotch Team</h1>
    <div class="top-padding container">
      <div class="row">
        <div class="top-padding col-sm-4">
          <h2>About Us</h2>
          <Link class="thumbnail" to="#">
            <img class="Image img-fluid" alt="Responsive image" src={Image}/>
          </Link>
          <p>The crew gather for an amicable snap</p>
        </div>
        <div class="top-padding col-sm-8">
          <h2>League Ranking</h2>
          <h5>Underdog's Award, Dec 7, 2018</h5>
          <p>After a heated season with many consecutive losses the Bristol skippers managed to pull themselves a single win out of the bag. Against all odds they delivered a powerful defeat in a friendly with the Bath springers.</p>
          <br/>
          <h2>Statistics</h2>
          <h5>Wins:1 Losses:48 Draws:12</h5>
          <p>The team has a record of poor defence matched only by their appaling offensive play. They currently hold a record 78 falls and 32 foul hops which is leagues behind the competition.</p>
        </div>
      </div>
    </div>
    </div>

  );
}

export default Tournamentresults;
