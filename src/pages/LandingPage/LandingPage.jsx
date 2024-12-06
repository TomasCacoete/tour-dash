import './LandingPage.css'

import LogoWhite from "../../assets/logo-white.svg"
import PhoneApp from "../../assets/phone-app.png"

import LogoEmail from "../../assets/email.svg"
import LogoInstagram from "../../assets/instagram.svg"

import placeholder from "../../assets/placeholder.svg"

import Navbar from '../../components/Navbar/Navbar'

export default function LandingPage(){
    return(
        <div className="landing-container">
            <Navbar/>
            <div className="landing">
                <div className="info">
                    <img src={LogoWhite}/>

                    <h1>
                        Ride, Compete, and<br/>
                        Give Back
                    </h1>

                    <h3>
                        JOIN TourDash for flexible cycling<br/>
                        challenges and meaningful impact
                    </h3>

                    <button className="join-button">
                        Join Now
                    </button>
                </div>

                <img src={PhoneApp}/>
            </div>

            <h2 className="features">What we'll have ready for you...</h2>

            <div className="cards">

                <div className="card">
                    <div className="card-title">
                        Card Title
                        <img className="card-icon" src={placeholder}/>
                    </div>
                    <div className="card-description">Description aasasasa sasasas asasas asaa sas a sas as a  aasas asasas</div>
                </div>

                <div className="card">
                    <div className="card-title">
                        Card Title
                        <img className="card-icon" src={placeholder}/>    
                    </div>
                    <div className="card-description">Description aasasasa sasasas asasas asaa sas a sas as a  aasas asasas</div>
                </div>

                <div className="card">
                    <div className="card-title">
                        Card Title
                        <img className="card-icon" src={placeholder}/>
                    </div>
                    <div className="card-description">Description aasasasa sasasas asasas asaa sas a sas as a  aasas asasas</div>
                </div>

            </div>

            <h2>Contacts</h2>

            <div className="contacts-container">

                <div className="contact">
                <a href="/" className="img-container"><img className="contact-image" src={LogoEmail}/></a>
                    <div className="contact-info-container">
                        <div className="contact-info-type">Email</div>
                        <div className="contact-info">emailqq@gmail.com</div>
                    </div>
                </div>

                <div className="contact">
                    <a href="/" className="img-container"><img className="contact-image" src={LogoInstagram}/></a>
                    <div className="contact-info-container">
                        <div className="contact-info-type">Instagram</div>
                        <div className="contact-info">emailqq@gmail.com</div>
                    </div>
                </div>

            </div>


            <div className="copywrite">Copyright © 2024 TourDash</div>
        </div>
    );
};