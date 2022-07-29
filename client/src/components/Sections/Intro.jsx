import React, {useRef} from 'react';
import aaa from "./img/IM2G_2484.jpg";

const Intro = ({reference, hireMe}) => {

    return (
            <div ref={reference} className="blackBackground">
                <div className="intro">
                    <div className="intro__text">
                        <h1> Nikita Rogovskiy </h1>
                        <h3>
                            Frontend-developer, student, creative person
                        </h3>
                        <button onClick={()=> hireMe()}>
                            Hire me!
                        </button>
                    </div>
                    <div className="intro__images">
                        <img
                            alt="intro"
                            className="myImage"
                            style={{borderRadius: "50%"}}
                            width="500px"
                            src={aaa}
                        />
                    </div>
                </div>
            </div>
    );
};

export default Intro;