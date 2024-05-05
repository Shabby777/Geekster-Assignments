import './Imagetext.css';
import myImage from '../assets/home.avif'
import { Button } from './Button';


function Imagetext(){
    return(
        <>
        <div id="home-wrapper">
{/* <h1>Nextpage</h1> */}
<img src={myImage} alt="Home" />
<div className='article'>
    <div id="article-text">
    <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, debitis.</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, molestiae! Quidem est esse numquam odio deleniti, beatae, magni dolores provident quaerat totam eos, aperiam architecto eius quis quibusdam fugiat dicta.</p>
    <Button borderRadius={"8px"} backgroudKaColor={"#4F46E5"} fontColor={"#FFFFFF"}>Get in Touch</Button>
    </div>
    </div>
</div>
        </>
    )
}

export default Imagetext;