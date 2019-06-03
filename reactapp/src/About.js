import React from 'react';

function About() {
  return (

    <div class="container-fluid text-center">
      <div class="row content">
        <div class="col-sm-2 sidenav">
        </div>
        <div class="top-padding col-sm-8 text-left">
          <h1 style={{fontFamily: 'Ranga', fontSize:40}}>Who are we?</h1>
          <div class="top-padding font-weight-bold">
          The next generation tournament bracket generator
          </div>
          <p>WIth Tournify you can revolutionise the way you select and pitch team against one another</p>
          <div class="top-padding font-weight-bold">
          Simple and intuitive user interface
          </div>
          <p>Just get registered, name your teams and get back to the pitch.</p>
          <div class="top-padding font-weight-bold">
          Save time, save money, play more!
          </div>

        </div>
        <div class="col-sm-2 sidenav">
        </div>
      </div>
    </div>

  );
}

export default About;
