import React from 'react'
import photo from '../assets/photo.jpg';
import { Button } from './Button';
import './Body.css';

const Body = () => {
  return (
    <>
    <section id="body-container">
    <div id="body-section-one">
    <img src={photo} alt="image" />
    <div id="body-content1">
    <h1>Think Health. Think Massage</h1>
    <p>We are open 9am to 6pm; Monday through Sunday. If you would like to scedule an appointment with us, please call us at 987-654-3210 today!</p>
    <div className="buttons">
    <Button id="button1">Learn more about us</Button>
    <Button id="button2">Contact us today</Button>
    </div>
    </div>
    </div>
    <div id="body-section-two">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
    <hr/>
    <div id="body-section-three">
      <h3>Family Wellness Massage Theraphy</h3>
      <p>9876 Main Street, Suite 123, Mainland, ML123456</p>
      <p>987-654-3210</p>
    </div>
    </section>
    </>
  )
}

export default Body