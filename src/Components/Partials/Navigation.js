import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faInfoCircle, faBoxOpen, faBrain, faUser, faBlog, faTimes, faBaby, faBars } from '@fortawesome/free-solid-svg-icons'

// Assets
import Srytr from '../../Assets/srytr.jpeg';
import SrytrBlurred from '../../Assets/srytr_blurred.jpg';


const Navigation = () => {
    // UseState Hooks
    const [pages, setPages] = useState([
        {
            title: 'Domů',
            icon: faHome,
            path: '/'
        },
        {
            title: 'O mně',
            icon: faInfoCircle,
            path: '/ja'
        },
        {
            title: 'Portfolio',
            icon: faBoxOpen,
            path: '/portfolio'
        },
        {
            title: 'Zkušenosti',
            icon: faBrain,
            path: '/co-umim'
        },
        {
            title: 'Kontakt',
            icon: faUser,
            path: '/kontakt'
        },
        /*
        {
            title: 'Blog',
            icon: faBlog,
            path: '/blog.html'
        },
        */
    ]);

    const [phoneIcon, setPhoneIcon] = useState(faBars);
    const [dropToggle, setDropToggle] = useState(false);

    const [activePath, setActivePath] = useState('/ja');

    const dropDown = (e) => {
        e.preventDefault();

        let nav = document.querySelector('.nav-content-select');
        setDropToggle(!dropToggle);

        if (dropToggle == false) {
            nav.style.display = "block";
            setTimeout(() => {
                nav.style.opacity = 1;
                nav.style.height = "auto";
            }, 150);
            setPhoneIcon(faTimes);
        } else {
            nav.style.opacity = 0;
            nav.style.height = 0;
            setTimeout(() => {
                nav.style.display = "none";
            }, 150);
            setPhoneIcon(faBars);
        }
    }

    const handleRoute = path => {
        let nav = document.querySelector('.nav-content-select');

        setActivePath(path);
        setDropToggle(!dropToggle);

        if (dropToggle == false) {
            nav.style.display = "block";
            setTimeout(() => {
                nav.style.opacity = 1;
                nav.style.height = "auto";
            }, 150);
            setPhoneIcon(faTimes);
        } else {
            nav.style.opacity = 0;
            nav.style.height = 0;
            setTimeout(() => {
                nav.style.display = "none";
            }, 150);
            setPhoneIcon(faBars);
        }
    }

    return (
        <div className="nav">
            <div className="profile" style={{
                    backgroundImage: 'url(' + SrytrBlurred + ')',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover'
                }}>
                <img src={ Srytr } alt="Jiří Šrytr" />
            </div>
            <div className="nav-content">
                <div className="nav-content-select">
                    {
                        pages.map(page => (
                            <Link to={ page.path }
                                key={ page.path }
                                className={ page.path === activePath ? 'active-card' : 'card' }
                                onClick={ page.path === '/' ? (e) => handleRoute('/ja') : (e) => handleRoute(page.path) }>
                                { page.title }
                                <FontAwesomeIcon icon={ page.icon } />
                            </Link>
                        ))
                    }                
                </div>
                <div className="phone-nav">
                    <a href="#" onClick={ e => dropDown(e) }><FontAwesomeIcon icon={ phoneIcon } /></a>
                </div>
            </div>
        </div>
    )
}

export default Navigation;