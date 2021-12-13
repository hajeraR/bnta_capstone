import React from "react";
import { useState } from "react";
import "../styles/description.css"

 export const Description = ({description}) => {

    const [deathShown, setDeathShown] = useState(false);


    return (

    
    <div className="zodiac_description">
       <div className="bannerPlaceholder">Banner Placeholder</div>
       <div className="zodiac_sign">
        <h1>{description.zodiacSign}</h1>
        </div>
        <p className="zodiac_personality">{description.personality}</p>
        <div className="zodiac_icon">icon</div>
        <div className="zodiac_icon_dark">iconDark</div>
        <div className="zodiac_image">image</div>
        <div className="zodiac_image_dark">imageDark</div>
        <div className="zodiac_background">background</div>
        <div className="moon">
           <p className="zodiac_negative_match">{description.negativeMatch}</p>
         </div>
         <div className="sun">
            <p className="zodiac_positive_match">{description.positiveMatch}</p> 
        </div> 
        <p className="zodiac_death_prediction">{description.deathPrediction}</p>
        <p className="zodiac_romance">{description.romance}</p>
        <p className="zodiac_family">{description.family}</p>
        <p className="zodiac_money">{description.money}</p>
        <p className="zodiac_career">{description.career}</p>    
     </div>
    )
    
 }

