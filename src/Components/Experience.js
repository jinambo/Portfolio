import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faInstagram, faCodepen, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons' 

// Components
import ComponentHeader from '../Components/Partials/ComponentHeader.js';

// Hooks
import useHeight from '../useHeight.js';

const Experience = () => {
    const [header, setHeader] = useState({
        title: 'ZKUŠENOSTI',
        description: 'Vzdělání je v tomto moderním oboru základ, protože technologie jdou neustále kupředu. Téměr každý den se, ať už ve škole, či ve volném čase, věnuji designu a nebo programování a snažím se rozvíjet svoje schopnosti. Moje knihovna se skládá převážně z odborné literatury.',
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

    const [languages, setLanguages] = useState([
        'CSS3 (SASS, LESS)',
        'HTML5',
        'JavaScript (ES6) / TypeScript',
        'PHP',
        'SQL',
        'C',
        'C#'
    ]);

    const [frameworks, setFrameworks] = useState([
        'jQuery',
        'Bootstrap',
        'Vue.js',
        'React',
        'Animate.js',
        '.NET/.NET CORE',
        'Xamarin',
        'a další ...'
    ]);

    const [multimedia, setMultimedia] = useState([
        'ADOBE Photoshop',
        'ADOBE Experience Design',
        'ADOBE Premiere',
        'ADOBE Lightroom',
        'Blender'
    ]);

    // count height on mount
    useHeight();

    return (
        <div className="span-col-2 experience page">
            <ComponentHeader headerProps = { header } />

            <div className="component-page">
                <div className="experience-block">
                    <b>Jazyky</b>
                    <ul>
                        { languages.map(language => (
                            <li key={ language }>{ language }</li>
                        )) }
                    </ul>
                </div>

                <br />

                <div className="experience-block">
                    <b>Frameworky a knihovny</b>
                    <ul>
                        { frameworks.map(framework => (
                            <li key={ framework }>{ framework }</li>
                        )) }
                    </ul>
                </div>

                <br />

                <div className="experience-block">
                    <b>Multimédia</b>
                    <ul>
                        { multimedia.map(multimediaElement => (
                            <li key={ multimediaElement }>{ multimediaElement }</li>
                        )) }
                    </ul>
                </div>   
            </div>      
        </div>
    )
}

export default Experience;