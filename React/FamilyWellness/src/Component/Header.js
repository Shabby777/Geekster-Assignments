// import { Button } from './Button';
import './Header.css';
import React from 'react'

const Header = () => {
  return (
    <>
    <div className='header-container'>
    <h1 id="header-title">Family Wellness</h1>
    <p id="header-para">massage therapy</p>
    
    <ul id="header-menu">
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>FAQ</li>
        <li>Contact</li>
        
    </ul>
    
    </div>
    </>
  )
}

export default Header;