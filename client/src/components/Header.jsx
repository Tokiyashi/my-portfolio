import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className="header">
           <nav>
               <ol>
                   <li>
                       Home
                   </li>
                   <li>
                        Case Studies
                   </li>
                   <li>
                       Feedback
                   </li>
               </ol>
           </nav>
        </div>
    );
};

export default Header;