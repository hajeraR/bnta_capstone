import React from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';


// Bring in the asynchronous fetchPosts action
import { fetchCalendars, calendarsSelector} from '../actions/calendarActions';

import { Calendar } from '../components/Calendar'


const CalendarPage = () => {
  const dispatch = useDispatch();
  const  { loading, calendars, hasErrors } = useSelector(calendarsSelector)
    useEffect(() => {
      dispatch(fetchCalendars())
    }, [dispatch])

// Show loading, error, or success state
  const renderCalendars = () => {
    if (loading) return <p>Loading calendar...</p>
    if (hasErrors) return <p>Unable to display calendar.</p>
    console.log(calendars[0]);
    return calendars.map((calendar) => {return(<Calendar key={calendar.id} calendar={calendar} />)})
  }
  
    return (
      <section>
        <h1>Calendar</h1>
        {renderCalendars()}
      </section>
    )
}
  


export default CalendarPage;