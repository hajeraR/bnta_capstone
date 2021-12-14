import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import CuteWheel from './CuteWheel'
import './HomePage.css'
// import magicCircle from '../assets/cuteBackground/magic-circle.png'
import flowerFrame from '../cuteBackground/flower-frame.png';
import magicCircle from '../cuteBackground/magic-circle.png';
import murderKnife from '../cuteBackground/murder-knife.png';
import skull from '../cuteBackground/skull.png';




const HomePage = () => (
  <body id="home-page-body">
    <section class="wrapper">
    <img src={flowerFrame} className="flower-test"></img>
    <div className="title-test">
      <h1 className="title neonText" ><span className="cute-span">Horo</span>Scopes</h1>
 </div>
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      {/* <img className="magic-circle" src={magicCircle}/> */}
      <div className="wheel-div">
      <CuteWheel />
      <img src={magicCircle} className="magic-circle" ></img>
</div>
<Link to="/horrorPage">
        <button className="button-62" role="button">Register</button>
      </Link>

    </section>
    <footer>
    <div className="footer">
  <img src={murderKnife} className="footer-image footer-knife"></img>
      <img src={skull} className="footer-image footer-skull"></img>
      </div>
    </footer>
  </body>
)







export default HomePage;