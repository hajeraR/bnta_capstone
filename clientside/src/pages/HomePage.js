import React from 'react'
import { Link } from 'react-router-dom'
import Wheel from './Wheel';

const HomePage = () => (
  <section>
    <h1>Horo-Scopes</h1>
    <p>This is the HomePage.</p>
    <Wheel/>
    <Link to="/descriptions" className="button">
      View Descriptions
    </Link>
    <Link to="/calendar" className="calendar-link">View Monthly Calendar</Link>
  </section>
)

export default HomePage;