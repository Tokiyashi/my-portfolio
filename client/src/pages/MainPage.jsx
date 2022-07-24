import React, {useState} from 'react';
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

    return (
        <main>
            <Header/>
            <div className="blackBackground">
                <div className="intro">
                    <div className="intro__text">
                        <h1> Nikita Rogovskiy </h1>
                        <h3>
                            Frontend-developer, student, creative person
                        </h3>
                        <button>
                            Hire me!
                        </button>
                    </div>
                    <div className="intro__images">
                        <img
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
            <div className="whiteBackground">
                <h1 id="skills"> My skills </h1>
                <Physics/>
            </div>

            <div className="whiteBackground">

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
            <div className="blackBackground">
                <div className="mail">

                </div>
            </div>
        </main>
    );
};

export default MainPage;