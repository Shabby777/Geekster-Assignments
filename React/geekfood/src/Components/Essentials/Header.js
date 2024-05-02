import React from 'react';
import {Link} from "react-router-dom";
import logo from "./Images/logo.svg";
import './Header.css';
function Header(props) {
    return (
        <header>
            <div className="Pagelogo">
                <Link to="/home">
                    <img src={logo} alt="GeekFoods" />
                    <p>GeekFoods</p>
                </Link> 
            </div>
            <div className="headSec2">
                <Link to="/home" className="active">Home</Link>
                <Link to="/quote">Quote</Link>
                <Link to="/resturants">Resturants</Link>
                <Link to="/foods">Foods</Link>
                <Link to="/contact">Contact</Link>
            </div>
            <div className="getStartedBtn">
                <button>Get started</button>
            </div>
            <div className="menuIcon">
                <i class="fa-solid fa-bars"></i>
            </div>
        </header>
    );
}

export default Header;