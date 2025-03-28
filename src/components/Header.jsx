import React from 'react'
import DarkMode from './DarkMode';
import '../css/Header.css'

const Header = () => {

  return (
    <>
    <header>
        <div className="title-principal">
            <h1>Social Media Dashboard</h1>
            <h4>Total Followers: 23,004</h4>
        </div>
        <div>
            <DarkMode />
        </div>
    </header>
    </>
  )
}

export default Header