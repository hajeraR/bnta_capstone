import React from 'react';
import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';


// Bring in the asynchronous fetchPosts action
import { fetchCalendars, calendarsSelector} from '../actions/calendarActions';

import { Calendar } from '../components/Calendar'


const CalendarPage = () => {
  const [chosenZodiac, setChosenZodiac] = useState("Virgo");

  const dispatch = useDispatch();
  const  { loading, calendars, hasErrors } = useSelector(calendarsSelector)
    useEffect(() => {
      dispatch(fetchCalendars())
    }, [dispatch])

  

// Show loading, error, or success state
  const renderCalendar = () => {
    if (loading) return <p>Loading calendar...</p>;
    if (hasErrors) return <p>Unable to display calendar.</p>;
    return (
      calendars.filter(calendar => calendar.zodiacSign===chosenZodiac).map((calendar) => {
          return (
            <Calendar key={calendar.id} calendar={calendar} />
          )
        
      }))
    
    }
  
 const chooseZodiac = (zodiac) => {
   console.log("click: ", zodiac);
    setChosenZodiac(zodiac);
  }

  const renderButtons = () => {
    if (loading) return <p>Loading buttons...</p>
    if (hasErrors) return <p>Unable to display buttons.</p>
    return (calendars.map((calendar) => {
      return(
        <button onClick={chooseZodiac(calendar.zodiacSign)}>{calendar.zodiacSign}</button>
      )
    }))
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
        {renderCalendar()}
      </section>
    )
}
  


export default CalendarPage;