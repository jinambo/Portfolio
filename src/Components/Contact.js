import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faInstagram, faCodepen, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons' 

// Components
import ComponentHeader from '../Components/Partials/ComponentHeader.js';
import { faPhoneAlt, faEnvelope, faUser, faMoneyBill, faMoneyBillWave, faHandsHelping } from '@fortawesome/free-solid-svg-icons';

// Hooks
import useHeight from '../useHeight.js';

// Firebase DB
import { firebase } from '../Firebase.js';

const Contact = () => {
    const [header, setHeader] = useState({
        title: 'KONTAKT',
        description: 'Pokud potřebujete webovky, aplikaci, design nebo chcete spolupracovat, neváhejte mě kontaktovat. Rád s vámi proberu vaše požadavky. 😊',
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

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmitForm = (e) => {
        e.preventDefault();

        firebase.database().ref('contacts')
        .push({
            name: name,
            email: email,
            message: message,
        })
        .then(() => {
            const alertMessage = document.querySelector('.contact-section-message');
            alertMessage.classList.add('contact-section-message-active');

            setTimeout(() => {
                alertMessage.classList.remove('contact-section-message-active');
            }, 2500);

            setName('');
            setEmail('');
            setMessage('');
        })
    }

    // count height on mount
    useHeight();

    return (
        <div className="span-col-2 contact page contact-page">
            <ComponentHeader headerProps = { header } />

            <div className="contact-section component-page">
                <div className="contact-section-message">
                    <p>Zpráva byla úspěšně odeslána!</p>
                </div>
                <h4>Neváhejte mě kontaktovat:</h4>
                <form className="contact-section-form" onSubmit={ (e) => handleSubmitForm(e) }>
                    <input type="text"
                        placeholder="Jméno a příjmení"
                        value={ name }
                        onChange={ (e) => setName(e.target.value) }/>
                    <input type="email"
                        placeholder="* E-mail"
                        required
                        value={ email }
                        onChange={ (e) => setEmail(e.target.value) } />
                    <textarea name="message"
                        placeholder="* Co máte na srdci?" cols="30" rows="10"
                        required
                        value={ message }
                        onChange={ (e) => setMessage(e.target.value) }></textarea>
                    <button type="submit">Spojme síly <FontAwesomeIcon icon={ faHandsHelping } /></button>
                </form>
                <div className="contact-section-text">
                    <div className="text-col">
                        <p><FontAwesomeIcon icon={ faPhoneAlt } /> +420 731 711 858</p>
                        <p><FontAwesomeIcon icon={ faEnvelope } /> jiri.srytr.webdev@gmail.com</p>  
                    </div>
                    <div className="text-col">
                        <p>Jiří Šrytr</p>
                        <p><b>IČ:</b> 08272999</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;