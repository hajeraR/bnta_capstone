import React from 'react';
import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';


// Bring in the asynchronous fetchPosts action
import { fetchCalendars, calendarsSelector} from '../actions/calendarActions';

import { Calendar } from '../components/Calendar'
import './CalendarPage.css';


const CalendarPage = () => {
  const [chosenZodiac, setChosenZodiac] = useState("Virgo");
  const [shownMonth, setShownMonth] = useState("");
  const [calendarMonth, setCalendarMonth] = useState([]);

  const dispatch = useDispatch();
  const  { loading, calendars, hasErrors } = useSelector(calendarsSelector);
    useEffect(() => {
      dispatch(fetchCalendars())
    }, [dispatch])

  useEffect(() => {
    if (shownMonth != ""){
      setCalendarMonth([...calendars.filter(calendar => calendar.zodiacSign===chosenZodiac && calendar.month===shownMonth)])
    }
  }, [shownMonth] )

 
   
 const chooseZodiac = (zodiac) => {
   console.log("click: ", zodiac);
    setChosenZodiac(zodiac);
  }

  const chooseMonth = (month) => {
    setShownMonth(month);
  }

 
  
    return (
      <body id="firstBody">
      <section class="wrapper">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
        <div className="title-bar">
        <div className="zodiacButtons">
          <input type="image" src="./horrorZodiacs/0-horrorZodiac.PNG" alt="" onClick={() => chooseZodiac("Capricorn")}/>
          <input type="image" src="./horrorZodiacs/1-horrorZodiac.PNG" alt="" onClick={() => chooseZodiac("Sagittarius")}/>
          <input type="image" src="./horrorZodiacs/2-horrorZodiac.PNG" alt="" onClick={() => chooseZodiac("Scorpio")}/>
          <input type="image" src="./horrorZodiacs/3-horrorZodiac.PNG" alt="" onClick={() => chooseZodiac("Libra")}/>
          <input type="image" src="./horrorZodiacs/4-horrorZodiac.PNG" alt="" onClick={() => chooseZodiac("Virgo")}/>
          <input type="image" src="./horrorZodiacs/5-horrorZodiac.PNG" alt="" onClick={() => chooseZodiac("Leo")}/>
        </div>
        <h1 id="zodiac-title" >{chosenZodiac}</h1>
        <div className="zodiacButtons">
          <input type="image" src="./horrorZodiacs/6-horrorZodiac.PNG" alt="" onClick={() => chooseZodiac("Cancer")}/>
          <input type="image" src="./horrorZodiacs/7-horrorZodiac.PNG" alt="" onClick={() => chooseZodiac("Gemini")}/>
          <input type="image" src="./horrorZodiacs/8-horrorZodiac.PNG" alt="" onClick={() => chooseZodiac("Taurus")}/>
          <input type="image" src="./horrorZodiacs/9-horrorZodiac.PNG" alt="" onClick={() => chooseZodiac("Aries")}/>
          <input type="image" src="./horrorZodiacs/10-horrorZodiac.PNG" alt="" onClick={() => chooseZodiac("Pisces")}/>
          <input type="image" src="./horrorZodiacs/11-horrorZodiac.PNG" alt="" onClick={() => chooseZodiac("Aquarius")}/>
          {/* <button onClick={() => chooseZodiac("Virgo")}>Virgo</button> */}
          {/* <button onClick={() => chooseZodiac("Aquarius")}>Aquarius</button>
          <button onClick={() => chooseZodiac("Aries")}>Aries</button> */}
          {/* <button onClick={() => chooseZodiac("Sagittarius")}>Sagittarius</button>
          <button onClick={() => chooseZodiac("Gemini")}>Gemini</button>
          <button onClick={() => chooseZodiac("Capricorn")}>Capricorn</button>
          <button onClick={() => chooseZodiac("Cancer")}>Cancer</button>
          <button onClick={() => chooseZodiac("Taurus")}>Taurus</button>
          <button onClick={() => chooseZodiac("Scorpio")}>Scorpio</button>
          <button onClick={() => chooseZodiac("Leo")}>Leo</button>
          <button onClick={() => chooseZodiac("Pisces")}>Pisces</button>
          <button onClick={() => chooseZodiac("Libra")}>Libra</button> */}
        </div>
        </div>
        
        <div className="monthButtons">
          <button onClick={() => chooseMonth("January")} className="button-month">
            January
          </button>
          <button onClick={() => chooseMonth("February")} className="button-month">February</button>
          <button onClick={() => chooseMonth("March")} className="button-month">March</button>
          <button onClick={() => chooseMonth("April")} className="button-month">April</button>
          <button onClick={() => chooseMonth("May")} className="button-month">May</button>
          <button onClick={() => chooseMonth("June")} className="button-month">June</button>
          <button onClick={() => chooseMonth("July")} className="button-month">July</button>
          <button onClick={() => chooseMonth("August")} className="button-month">August</button>
          <button onClick={() => chooseMonth("September")} className="button-month">September</button>
          <button onClick={() => chooseMonth("October")} className="button-month">October</button>
          <button onClick={() => chooseMonth("November")} className="button-month">November</button>
          <button onClick={() => chooseMonth("December")} className="button-month">December</button>
        </div>
        {calendarMonth.length > 0 ? 
        <Calendar chooseMonth={chooseMonth} setShownMonth={setShownMonth} setCalendarMonth={setCalendarMonth} calendar={calendarMonth}/>
        :
        <></>}
      </section>
      </body>
    )
}
  


export default CalendarPage;