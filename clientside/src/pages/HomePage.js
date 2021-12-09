import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => (
  <section>
    <h1>HomePage</h1>
    <p>This is the HomePage.</p>

    <Link to="/posts" className="button">
      View Descriptions
    </Link>
  </section>
)

export default HomePage;