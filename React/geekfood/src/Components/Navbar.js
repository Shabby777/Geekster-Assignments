import './Navbar.css'

import { Button } from './Button';
import React from 'react';
import { Link } from 'react-router-dom';


//to import logo
import logo from '../assets/logo.svg'

function Navbar(){
    return(
    <>
    <nav className="navbar">
        <div className="nav-logo verticle-center">
            {/* Add logo and name */}
            <img src={logo} alt="logo"></img>
            <span>GeekFood</span>
            </div>
        <div className="nav-links verticle-center">
            <div><span><Link to="/">Home</Link></span></div>
            <div><span><Link to="/quote">Quote</Link></span></div>
            <div><span><Link to="/restaurant">Restaurant</Link></span></div>
            <div><span><Link to="/foods">Foods</Link></span></div>
            <div><span>Contact</span></div>
        </div>
        <div className="verticle-center">
            <Button borderRadius={"8px"} backgroudKaColor={"#1C4ED8"} fontColor={"#FFFFFF"}>Get Started</Button>
            {/* <Button backgroudColor={"blue"} fontColor={"#FFFFFF"}>Get Started</Button> */}
        </div>
    </nav>
    </>
    );
}

export default Navbar;