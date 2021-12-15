import React, {useState, useEffect} from "react";
import emailjs from 'emailjs-com';


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

function sendEmail(e) {
        e.preventDefault();    //This is important, i'm not sure why, but the email won't send without it
    
        emailjs.sendForm('service_tbit60h', 'template_t5mtf8i', e.target, 'user_T5v6fHUvFiADaLBFUpTL5')
          .then((result) => {
              window.location.reload()  //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior) 
          }, (error) => {
              console.log(error.text);
          });
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
        // sendEmail();
		console.log("email: ", email.value);
	}
};


// export default function ContactUs() {

//   function sendEmail(e) {
//     e.preventDefault();    //This is important, i'm not sure why, but the email won't send without it

//     emailjs.sendForm('service_tbit60h', 'template_t5mtf8i', e.target, 'user_T5v6fHUvFiADaLBFUpTL5')
//       .then((result) => {
//           window.location.reload()  //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior) 
//       }, (error) => {
//           console.log(error.text);
//       });
//   }

//   return (
//     <form className="contact-form" onSubmit={sendEmail}>
//       <input type="hidden" name="contact_number" />
//       <label>Name</label>
//       <input type="text" name="from_name" />
//       <label>Email</label>
//       <input type="email" name="from_email" />
//       <label>Subject</label>
//       <input type="text" name="subject" />
//       <label>Message</label>
//       <textarea name="html_message" />
//       <input type="submit" value="Send" />
//     </form>
//   );
// }

    return (

   <div className="form-container-div">
       <form id="subscribe" className="form-container" onSubmit={handleSubmit}>
           {/* <h3>placeholder</h3> */}
           <div className="input-container">
           <input className="horror-input" type="email" placeholder="EMAIL" id="email-input" name="user_email" onChange={handleEmailChange}></input>
           <input className="horror-input" type="text" placeholder="ZODIAC SIGN" id="zodiac-input" name="user_zodiac"></input>
           </div>
           <div className="horror-button-container">
           <button className="horror-button">SUBSCRIBE</button>
           {/* <span className="dare">💀 if you dare 💀</span>  */}
           </div>
       </form>

       <audio id="darania_screaming">
           <source src="http://soundbible.com/grab.php?id=1548&type=mp3" type="audio/mpeg"/>
       </audio>
   </div>


    )
}
export default SpookySubmit;




