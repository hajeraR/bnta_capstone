import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {





  return(
    <section>
    <h1>HomePage</h1>
    <p>This is the HomePage.</p>



    <Link to="/descriptions" className="button">
      View Descriptions
    </Link>
    <Link to="/calendar" className="calendar-link">View Monthly Calendar</Link>
    <Link to={{ pathname: `/descriptions/:zodiacSign`}}>
      <button value="Virgo" >virgo</button>
    </Link>
    
  </section>

  )
}

 

  


export default HomePage;