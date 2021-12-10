import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Wheel from './Wheel';
import './HomePage.css'


   

const HomePage = () => (
  <body id="home-page-body">
  <section>
    {/* <h1>Horo-Scopes</h1>
    <p>This is the HomePage.</p> */}
    <Wheel/>

   
  
    <Link to="/horrorPage"  className="button">
      View mainpage
    </Link>

    
    {/* <Link to="/calendar" className="calendar-link">View Monthly Calendar</Link>
    <Link to={{ pathname: `/descriptions/virgo`}}>
      <button value="Virgo" >virgo</button>
    </Link>
    <Link to={{ pathname: `/descriptions/leo`}}>
      <button value="leo" >leo</button>
    </Link> */}
    
  </section>
  </body>
  )


 

  


export default HomePage;