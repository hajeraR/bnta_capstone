import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import CuteWheel from './CuteWheel'
import './HomePage.css'
// import magicCircle from '../assets/cuteBackground/magic-circle.png'
import flowerFrame from '../cuteBackground/flower-frame.png';
import magicCircle from '../cuteBackground/magic-circle.png';
import murderKnife from '../cuteBackground/murder-knife.png';
import skull from '../cuteBackground/skull.png';




const HomePage = () => {
  const [clicked, setClicked] = useState(0);
  const [showModal1, setShowModal1] = useState("close-modal");
  const [showModal2, setShowModal2] = useState("close-modal");
  const [showModal3, setShowModal3] = useState("close-modal");
  const [showModal4, setShowModal4] = useState("close-modal");
  const navigate = useNavigate();

  const handleIconClick = () => {
    console.log(clicked);
    if (clicked == 0) {
      setShowModal1("show-modal");
      setShowModal2("close-modal");
      setShowModal3("close-modal");
    } else if (clicked == 1){
      setShowModal1("close-modal");
      setShowModal2("show-modal");
      setShowModal3("close-modal");
    } else if (clicked == 2) {
      setShowModal1("close-modal");
      setShowModal2("close-modal");
      setShowModal3("show-modal");
    } else if (clicked == 3) {
      navigate("/horrorPage");
    }
    setClicked( clicked => clicked + 1);
    
  }
  const handleKnifeClick = () => {
    setShowModal4("show-modal");
  }
  const closeKnifeModal = () => {
    setShowModal4("close-modal");
  }

  const closeModal = () => {
    setShowModal1("close-modal");
    setShowModal2("close-modal");
    setShowModal3("close-modal");
  }

  // useEffect(() => handleIconClick(), []);
  
  return(
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
          <CuteWheel clicked={clicked} handleIconClick={() => handleIconClick()}/>
          <img src={magicCircle} className="magic-circle" ></img>
      </div>
      <div className={showModal1} onClick={() => closeModal()}>
        <div className="warning-box">
          <h3>Do you really want to know your future?</h3>
        </div> 
      </div>
      <div className={showModal2} onClick={() => closeModal()}>
        <div className="warning-box">
          <h3>Don't you like it here? Don't you like the flowers!</h3>
        </div>
      </div>
      <div className={showModal3} onClick={() => closeModal()}>
        <div className="warning-box">
          <h3>This is your last warning!</h3>
        </div>
      </div>
      <div className={showModal4} onClick={() => closeKnifeModal()}>
        <div className="ghost-modal">
          <h2>RUN!</h2>
        </div>
      </div>
      <Link to="/horrorPage">
        <button className="button-62" role="button">Register</button>
      </Link>

        </section>
        <footer>
        <div className="footer">
      <img src={murderKnife} className="footer-image footer-knife" onClick={() => handleKnifeClick()}></img>
          <img src={skull} className="footer-image footer-skull"></img>
          </div>
        </footer>
      </body>
  )

}
  








export default HomePage;