import React from 'react';
import "./MainBody.css"
function MainBody(props) {
    return (
        <main>
            <div className="section1">
                <div className="sec1Content">
                    <h1 className='sec1Contentline1'>Let us find your <br /><span className='forever'>Forever Food.</span></h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus numquam ea!</p>
                    <div className="sec1Btns">
                        <a href="#"><button className='searchNow'>Search Now</button></a>
                        <a href="#"><button className='knowMore'>Know More</button></a>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default MainBody;