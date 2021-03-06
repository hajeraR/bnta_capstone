import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './HorrorPage.css'
import HorrorWheel from './HorrorWheel'
import HorrorWheelSmall from './HorrorWheelSmall'
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
import { IoCalendarOutline } from "react-icons/io5";
import { AiOutlineHome } from "react-icons/ai";
// import Wheel from './Wheel';




const HorrorPage = () => (


  <>
  
    <div className="horror-container">
      <div class="bird-container bird-container--one">
        <div class="bird bird--one"></div>
      </div>

      <div class="bird-container bird-container--two">
        <div class="bird bird--two"></div>
      </div>

      <div class="bird-container bird-container--three">
        <div class="bird bird--three"></div>
      </div>

      <div class="bird-container bird-container--four">
        <div class="bird bird--four"></div>
      </div>
    </div>

  <body id="horror-page-body">
    <section className="horrorpage-header">
      <div className="home-icon-container">
      <Link to="/" className="homepage-link link-items"><AiOutlineHome id="navSymbol"/><p id="navWords">Back To Safety</p></Link>
      </div>
      <h1 className="title-horror neonText2"><span className="horror-span">Horror</span>Scopes</h1>
      <div className="calendar-icon-container">
      <Link to="/calendar" className="calendar-link link-items"><IoCalendarOutline  id="navSymbol"/> <p id="navWords"> Calendar </p></Link>
      </div>



    </section>



    <section>

      <div className="horror-wheel-div">
        <HorrorWheel />
        {/* <HorrorWheelSmall className="horror-wheel-small" /> */}
        <img src={flameCircle} className="horror-magic-circle" ></img>
      </div>


      {/* <Link to="/descriptions" className="button">
      View Descriptions
    </Link> */}
    <div className="small-horror-zodiacs">
      <Link to="/descriptions/capricorn"><button className="small-zodiac-button">Capricorn</button></Link>
      <Link to="/descriptions/sagittarius"><button className="small-zodiac-button">Sagittarius</button></Link>
      <Link to="/descriptions/scorpio" ><button className="small-zodiac-button">Scorpio</button></Link>
      <Link to="/descriptions/libra"><button className="small-zodiac-button">Libra</button></Link>
      <Link to="/descriptions/virgo"><button className="small-zodiac-button">Virgo</button></Link>
      <Link to="/descriptions/leo"><button className="small-zodiac-button">Leo</button></Link>
      <Link to="/descriptions/cancer"><button className="small-zodiac-button">Cancer</button></Link>
      <Link to="/descriptions/gemini"><button className="small-zodiac-button">Gemini</button></Link>
      <Link to="/descriptions/taurus"><button className="small-zodiac-button">Taurus</button></Link>
      <Link to="/descriptions/aries"><button className="small-zodiac-button">Aries</button></Link>
      <Link to="/descriptions/pisces"><button className="small-zodiac-button">Pisces</button></Link>
      <Link to="/descriptions/aquarius"><button className="small-zodiac-button">Aquarius</button></Link>
    </div>

    </section>
    <section className="spooky-submit-component">
      <SpookySubmit />

      <div class="starsHorror"></div>
        <div class="twinklingHorror"></div> 
        <div class="cloudsHorror"></div>

    </section>

    {/* <img src={horrorBackground} className="horror-background" ></img> */}


  </body>
  </>
)







export default HorrorPage;