import React from "react";
import "../styles/description.css"
import { GiCrownedSkull, GiHeartWings, GiCash, GiBeamsAura, GiBriefcase } from "react-icons/gi";
import { MdOutlineFamilyRestroom } from "react-icons/md";

 export const Description = ({description}) => (

    <div className="zodiac_description">
       {/* <div className="bannerPlaceholder">Banner Placeholder</div> */}
       <div className="zodiac_sign">
        <h1>{description.zodiacSign}</h1>
        </div>
        <div className="zodiac_icon">icon</div>
        <div className="zodiac_icon_dark">iconDark</div>
        <div className="zodiac_image">image</div>
        <div className="zodiac_image_dark">imageDark</div>
        <div className="zodiac_background">background</div>
        <div className="moon">
           <p id="positiveMatch"> positive match </p>
           <p>{description.positiveMatch}</p>
         </div>
         <div className="redMoon">
         <p id="negativeMatch"> negative match </p>
        <p>{description.negativeMatch}</p> 
        </div> 

        <div class="emptyLine"></div>

        <div className="cardEffect">
              <div id="cardStyle">
              <div className="cardFlip">
               <p id="outerCard"><GiBeamsAura /> Personality</p>
               <p id="innerCard">{description.personality}</p>
               </div>
        </div>
        <div id="cardStyle">
        <div className="cardFlip">
        <p id="outerCard"><MdOutlineFamilyRestroom/> Family</p>
        <p  id="innerCard">{description.family}</p>
        </div>
        </div>
        <div id="cardStyle">
              <div className="cardFlip">
              <p id="outerCard"><GiCrownedSkull /> Death</p>
        <p id="innerCard">{description.deathPrediction}</p>
        </div>
        </div>
        <div id="cardStyle">
              <div className="cardFlip">
              <p id="outerCard"><GiHeartWings/> Romance</p>
        <p id="innerCard">{description.romance}</p>
        </div>
        </div>
        <div id="cardStyle">
        <div className="cardFlip">
        <p id="outerCard"><GiCash /> Fortune</p>
        <p id="innerCard">{description.money}</p>
        </div>
        </div>
        <div id="cardStyle">
        <div className="cardFlip">
        <p id="outerCard"><GiBriefcase /> Career</p>
        <p  id="innerCard">{description.career}</p>
        </div>
        </div>
        </div>    
     </div>
    
    
    )

