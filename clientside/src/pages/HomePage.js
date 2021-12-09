import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => (
  <section>
    <h1>HomePage</h1>
    <p>This is the HomePage.</p>

    <Link to="/descriptions" className="button">
      View Descriptions
    </Link>
    <Link to="/calendar" className="calendar-link">View Monthly Calendar</Link>
  </section>
)

export default HomePage;