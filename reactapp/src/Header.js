import React from 'react';
import { Link } from "react-router-dom"
import logo from './logo.svg'; // Tell Webpack this JS file uses this image



function Header() {
  return (

    <nav class="navbar navbar-expand-lg navbar-dark">
    <div class="navbar-left"><img class="logo" src={logo}/></div>
      <div class="container">
        <Link class="navbar-brand" to="#"></Link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item dropdown">
              <Link class="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <b>Tournify Now</b>
            </Link>
              <div class="dropdown-menu dropdown-menu-right animate slideIn" aria-labelledby="navbarDropdown">
                <Link class="dropdown-item" to="/login">Login</Link>
                <div class="dropdown-divider"></div>
                <Link class="dropdown-item" to="/profile">Your Team</Link>
                <div class="dropdown-divider"></div>
                <Link class="dropdown-item" to="/registertournament">Register Tournament</Link>
                <Link class="dropdown-item" to="/registerteam">Register Team</Link>
                <div class="dropdown-divider"></div>

                {/*
                  <Link class="dropdown-item" to="/tournamentresults">Tournament Results</Link>
                  <div class="dropdown-divider"></div>
                */}

                <Link class="dropdown-item" to="/tournify">Tournify</Link>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
