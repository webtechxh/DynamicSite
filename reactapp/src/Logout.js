import React from 'react';
import Image from './bracket.png'; // Import using relative path

class Logout extends React.Component {

  componentDidMount(){
    console.log(localStorage.getItem('authToken'), localStorage.getItem('authorized'));
    localStorage.setItem('authToken', null);
    localStorage.setItem('authorized', false);
    this.props.history.push("/");
    window.location.reload();
  }

  render(){
    return null;
  }
}

export default Logout;
