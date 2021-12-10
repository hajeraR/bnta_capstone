import React from 'react';
import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';


// Bring in the asynchronous fetchPosts action
import { fetchCalendars, calendarsSelector} from '../actions/calendarActions';

import { Calendar } from '../components/Calendar'


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
      <section>
        <div className="zodiacButtons">
          <button onClick={() => chooseZodiac("Virgo")}>Virgo</button>
          <button onClick={() => chooseZodiac("Aquarius")}>Aquarius</button>
          <button onClick={() => chooseZodiac("Aries")}>Aries</button>
          <button onClick={() => chooseZodiac("Sagittarius")}>Sagittarius</button>
          <button onClick={() => chooseZodiac("Gemini")}>Gemini</button>
          <button onClick={() => chooseZodiac("Capricorn")}>Capricorn</button>
          <button onClick={() => chooseZodiac("Cancer")}>Cancer</button>
          <button onClick={() => chooseZodiac("Taurus")}>Taurus</button>
          <button onClick={() => chooseZodiac("Scorpio")}>Scorpio</button>
          <button onClick={() => chooseZodiac("Leo")}>Leo</button>
          <button onClick={() => chooseZodiac("Pisces")}>Pisces</button>
          <button onClick={() => chooseZodiac("Libra")}>Libra</button>
        </div>
        <h1>Calendar</h1>
        <div className="monthButtons">
          <button onClick={() => chooseMonth("January")}>January</button>
          <button onClick={() => chooseMonth("February")}>February</button>
          <button onClick={() => chooseMonth("March")}>March</button>
          <button onClick={() => chooseMonth("April")}>April</button>
          <button onClick={() => chooseMonth("May")}>May</button>
          <button onClick={() => chooseMonth("June")}>June</button>
          <button onClick={() => chooseMonth("July")}>July</button>
          <button onClick={() => chooseMonth("August")}>August</button>
          <button onClick={() => chooseMonth("September")}>September</button>
          <button onClick={() => chooseMonth("October")}>October</button>
          <button onClick={() => chooseMonth("November")}>November</button>
          <button onClick={() => chooseMonth("December")}>December</button>
        </div>
        {calendarMonth.length > 0 ? 
        <Calendar chooseMonth={chooseMonth} setShownMonth={setShownMonth} setCalendarMonth={setCalendarMonth} calendar={calendarMonth}/>
        :
        <></>}
      </section>
    )
}
  


export default CalendarPage;