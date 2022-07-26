import React, {useState} from 'react';
import './Header.css'

const Header = ({references}) => {

    const [selectedSection, setSelectedSection] = useState("home")
    return (
        <div className="header">
           <nav>
               <ol>
                   <li className={(selectedSection==="home")?"selected": ""} onClick={()=> {
                       references.home.current.scrollIntoView();
                       setSelectedSection("home")
                   }}>
                       Home
                   </li>
                   <li className={(selectedSection==="about")?"selected": ""} onClick={()=> {
                       references.about.current.scrollIntoView();
                       setSelectedSection("about")
                   }} >
                       About
                   </li>
                   <li className={(selectedSection==="skills")?"selected": ""} onClick={()=> {
                       references.skills.current.scrollIntoView();
                       setSelectedSection("skills")
                   }} >
                       Skills
                   </li>
                   <li className={(selectedSection==="cases")?"selected": ""} onClick={()=> {
                       references.cases.current.scrollIntoView();
                       setSelectedSection("cases")
                   }} >
                        Case Studies
                   </li>
                   <li className={(selectedSection==="feedback")?"selected": ""} onClick={()=> {
                       references.feedback.current.scrollIntoView();
                       setSelectedSection("feedback")
                   }}>
                       Feedback
                   </li>
               </ol>
           </nav>
        </div>
    );
};

export default Header;