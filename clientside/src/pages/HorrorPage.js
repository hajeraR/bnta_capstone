import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './HorrorPage.css'
import HorrorWheel from './HorrorWheel'

// import Wheel from './Wheel';




const HorrorPage = () => (
  <body id="horror-page-body">
    <section>
      <h1>Horror Scopes</h1>
      <p>This is the HomePage.</p>


      <HorrorWheel/>

      {/* <Link to="/descriptions" className="button">
      View Descriptions
    </Link> */}
      <Link to="/calendar" className="calendar-link">View Monthly Calendar</Link>
      <Link to={{ pathname: `/descriptions/virgo` }}>
        <button value="Virgo" >virgo</button>
      </Link>
      <Link to={{ pathname: `/descriptions/leo` }}>
        <button value="leo" >leo</button>
      </Link>
      <Link to="/" className="homepage-link">return to homepager</Link>

    </section>
  </body>
)







export default HorrorPage;