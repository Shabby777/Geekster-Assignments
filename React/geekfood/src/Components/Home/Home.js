import React from 'react';
import "./Home.css";
import MainBody from './MainBody';
import GetInTouch from './GetInTouch';
import Testimonials from './Testimonials';

function Home(props) {
    return (
        <div>
            <MainBody />
            <GetInTouch />
            <Testimonials />
        </div>
    );
}

export default Home;