import React, {useState, useEffect} from "react";

const SpookySubmit = () => {

const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const email = document.getElementById("email-input");
const form = document.getElementById("subscribe");
// const submittedMessage = document.getElementById("submitted");
const audio = document.getElementById("darania_screaming");
// const error = document.getElementById("error");

const [userEmail, setUserEmail] = useState("");

const handleEmailChange = (e) => {

    setUserEmail(e.target.value)
}

const handleSubmit = (e) => {
	e.preventDefault();
	if (!emailRegex.test(email.value)) {
		document.getElementById("error").style.display = "block";
		return;
	} else {
		
		audio.play();
		email.value="";
		form.style.display = "block";
		console.log("email: ", email.value);
	}
};



    return (

   <div className="form-container-div">
       <form id="subscribe" className="form-container" onSubmit={handleSubmit}>
           {/* <h3>placeholder</h3> */}
           <input className="horror-input" type="email" placeholder="EMAIL" id="email-input" onChange={handleEmailChange}></input>
           <input className="horror-input" type="text" placeholder="ZODIAC SIGN" id="zodiac-input"></input>
           
           <button className="horror-button">SUBSCRIBE</button>
           {/* <span className="dare">💀 if you dare 💀</span>  */}
           
       </form>

       <audio id="darania_screaming">
           <source src="http://soundbible.com/grab.php?id=1548&type=mp3" type="audio/mpeg"/>
       </audio>
   </div>


    )
}
export default SpookySubmit;




