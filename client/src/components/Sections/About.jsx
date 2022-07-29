import React from 'react';

const About = ({reference}) => {
    return (
        <div ref={reference} className="whiteBackground">
            <div className="about">

                <h1> {"<" + "h1" + ">"}About {"<" + "h1" + "/" + ">"} </h1>
                <div className="about__paragraphs">
                    <p> Hi. I am Nikita. I'm trainee front-end developer full of enthusiasm and courage. At the moment I'm in my third year at Belgorod State University </p>
                    <br/>
                    <p> I like developing responsive and accessible web-apps using React and JavaScript/TypeScript. For now I don't have any commercial experience, but I really enjoy what I do. </p>
                </div>
            </div>
            <img
            />
        </div>
    );
};

export default About;