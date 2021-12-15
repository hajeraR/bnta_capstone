import React from "react";
import { useState } from "react";
import "../styles/description.css"
import { GiCrownedSkull, GiHeartWings, GiCash, GiBeamsAura, GiBriefcase } from "react-icons/gi";
import { MdOutlineFamilyRestroom } from "react-icons/md";
import { useParams } from "react-router";

 export const Description = ({description}) => {

    const [deathShown, setDeathShown] = useState(false);
    const { zodiacSign }  = useParams();

    return (

    
    <div className="zodiac_description">
       {/* <div className="bannerPlaceholder">Banner Placeholder</div> */}
       <div className="zodiac_sign">
       {description.zodiacSign != null ? (<h1>{description.zodiacSign}</h1>) : (<h1>{zodiacSign}</h1>)}
        </div>
        <div className="zodiac_icon">icon</div>
        <div className="zodiac_icon_dark">iconDark</div>
        <div className="zodiac_image">image</div>
        <div className="zodiac_image_dark">imageDark</div>
        <div className="zodiac_background">background</div>
        <div className="moon-container">
        <div className="moon">
           <p id="positiveMatch"> positive match </p>
           {description.positiveMatch != null ? (<p>{description.positiveMatch}</p>) : (<p>Coming soon...</p>)}
         </div>
         <div className="redMoon">
         <p id="negativeMatch"> negative match </p>
        {description.negativeMatch != null ? (<p>{description.negativeMatch}</p>) : (<p>Coming soon...</p>)}
        </div> 
      </div>
        <div class="emptyLine"></div>

        <div className="cardEffect">
              <div id="cardStyle">
              <div className="cardFlip">
               <p id="outerCard"><GiBeamsAura /> Personality</p>
               {description.personality != null ? (<p id="innerCard">{description.personality}</p>) : (<p id="innerCard">Coming soon...</p>)}
               </div>
        </div>
        <div id="cardStyle">
        <div className="cardFlip">
        <p id="outerCard"><MdOutlineFamilyRestroom/> Family</p>
        {description.family != null ? (<p id="innerCard">{description.family}</p>) : (<p id="innerCard">Coming soon...</p>)}
        </div>
        </div>
        <div id="cardStyle">
              <div className="cardFlip">
              <p id="outerCard"><GiCrownedSkull /> Death</p>
        {description.deathPrediction != null ? (<p id="innerCard">{description.deathPrediction}</p>) : (<p id="innerCard">Coming soon...</p>)}
        </div>
        </div>
        <div id="cardStyle">
              <div className="cardFlip">
              <p id="outerCard"><GiHeartWings/> Romance</p>
        {description.romance != null ? (<p id="innerCard">{description.romance}</p>) : (<p id="innerCard">Coming soon...</p>)}
        </div>
        </div>
        <div id="cardStyle">
        <div className="cardFlip">
        <p id="outerCard"><GiCash /> Fortune</p>
        {description.money != null ? (<p id="innerCard">{description.money}</p>) : (<p id="innerCard">Coming soon...</p>)}
        </div>
        </div>
        <div id="cardStyle">
        <div className="cardFlip">
        <p id="outerCard"><GiBriefcase /> Career</p>
        {description.career != null ? (<p id="innerCard">{description.career}</p>) : (<p id="innerCard">Coming soon...</p>)}
        </div>
        </div>
        </div>    
     </div>
    )
    
 }

