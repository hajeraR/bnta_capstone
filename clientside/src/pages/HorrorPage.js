import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './HorrorPage.css'
import HorrorWheel from './HorrorWheel'
import dark from '../horrorBackground/dark.png';
import clown from '../horrorBackground/clown.png';
import forest from '../horrorBackground/forest.png';
import grey from '../horrorBackground/grey.png';
import orange from '../horrorBackground/orange.png';
import circle from '../horrorBackground/orange-magic-circle.png';
import flame from '../horrorBackground/flame-magic-circle.png';
import SpookySubmit from '../components/SpookySubmit';
import flameCircle from '../horrorBackground/flame-magic-circle.png';
import horrorBackground from '../horrorBackground/forest.png';

// import Wheel from './Wheel';




const HorrorPage = () => (
  <body id="horror-page-body">
    <section className="horrorpage-header">
    <Link to="/" className="homepage-link link-items">Return to Homepage</Link>
      <h1 className="title-horror neonText2"><span className="horror-span">Horror</span>Scopes</h1>
      <Link to="/calendar" className="calendar-link link-items">View Monthly Calendar</Link>
      
      
      </section>
      <section>

      <div className="horror-wheel-div">
      <HorrorWheel/>
      <img src={flameCircle} className="horror-magic-circle" ></img>
      </div>
      

      {/* <Link to="/descriptions" className="button">
      View Descriptions
    </Link> */}
      
      </section>
    <section className="spooky-submit-component">
      <SpookySubmit />
    </section>

    <img src={horrorBackground} className="horror-background" ></img>

    
  </body>
)







export default HorrorPage;