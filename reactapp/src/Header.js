import React from 'react';
import { Link } from "react-router-dom"
import logo from './logo.svg'; // Tell Webpack this JS file uses this image

class Header extends React.Component {
  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = {
      loginButton: "Login",
      loginButtonLink: "/login"
    };
  }

  componentDidMount(){
    if (localStorage.getItem('authorized') != "false") {
      this.setState({
        loginButton: "Logout",
        loginButtonLink: "/logout"
      });
    } else {
      this.setState({
        loginButton: "Login",
        loginButtonLink: "/login"
      });
    }
  }

  render(){
    return (
      <nav class="navbar navbar-expand-lg navbar-dark">

      <div class="navbar-left"><Link class="nav-link" to="/"><img class="logo" src={logo}/></Link></div>
        <div class="container">
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item dropdown">
                <Link class="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{color:'#ffffff', fontSize:20}}>
                <b>Tournify Now</b>
              </Link>
                <div class="dropdown-menu dropdown-menu-right animate slideIn" aria-labelledby="navbarDropdown">
                  <Link class="dropdown-item" to={this.state.loginButtonLink}>{this.state.loginButton}</Link>
                  <Link class="dropdown-item" to="/register">Register</Link>
                  <div class="dropdown-divider"></div>
                  <Link class="dropdown-item" to="/profile">Your Team</Link>

                  {/*
                  <div class="dropdown-divider"></div>
                  <Link class="dropdown-item" to="/registertournament">Register Tournament</Link>
                  <Link class="dropdown-item" to="/registerteam">Register Team</Link>



                    <Link class="dropdown-item" to="/tournamentresults">Tournament Results</Link>
                    <div class="dropdown-divider"></div>
                  */}

                  <div class="dropdown-divider"></div>
                  <Link class="dropdown-item" to="/tournify">Tournify</Link>
                  <Link class="dropdown-item" to="/findtournament">Find Tournament</Link>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
