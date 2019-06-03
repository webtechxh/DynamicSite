import React from 'react';
import Image from './bracket.png'; // Import using relative path

function Home() {
  return (
      <section>
      {/*
      <img class="Image float-right" src={Image}/>
      */}
        <div class="container">
          <div class="row">
            <div class="col-lg-6">
              <h1 class="float-left mt-5" style={{fontSize:90, fontFamily: 'Ranga', justifyContent:'center', alignSelf:'center'}}><b>Tournify</b></h1>
              <div class="float-center top-padding"  style={{justifyContent:'center', alignSelf:'center'}}>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}

export default Home;
