import React, { useState, useEffect } from 'react';
import {
  HashRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

//import { HashLink } from 'react-router-hash-link';

// Style sheets
import './Styles/root.css'

// Components
import Navigation from './Components/Partials/Navigation.js';
import Portfolio from './Components/Portfolio.js';
import About from './Components/About.js';
import Experience from './Components/Experience.js';
import Contact from './Components/Contact.js';
import Home from './Components/Home.js';
import Project from './Components/Project.js';

// Assets
import Project1 from './Assets/p1.png';
import Project2 from './Assets/p2.png';
import Project3 from './Assets/p3.png';
import Project4 from './Assets/p4.png';
import Project5 from './Assets/p5.png';
import Project6 from './Assets/p6.png';
import Project7 from './Assets/p7.png';
import Project8 from './Assets/p8.png';
import Project9 from './Assets/p9.png';
import Project10 from './Assets/p10.png';
import useHeight from './useHeight.js';

const App = () => {
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: 'SNAPSHOT ONLINE',
      img: Project1,
      link: 'http://snapshotonline.eu/',
      description: 'Platforma Smile on Line (SOL) vznikla v roce 2018 jako studentský start-up v rámci mezinárodního projektu z programu ERASMUS+ Sense of Light. Cílem fotografické platformy SOL je pomoci začínajícím fotografům k prezentaci svého díla, sdílení zkušeností, vzájemné inspiraci, získání zpětných vazeb k vlastní práci, k navázání vztahů v rámci fotografické komunity a především pak k možnosti získání prvních zakázek ve zvolené fotografické oblasti.'
    },
    {
      id: 2,
      title: 'NAČANČEJME REPUBLIKU',
      img: Project2,
      link: '',
      description: 'Poslední dobou stále častěji čteme články, které se týkají problematiky odpadků, které začínají pokrývat naši krásnou planetu. Nevím jak Vás, ale mě vždy velice zasáhnou a cítím se bezmocně a jsem velice smutná. Nejvíce mě dostaly články o úhynu velryby, uvnitř které nalezli 80kg plastových pytlů a jiného odpadu, o úhynu ostatních zvířat v mořích, i mimo ně, díky našemu odpadu. V neposlední řadě i článek o nepořádku na krásném Mount Everestu, který tam po sobě zanechávají rádoby sportovci! Stav těchto věcí se stále zhoršuje a my jen přihlížíme, jsme smutní a říkáme si: "Co můžu udělat pro tu velrybu? Co můžu udělat pro tu želvu? Co můžu udělat pro Mount Everest" Ne, v těchto případech nemůžeme nic. Před svými domy máme naklizeno, staráme se o své trávníky, stromy, o svoje zvířecí kamarády.'
    },
    {
      id: 3,
      title: 'JITKA-POHLOVA.CZ',
      img: Project3,
      link: 'http://jitkapohlova.eu/',
      description: 'Webová vizitka - Jazykové kurzy Jitka Pohlová.'
    },
    {
      id: 4,
      title: 'MICHELLE MALÁ',
      img: Project4,
      link: 'http://michellemala.cz/',
      description: 'Webové portfolio - FOTO Michelle Malá.'
    },
    {
      id: 5,
      title: 'Výherní aplikace mediFINDER',
      img: Project5,
      link: 'https://www.kr-kralovehradecky.cz/cz/kraj-volene-organy/hackathon/aplikace-302467/',
      description: 'Aplikace mediFinder, pomocí které si uživatel může najít praktického lékaře či zubaře pomocí klíčových slov a dalších specifikací. Uživatel si také může vytvořit vlastní seznam doktorů a zubařů a mít tak všechny informace na jednom místě.'
    },
    {
      id: 6,
      title: 'ČUPK',
      img: Project6,
      link: '',
      description: 'Webové stránky pro školu baristů.'
    },
    {
      id: 7,
      title: 'BAYLEE',
      img: Project7,
      link: '',
      description: 'Webové stránky vlastního brandu Baylee.'
    },
    {
      id: 8,
      title: 'FOXLY',
      img: Project8,
      link: '',
      description: 'Webové stránky vlastního brandu Foxly.'
    },
    {
      id: 9,
      title: 'DIGI-MEDIA.CZ - magazín',
      img: Project9,
      link: '',
      description: 'Webový magazín - personální projekt.'
    },
    {
      id: 10,
      title: 'FITV',
      img: Project10,
      link: '',
      description: 'Webové stránky fitness centra.'
    }
  ]);

  // count height on mount
  useHeight();

  const handleScroll = () => {
    let scrollTop = document.querySelector('.container').scrollTop;
    const profileHeight = document.querySelector('.profile').offsetHeight;
    const nav = document.querySelector('.nav');

    if (scrollTop > profileHeight) {
      nav.style.cssText = 'transform: translateY(-' + profileHeight + 'px); position: fixed;';
    } else if (scrollTop < (profileHeight / 3)){
      nav.style.cssText = 'transform: none; position: absolute; transition: .5s all ease-in-out .075s;';
    }

  }

  return (
    <div className="app container" onScroll={ handleScroll }>
        <Router>            
            <Navigation />
            <Switch>
                <Route path="/" exact render={ () => <Home /> } />
                <Route path="/ja" exact render={ () => <About /> } />
                <Route path="/portfolio" exact render={ () => <Portfolio projects={ projects } /> } />
                <Route path="/co-umim" exact render={ () => <Experience /> } />
                <Route path="/kontakt" exact render={ () => <Contact /> } />
                { projects.map(project => (
                  <Route path={ "/project/" + project.id } exact
                    render={ () => <Project project={ project } /> }
                    key = { project.id } />
                )) }
            </Switch>
        </Router>
    </div>
  );
}

export default App;
