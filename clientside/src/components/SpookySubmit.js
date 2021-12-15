import React, { useState, useEffect } from "react";
import emailjs from 'emailjs-com';


const SpookySubmit = () => {



    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const email = document.getElementById("email-input");
    const zodiac = document.getElementById("zodiac-input");
    const fName = document.getElementById("firstName-input");
    const lName = document.getElementById("lastName-input");

    const form = document.getElementById("subscribe");
    // const submittedMessage = document.getElementById("submitted");
    const audio = document.getElementById("darania_screaming");
    // const error = document.getElementById("error");

    const [userEmail, setUserEmail] = useState("");
    const [userZodiac, setUserZodiac] = useState("");
    const [userFName, setUserFName] = useState("");
    const [userLName, setUserLName] = useState("");
    const [postedEmail, setPostedEmail] = useState([]);

    const handleEmailChange = (event) => {
        setUserEmail(event.target.value)
        console.log(userEmail);
    }

    const handleZodiacChange = (event) => {
        setUserZodiac(event.target.value)
        console.log(userZodiac);
    }


    const handleFirstNameChange = (event) => {
        setUserFName(event.target.value)
        console.log(userFName);

    }

    const handleLastNameChange = (event) => {
        setUserLName(event.target.value)
        console.log(userLName);
    }



    const addNewEmail = (newEmail) => {

        if(!emailRegex.test(email.value)){
            document.getElementById("error").style.display = "block";
        return;
        }
        else{
            

            
        fetch("http://localhost:8080/emails", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newEmail)
        })
            audio.play();
            email.value = "";
            zodiac.value = "";
            fName.value = "";
            lName.value = "";
            
            

    }
}

    const handleEmailSubmission = (event) => {
        //stops the defult actions from happening in this case stops site fromrefreshing
        event.preventDefault();

        //assign values to keys
        const newEmail = {
            firstName: userFName,
            lastName: userLName,
            email: userEmail,
            zodiacSign: userZodiac
        }

        //calling function to update state
        addNewEmail(newEmail);

        //after submission clear form
        setUserEmail("");
        setUserZodiac("");
        setUserFName("");
        setUserLName("")

    }



    // if (!emailRegex.test(email.value)) {
    //     document.getElementById("error").style.display = "block";
    //     return;

    // } else {

    //     audio.play();
    //         email.value = ""
    //         form.style.display = "block",

    //         fetch("http://localhost:8080/emails", {
    //             method: 'POST',
    //             headers: { 'Content-Type': 'application/json' },
    //             body: JSON.stringify(email)
    //         }


    // }





    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     if (!emailRegex.test(email.value)) {
    //         document.getElementById("error").style.display = "block";
    //         return;
    //     } else {

    //         audio.play();
    //         email.value = "";
    //         form.style.display = "block";
    //         // sendEmail();
    //         console.log("email: ", email.value);
    //     }
    // };




    return (

        <div className="form-container-div">
            <form id="subscribe" className="form-container" onSubmit={handleEmailSubmission}>
                {/* <h3>placeholder</h3> */}
                <div className="input-container">
                    <input className="horror-input" type="text" placeholder="FIRST NAME" id="firstName-input" onChange={handleFirstNameChange}></input>
                    <input className="horror-input" type="text" placeholder="LAST NAME" id="lastName-input" onChange={handleLastNameChange}></input>
                    <input className="horror-input" type="email" placeholder="EMAIL" id="email-input" onChange={handleEmailChange}></input>
                    <input className="horror-input" type="text" placeholder="ZODIAC SIGN" id="zodiac-input" onChange={handleZodiacChange}></input>

                </div>
                <div className="horror-button-container">
                    <button className="horror-button">SUBSCRIBE</button>
                    {/* <span className="dare">💀 if you dare 💀</span>  */}
                </div>
            </form>

            <audio id="darania_screaming">
                <source src="http://soundbible.com/grab.php?id=1548&type=mp3" type="audio/mpeg" />
            </audio>
        </div>


    )
}
export default SpookySubmit;




