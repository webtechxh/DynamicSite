import React from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Header from "./Header"
import Home from "./Home"
import About from "./About"
import Footer from "./Footer"
import Contact from "./Contact"
import Login from "./Login"
import Register from "./Register"
import Registerteam from "./Registerteam"
import Registertournament from "./Registertournament"
import Profile from "./Profile"
import Tournify from "./Tournify"


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route path="/" exact component={Home} />
        <Route path="/about/" component={About} />
        <Route path="/contact/" component={Contact} />
        <Route path="/login/" component={Login} />
        <Route path="/register/" component={Register} />
        <Route path="/registerteam/" component={Registerteam} />
        <Route path="/registertournament/" component={Registertournament} />
        <Route path="/profile/" component={Profile} />
        <Route path="/tournify/" component={Tournify} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
