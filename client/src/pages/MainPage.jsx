import React, {useState} from 'react';
import aaa from './IM2G_2484.jpg'
import './mainPage.css'
import reactIcon from './React-icon.svg.png'
import htmlIcon from './919827.png'
import Header from "../components/Header";

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
            <div className="skills">
                <h3> My skills: </h3>

               {/* <Engine options={{}}>
                    <RenderClones
                        style={{margin: "auto"}}
                        enableMouse
                        options={{
                            width: 1200,
                            height: 400,
                            background: "transparent",
                            wireframeBackground: "transparent"
                        }}
                    >
                        <Walls x={0} y={0} width={4000} height={400} wallWidth={25} />
                        <Circle
                            clone
                            x={500}
                            y={100}
                            radius={80}

                        />
                        <Constraint>
                            <Circle clone x={100} y={100} radius={50} />
                            <Rectangle clone x={300} y={100} width={100} height={100} />
                        </Constraint>
                    </RenderClones>
                </Engine>*/}
            </div>
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