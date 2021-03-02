import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faInstagram, faCodepen, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons' 

// Style sheets
import '../Styles/portfolio.css'

// Components
import ComponentHeader from '../Components/Partials/ComponentHeader.js';
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

// Hooks
import useHeight from '../useHeight.js';

const Project = (props) => {
    const [header, setHeader] = useState({
        title: props.project.title,
        description: props.project.description,
        socialSites: [
            {
                link: 'https://www.facebook.com/jinambo.srytr',
                icon: faFacebookSquare
            },
            {
                link: 'https://www.instagram.com/jirsry/',
                icon: faInstagram
            },
            {
                link: 'https://codepen.io/jinambo/',
                icon: faCodepen
            },
            {
                link: '#',
                icon: faTwitter
            },
            {
                link: 'https://www.linkedin.com/in/jiri-srytr/',
                icon: faLinkedin
            }
        ]
    });

    useEffect(() => {
        const page = document.querySelector('.span-col-2');
        page.style.overflow = 'scroll';
    }, [])

    // count height on mount
    useHeight();

    return (
        <div className="span-col-2 portfolio page">
            <ComponentHeader headerProps = { header } return={ true } />
            
            <div class="project-content">
                <img class="bigPic" src={ props.project.img }/>
                { props.project.link !== '' ? <a class="linkBtn" href={ props.project.link }>Přejít na stránku <FontAwesomeIcon icon={ faAngleRight } /></a> : ''}
            </div>

            <div className="component-page" style={{display: 'none'}}></div>
        </div>
    )
}

export default Project;