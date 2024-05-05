
import React from 'react'
import './Hero.css'
import { Button } from './Button';



function Hero(){
    return(
        <>
<section className="hero hero-background-image">
    <div id="hero-text-container">
    <h1 id="hero-text">Let us find your <span id="hero-text-end">Forever Food.</span></h1>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus numquam</p>
    <div id="hero-button-container">
    <Button borderRadius={"8px"} backgroudKaColor={"#E11D48"} fontColor={"#FFFFFF"}>Search Now</Button>
    <Button borderRadius={"8px"} backgroudKaColor={"#FFFFFF"} fontColor={"#E11D48"}>Know More</Button>
    </div>
    </div>
</section>
</>
    );
}

export default Hero;