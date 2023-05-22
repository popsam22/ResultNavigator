import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <h1>University of Nottingham</h1>
        <p>Go to <Link to='/result'>Results Page</Link>.</p>
    </div>
  )
}

export default Home