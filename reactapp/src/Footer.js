import React from 'react';
import { Link } from "react-router-dom"

function Footer() {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark fixed-bottom">
      <div class="container">
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <Link class="nav-link" to="/"><b>Home</b>
                <span class="sr-only">(current)</span>
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link " to="/about"><b>About</b></Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/services"><b>Services</b></Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/contact"><b>Contact</b></Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Footer;
