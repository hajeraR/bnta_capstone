import React from 'react';
import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { AiOutlineHome } from "react-icons/ai";


// Bring in the asynchronous fetchPosts action
import { fetchCalendars, calendarsSelector } from '../actions/calendarActions';

import { Calendar } from '../components/Calendar'
import './CalendarPage.css';


const CalendarPage = () => {
  const [chosenZodiac, setChosenZodiac] = useState("Virgo");
  const [shownMonth, setShownMonth] = useState("");
  const [calendarMonth, setCalendarMonth] = useState([]);

  const dispatch = useDispatch();
  const { loading, calendars, hasErrors } = useSelector(calendarsSelector);
  useEffect(() => {
    dispatch(fetchCalendars())
  }, [dispatch])

  useEffect(() => {
    if (shownMonth != "") {
      setCalendarMonth([...calendars.filter(calendar => calendar.zodiacSign === chosenZodiac && calendar.month === shownMonth)])
    }
  }, [shownMonth])



  const chooseZodiac = (zodiac) => {
    console.log("click: ", zodiac);
    setChosenZodiac(zodiac);
  }

  const chooseMonth = (month) => {
    setShownMonth(month);
  }
  const handleZodiacTitle = (event) => {
    setChosenZodiac(event.target.value);
  }



  return (
    <body id="firstBody">
      <section className="wrapper">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
        <div className="title-bar">
          <div className="zodiacButtons">
            <input type="image" src="./horrorZodiacs/0-horrorZodiac.PNG" alt="" onClick={() => chooseZodiac("Capricorn")} className="zodiac-icon-buttons" />
            <input type="image" src="./horrorZodiacs/1-horrorZodiac.PNG" alt="" onClick={() => chooseZodiac("Sagittarius")} className="zodiac-icon-buttons" />
            <input type="image" src="./horrorZodiacs/2-horrorZodiac.PNG" alt="" onClick={() => chooseZodiac("Scorpio")} className="zodiac-icon-buttons" />
            <input type="image" src="./horrorZodiacs/3-horrorZodiac.PNG" alt="" onClick={() => chooseZodiac("Libra")} className="zodiac-icon-buttons" />
            <input type="image" src="./horrorZodiacs/4-horrorZodiac.PNG" alt="" onClick={() => chooseZodiac("Virgo")} className="zodiac-icon-buttons" />
            <input type="image" src="./horrorZodiacs/5-horrorZodiac.PNG" alt="" onClick={() => chooseZodiac("Leo")} className="zodiac-icon-buttons" />
          </div>
          <h1 id="zodiac-title" >{chosenZodiac}</h1>
          <div className="zodiacButtons">
            <input type="image" src="./horrorZodiacs/6-horrorZodiac.PNG" alt="" onClick={() => chooseZodiac("Cancer")} className="zodiac-icon-buttons" />
            <input type="image" src="./horrorZodiacs/7-horrorZodiac.PNG" alt="" onClick={() => chooseZodiac("Gemini")} className="zodiac-icon-buttons" />
            <input type="image" src="./horrorZodiacs/8-horrorZodiac.PNG" alt="" onClick={() => chooseZodiac("Taurus")} className="zodiac-icon-buttons" />
            <input type="image" src="./horrorZodiacs/9-horrorZodiac.PNG" alt="" onClick={() => chooseZodiac("Aries")} className="zodiac-icon-buttons" />
            <input type="image" src="./horrorZodiacs/10-horrorZodiac.PNG" alt="" onClick={() => chooseZodiac("Pisces")} className="zodiac-icon-buttons" />
            <input type="image" src="./horrorZodiacs/11-horrorZodiac.PNG" alt="" onClick={() => chooseZodiac("Aquarius")} className="zodiac-icon-buttons" />
          </div>
        </div>
        <div className='small-title-bar'>
          <select className="calendar-title-input" name="title-zodiac-sign" id="title-zodiac-sign" placeholder="ZODIAC SIGN" onChange={handleZodiacTitle}>
            <option value="Virgo">Virgo</option>
            <option value="Capricorn">Capricorn</option>
            <option value="Aquarius">Aquarius</option>
            <option value="Pisces">Pisces</option>
            <option value="Aries">Aries</option>
            <option value="Taurus">Taurus</option>
            <option value="Gemini">Gemini</option>
            <option value="Cancer">Cancer</option>
            <option value="Leo">Leo</option>
            <option value="Libra">Libra</option>
            <option value="Scorpio">Scorpio</option>
            <option value="Sagittarius">Sagittarius</option>
          </select>
        </div>

        <div className="monthButtons">
          <button onClick={() => chooseMonth("JANUARY")} className="button-month">
            January
          </button>
          <button onClick={() => chooseMonth("FEBURARY")} className="button-month">February</button>
          <button onClick={() => chooseMonth("MARCH")} className="button-month">March</button>
          <button onClick={() => chooseMonth("APRIL")} className="button-month">April</button>
          <button onClick={() => chooseMonth("MAY")} className="button-month">May</button>
          <button onClick={() => chooseMonth("JUNE")} className="button-month">June</button>
          <button onClick={() => chooseMonth("JULY")} className="button-month">July</button>
          <button onClick={() => chooseMonth("AUGUST")} className="button-month">August</button>
          <button onClick={() => chooseMonth("SEPTEMBER")} className="button-month">September</button>
          <button onClick={() => chooseMonth("OCTOBER")} className="button-month">October</button>
          <button onClick={() => chooseMonth("NOVEMBER")} className="button-month">November</button>
          <button onClick={() => chooseMonth("DECEMBER")} className="button-month">December</button>
        </div>
        {calendarMonth.length > 0 ?
          <Calendar chooseMonth={chooseMonth} setShownMonth={setShownMonth} setCalendarMonth={setCalendarMonth} calendar={calendarMonth} />
          :
          <></>}
      </section>
      <div className="horrorpage-link-div">
        <Link to="/horrorPage" className="horrorpage-link">Return to horrorpage</Link>
      </div>
    </body>
  )
}



export default CalendarPage;