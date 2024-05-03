import Body from "../Component/Body";
import Footer from "../Component/Footer";
import Header from "../Component/Header";
import './LandingScreen.css';

const LandingScreen =()=>{
    return(
        <>
        <div className="container">
        <Header />
        <Body />
        <Footer />
        </div>
        </>
    )
}

export default LandingScreen;