import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt, faBook, faAward, faCalendar, faCalendarDay, faCalendarCheck, faCalendarTimes } from '@fortawesome/free-solid-svg-icons'
import { faFacebookSquare, faInstagram, faCodepen, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons' 

// Style sheets
import '../Styles/about.css'

// Components
import ComponentHeader from '../Components/Partials/ComponentHeader.js';

// Hooks
import useHeight from '../useHeight.js';

const About = () => {
    const [header, setHeader] = useState({
        title: 'O MNĚ',
        description: 'Denně se věnuji programování a navrhování webů a aplikací, protože mě to jedoduše baví a rád se v mém oboru rozvíjím. Kromě kódování a programování se zajímám o návrh kvalitních uživatelských rozhraní, která jsou v tomto oboru nezbytná.',
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

    const [achievements, setAchievements] = useState([
        {
            title: 'Hackathon Hradec Králove',
            date: '2019',
            description: 'První místo naší skupiny v prvním ročníku soutěže k vývoji webových aplikací nad otevřenými daty Královéhradeckého kraje. Soutěž byla určena pro skupiny programátorů. Konkrétně naše skupina se skládala ze dvou členů - já(front end) a kolega(back end).'
        },
        {
            title: 'Zahraniční kurz Fit for E-commerce',
            date: '2018',
            description: 'V rámci programu Evropské unie Erasmus, jsem se spolu s dalšími devíti vybranými studenty naší školy zúčastnil mezinárodního kurzu v oblasti e-commerce a získal tak certifikát.'
        },
        {
            title: 'Soutěž v programování',
            date: '2018',
            description: 'Druhé místo v soutěži v programování webových aplikací.'
        }
    ]);

    const [education, setEducation] = useState([
        {
            title: 'Univerzita Tomáše Bati',
            date: '2019 - ?',
            description: 'Studijní progam - Softwarové inženýrství (Bc.)'
        },
        {
            title: 'Střední průmyslová škola elektrotechniky a informačních technologií Dobruška',
            date: '2015 - 2019',
            description: 'Během studia na této škole jsem se dostal právě k tomuto oboru a jsem za to opravdu rád. V roce 2019 jsem školu úspěšně zakončil maturitní zkouškou.'
        }
    ]);

    // count height on mount
    useHeight();

    return (
        <div className="span-col-2 about page">
            <ComponentHeader headerProps = { header } />

            <div className="component-page">
                <div className="section">
                    <h2 className="section-title"><FontAwesomeIcon icon={ faAward } style={{marginRight: '5px'}} />ÚSPĚCHY</h2>
                    { achievements.map(achievement => (
                        <div className="achievement" key={ achievement.title }>
                            <b>{ achievement.title }</b>
                            <p><FontAwesomeIcon icon={ faCalendarAlt } style={{marginRight: '5px'}} />{ achievement.date }</p>
                            <p>{ achievement.description }</p>
                        </div>
                    )) }
                </div>

                <div className="section">
                    <h2 className="section-title"><FontAwesomeIcon icon={ faBook } style={{marginRight: '5px'}} />VZDĚLÁNÍ</h2>
                    { education.map(educationElement => (
                        <div className="achievement" key={ educationElement.title }>
                            <b>{ educationElement.title }</b>
                            <p><FontAwesomeIcon icon={ faCalendarAlt } style={{marginRight: '5px'}} />{ educationElement.date }</p>
                            <p>{ educationElement.description }</p>
                        </div>
                    )) }
                </div>
            </div>
        </div>
    )
}

export default About;