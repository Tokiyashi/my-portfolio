import React, {useRef, useState} from 'react';
import aaa from './IM2G_2484.jpg'
import './mainPage.css'
import reactIcon from '../components/Physics/React-icon.png'
import htmlIcon from './919827.png'
import Header from "../components/Header";
import Physics from "../components/Physics/Physics";
const MainPage = () => {

    const [showIcons, setShowIcons] = useState(false);
    const handleShowIcons = () => {
    }

    const skills = useRef(null);
    const about = useRef(null);
    const cases  = useRef(null);
    const home  = useRef(null);
    const feedback  = useRef(null);

    return (
        <main>
            <Header references={{
                home: home,
                about: about,
                cases: cases,
                feedback: feedback,
                skills: skills
            }}/>
                <div ref={home} className="blackBackground">
                    <div className="intro">
                        <div className="intro__text">
                            <h1> Nikita Rogovskiy </h1>
                            <h3>
                                Frontend-developer, student, creative person
                            </h3>
                            <button onClick={()=> feedback.current.scrollIntoView()}>
                                Hire me!
                            </button>
                        </div>
                        <div className="intro__images">
                            <img
                                alt="intro"
                                onMouseEnter={()=> setShowIcons(true)}
                                className="myImage"
                                style={{borderRadius: "50%"}}
                                width="500px"
                                src={aaa}
                                onMouseLeave={()=> setShowIcons(false)}
                            />
                            {

                                /*<Transition in={showIcons} timeout={500}>
                                    { state =>  <img
                                        alt="iconReact"
                                        className={`skillIcon ${state}`}
                                        width="100px"
                                        src={reactIcon}
                                    />}
                                </Transition>*/
                            }
                        </div>
                    </div>
                </div>
            <div ref={about} className="whiteBackground">
                //react transition on init section
                //add floating html and coding symbols: [text], //text
            </div>
                <div ref={skills} className="blackBackground" >
                    <Physics />
                    <h1  id="skills"> My skills: </h1>
                    <div className="skills-list">
                        <div className="skills-column">
                            <h2>
                                -JavaScript
                            </h2>
                            <h2>
                                -React
                            </h2>
                            <h2>
                                -Redux
                            </h2>
                            <h2>
                                -HTML, CSS
                            </h2>
                        </div>
                        <div className="skills-column">
                            <h2>
                                -TypeScript
                            </h2>
                            <h2>
                                -Tailwind, Bootstrap
                            </h2>
                            <h2>
                                -English (B2)
                            </h2>
                            <h2>
                                -GitHub
                            </h2>
                        </div>
                    </div>
                </div>

                <div ref={cases} className="whiteBackground">
                    <div className="cases">
                        <h3> Case Studies: </h3>
                        <div className="case">
                            <div className="case__workInfo">
                                <h4> pososal </h4>
                                <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis dolor eveniet fugit iste, iure natus nemo repellat. Animi dolore error exercitationem fugit minus nemo quasi repellat sint vero, voluptas! Perspiciatis. </p>
                            </div>
                            <img
                                className="case__img"
                                src={aaa}
                            />
                        </div>

                        <div className="case">
                            <div className="case__workInfo">
                                <h4> pososal </h4>
                                <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis dolor eveniet fugit iste, iure natus nemo repellat. Animi dolore error exercitationem fugit minus nemo quasi repellat sint vero, voluptas! Perspiciatis. </p>
                            </div>
                            <img
                                className="case__img"
                                src={aaa}
                            />
                        </div>
                    </div>

                </div>
                <div ref={feedback} className="blackBackground">
                    <div className="mail">

                    </div>
                </div>
        </main>
    );
};

export default MainPage;