import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faInstagram, faCodepen, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons' 

// Style sheets
import '../Styles/portfolio.css'

// Components
import ComponentHeader from '../Components/Partials/ComponentHeader.js';

// Hooks
import useHeight from '../useHeight.js';

const Portfolio = (props) => {
    const [header, setHeader] = useState({
        title: 'PORTFOLIO',
        description: 'Za tu dobu, co se věnuji designu a programování jsem vytvořil kupu věcí, tohle je pár z nich. Do svého portfolio jsem kromě zakázkových projektů zahrnul i osobní projekty.',
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

    // count height on mount
    useHeight();

    return (
        <div className="span-col-2 portfolio page">
            <ComponentHeader headerProps = { header } />

            <div className="component-page">
                <div className="portfolio-content">
                    { props.projects.map(project => (
                    <div className="project" key={ project.id }>
                        <Link to={ '/project/' + project.id }>
                            <img src={project.img} alt={project.title} />
                        </Link>
                    </div>
                    )) }
                </div>
            </div>
        </div>
    )
}

export default Portfolio;