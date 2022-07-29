import React from 'react';
import Physics from "../logic/Physics/Physics";

const Skills = ({reference}) => {
    return (
        <div ref={reference} className="blackBackground" >
            <Physics />
            <h2> (Click anywhere inside the box) </h2>
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

                </div>
                <div className="skills-column">
                    <h2>
                        -HTML, CSS
                    </h2>
                    <h2>
                        -TypeScript
                    </h2>
                    <h2>
                        -Tailwind, Bootstrap
                    </h2>

                </div>
                <div className="skills-column">
                    <h2>
                        -SASS
                    </h2>
                    <h2>
                        -GitHub
                    </h2>
                    <h2>
                        -English (B2)
                    </h2>
                </div>
            </div>
        </div>
    );
};

export default Skills;