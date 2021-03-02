import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faInstagram, faCodepen, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons' 

// Style sheets
import '../Styles/intro.css';

// Assets
import SrytrBlurred from '../Assets/srytr_blurred.jpg';

const Home = (props) => {
    return (
        <div className="intro" style={{ backgroundImage: 'url(' + SrytrBlurred + ')' }} >
            <div className="intro-box">
                <h1>JIŘÍ ŠRYTR <b className="intro-box-edited">| WEBOVÝ VÝVOJÁŘ & DESIGNÉR</b></h1>

                <Link to="/ja"><button className="intro-btn">VSTOUPIT</button></Link>
            </div>
            <div className="social-media">
                <a href="https://www.facebook.com/jinambo.srytr" target="_blank">
                    <FontAwesomeIcon icon={ faFacebookSquare } />
                </a>
                <a href="https://www.instagram.com/jirsry/" target="_blank">
                    <FontAwesomeIcon icon={ faInstagram } />
                </a>
                <a href="" target="_blank">
                    <FontAwesomeIcon icon={ faTwitter } />
                </a>
                <a href="https://codepen.io/jinambo/" target="_blank">
                    <FontAwesomeIcon icon={ faCodepen } />
                </a>
                <a href="https://www.linkedin.com/in/jiri-srytr/" target="_blank">
                    <FontAwesomeIcon icon={ faLinkedin } />
                </a>
            </div>
            <div className="span-col-2 component-page component-header" style={{display: 'none'}}></div>
        </div>
    )
}

export default Home;