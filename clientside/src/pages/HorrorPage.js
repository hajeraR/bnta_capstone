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

// import Wheel from './Wheel';




const HorrorPage = () => (
  <body id="horror-page-body">
    <section>

      
      <h1 className="title-horror neonText2"><span className="horror-span">Horror</span>Scopes</h1>
      
      
      
      <HorrorWheel/>
      

      {/* <Link to="/descriptions" className="button">
      View Descriptions
    </Link> */}
      <Link to="/calendar" className="calendar-link">View Monthly Calendar</Link>
      
      <Link to="/" className="homepage-link">return to homepager</Link>
    
    </section>
  </body>
)







export default HorrorPage;