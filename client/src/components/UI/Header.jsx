import React, {useState} from 'react';
import './Header.css'

const Header = ({references}) => {

    const [selectedSection, setSelectedSection] = useState("home");
    const [isVisible, setIsVisible] = useState(window.innerWidth >= 1100)

    return (
        <>
        <div className="burger">
            <img className="cross" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Hamburger_icon_white.svg/2048px-Hamburger_icon_white.svg.png"
                 alt="burger"
                 onClick={()=> setIsVisible(true)}/>
        </div>
        <div className="header">
           <nav className={isVisible?"visible":"hidden"}>
               <div className="burger">
                   <img onClick={()=> setIsVisible(false)}
                        width="60px"
                        height="60px"
                        src="https://visitnyack.org/wp-content/themes/visit-nyack/assets/images/close.svg"
                   />
               </div>
               <ol>
                   <li  onClick={()=> {
                       references.home.current.scrollIntoView();
                       setSelectedSection("home");
                   }}>
                       Home
                   </li>
                   <li onClick={()=> {
                       references.about.current.scrollIntoView();
                       setSelectedSection("about");
                   }} >
                       About
                   </li>
                   <li  onClick={()=> {
                       references.skills.current.scrollIntoView();
                       setSelectedSection("skills");
                   }} >
                       Skills
                   </li>
                   <li onClick={()=> {
                       references.cases.current.scrollIntoView();
                       setSelectedSection("cases");
                   }} >
                        Case Studies
                   </li>
                   <li  onClick={()=> {
                       references.contact.current.scrollIntoView();
                       setSelectedSection("feedback")
                   }}>
                       Contact
                   </li>
               </ol>
           </nav>
        </div>
        </>
    );
};

export default Header;