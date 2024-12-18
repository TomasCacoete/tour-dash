import './LandingPage.css'

import LogoWhite from "../../assets/logo-white.svg"
import PhoneApp from "../../assets/phone-app.png"

import LogoEmail from "../../assets/email.svg"
import LogoInstagram from "../../assets/instagram.svg"

export default function LandingPage({ contactsRef }){
    return(
        <div className="landing-container">
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

                    <button
                        className="join-button"
                        onClick={() => window.location.href = 'https://www.youtube.com/shorts/jtcma4mW_Hw?si=Nfj03BibLtzbNqFe'}
                    >
                        Join Now
                    </button>
                </div>

                <img src={PhoneApp}/>
            </div>

            <h2 className="features">A little teaser...</h2>

            <div className='video-container'>
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/4KdiKJa0RZA"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                ></iframe>
            </div>

            <h2 className="features">Learn in advance how the app will work!</h2>

            <div className='video-container'>
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/jtcma4mW_Hw"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                ></iframe>
            </div>

            <h2 id="contacts" ref={contactsRef}>Contacts</h2>

            <div className="contacts-container">

                <div className="contact">
                <a href="/" className="img-container"><img className="contact-image" src={LogoEmail}/></a>
                    <div className="contact-info-container">
                        <div className="contact-info-type">Email</div>
                        <div className="contact-info">tour_dash@goeschman.com</div>
                    </div>
                </div>

                <div className="contact">
                    <a href="https://www.instagram.com/tour_dash/" className="img-container"><img className="contact-image" src={LogoInstagram}/></a>
                    <div className="contact-info-container">
                        <div className="contact-info-type">Instagram</div>
                        <div className="contact-info">@tour_dash</div>
                    </div>
                </div>

            </div>


            <div className="copywrite">Copyright © 2024 TourDash</div>
        </div>
    );
};