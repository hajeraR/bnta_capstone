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
  const [showModal5, setShowModal5] = useState("close-modal");
  const navigate = useNavigate();

  const handleIconClick = () => {
    console.log(clicked);
    if (clicked === 0) {
      setShowModal1("show-modal");
      setShowModal2("close-modal");
      setShowModal3("close-modal");
    } else if (clicked === 1){
      setShowModal1("close-modal");
      setShowModal2("show-modal");
      setShowModal3("close-modal");
    } else if (clicked === 2) {
      setShowModal1("close-modal");
      setShowModal2("close-modal");
      setShowModal3("show-modal");
    } else if (clicked === 3) {
      navigate("/horrorPage");
    }
    setClicked( clicked => clicked + 1);
    
  }
  const handleKnifeClick = () => {
    setShowModal4("show-modal knife-modal");
  }
  const closeKnifeModal = () => {
    setShowModal4("close-modal");
  }
  const handleSkullClick = () => {
    setShowModal5("show-modal skull-modal");
    // setTimeout(setShowModal5("close-modal"),3000);
  }
  const closeSkullModal = () => {
    setShowModal5("close-modal");
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
          <div className="wheel-div">
          <CuteWheel clicked={clicked} handleIconClick={() => handleIconClick()}/>
          <img src={magicCircle} className="magic-circle" ></img>
      </div>

      <div className="mobileZodiacs" onClick={handleIconClick}>
      <img src={`./cuteZodiacs/0-cuteZodiac.PNG`} alt="aquarius icon" id="mobileImage" />
      <img src={`./cuteZodiacs/1-cuteZodiac.PNG`} alt="aries icon" id="mobileImage"/>
      <img src={`./cuteZodiacs/2-cuteZodiac.PNG`} alt="cancer icon" id="mobileImage"/>
      <img src={`./cuteZodiacs/3-cuteZodiac.PNG`} alt="capricorn icon" id="mobileImage"/>
      <img src={`./cuteZodiacs/4-cuteZodiac.PNG`} alt="gemini icon" id="mobileImage"/>
      <img src={`./cuteZodiacs/5-cuteZodiac.PNG`} alt="leo icon" id="mobileImage"/>
      <img src={`./cuteZodiacs/6-cuteZodiac.PNG`} alt="libra icon" id="mobileImage"/>
      <img src={`./cuteZodiacs/7-cuteZodiac.PNG`} alt="pisces icon" id="mobileImage"/>
      <img src={`./cuteZodiacs/8-cuteZodiac.PNG`} alt="sagittarius icon" id="mobileImage"/>
      <img src={`./cuteZodiacs/9-cuteZodiac.PNG`} alt="scorpio icon" id="mobileImage"/>
      <img src={`./cuteZodiacs/10-cuteZodiac.PNG`} alt="taurus icon" id="mobileImage"/>
      <img src={`./cuteZodiacs/11-cuteZodiac.PNG`} alt="virgo icon" id="mobileImage"/>
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
        <div className="run-modal">
        <section className="dare">
          <h1> RUN </h1>
        </section>
        <section className="droplets">
        <section className="dare2">
            <div className="drop"></div>
            <div className="wave"></div>
        </section>
        <section className="dare3">
            <div className="drop2"></div>
            <div className="wave2"></div>
        </section> 
        </section>
        </div>
       
      </div>
      <div className={showModal5} onClick={() => closeSkullModal()}>
        <img src="./handprints.png" alt="handprints"/>
      </div>
      <Link to="/horrorPage">
        <button className="button-62" role="button">Register</button>
      </Link>

        </section>
        <footer>
        <div className="footer">
      <img src={murderKnife} className="footer-image footer-knife" onClick={() => handleKnifeClick()}></img>
          <img src={skull} className="footer-image footer-skull" onClick={() => {handleSkullClick(); setTimeout(() => {setShowModal5("close-modal")}, 5000);}}></img>
          </div>
        </footer>
      </body>
  )

}
  








export default HomePage;