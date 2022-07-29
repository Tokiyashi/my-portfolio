import React, {useRef, useState} from 'react';
import './mainPage.css'
import Header from "../components/UI/Header";
import Intro from "../components/Sections/Intro";
import About from "../components/Sections/About";
import Skills from "../components/Sections/Skills";
import Cases from "../components/Sections/Cases";
import Contact from "../components/Sections/Contact";
const MainPage = () => {

    const [showIcons, setShowIcons] = useState(false);

    const skills = useRef(null);
    const about = useRef(null);
    const cases  = useRef(null);
    const contact  = useRef(null);
    const home  = useRef(null);

    const hireMe = () => {
        contact.current.scrollIntoView();
    }

    return (
        <main>
            <Header references={{home: home, about: about, cases: cases, contact: contact, skills: skills}}/>
            <Intro hireMe={hireMe} reference={home} />
            <About reference={about}/>
            <Skills reference={skills}/>
            <Cases reference={cases}/>
            <Contact reference={contact}/>
        </main>
    );
};

export default MainPage;