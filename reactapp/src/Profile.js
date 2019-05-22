import React from 'react';
import { Link } from "react-router-dom"

function Tournamentresults() {
  return (


    <div class="jumbotron text-center">
      <h1>Bristol University Hopscotch Team</h1>


    <nav class="navbar navbar-inverse">
      <div class="container-fluid">
        <div class="collapse navbar-collapse" id="myNavbar">
          <ul class="nav navbar-nav">
            <li class="active"><a href="index.html">Home</a></li>
            <li><a href="#">Page 2</a></li>
            <li><a href="#">Page 3</a></li>
          </ul>
        </div>
      </div>
    </nav>



    <div class="container">
      <div class="row">
        <div class="col-sm-4">
          <h2>About Us</h2>
          <h5>Photo of me:</h5>
          <Link class="thumbnail" to="#">
            <img src="images/hopscotch.jpg" class="img-fluid" alt="Responsive image"/>
          </Link>
          <p>Some text about me in culpa qui officia deserunt mollit anim..</p>
          <h3>Some Links</h3>
          <p>Lorem ipsum dolor sit ame.</p>
          <ul class="nav nav-pills nav-stacked">
            <Link class="active" to="#">Link 1</Link>
            <Link to="#">Link 2</Link>
            <Link to="#">Link 3</Link>
          </ul>
          <hr class="hidden-sm hidden-md hidden-lg"/>
        </div>
        <div class="col-sm-8">
          <h2>League Ranking</h2>
          <h5>Title description, Dec 7, 2017</h5>
          <div class="fakeimg">Fake Image</div>
          <p>Some text..</p>
          <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
          <br/>
          <h2>Statistics</h2>
          <h5>winwinwinwinwinwnin, Sep 2, 2017</h5>
          <div class="fakeimg">Fake Image</div>
          <p>Some text..</p>
          <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
        </div>
      </div>
    </div>
    </div>

  );
}

export default Tournamentresults;
