import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import CuteWheel from './CuteWheel'
import './HomePage.css'
// import magicCircle from '../assets/cuteBackground/magic-circle.png'




const HomePage = () => (
  <body id="home-page-body">
    <section class="wrapper">

      <h1 className="title neonText" ><span>Horo</span>Scopes</h1>

      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      {/* <img className="magic-circle" src={magicCircle}/> */}
      <CuteWheel />

      <Link to="/horrorPage">
        <button className="button-62" role="button">Register</button>
      </Link>


    </section>
  </body>
)







export default HomePage;