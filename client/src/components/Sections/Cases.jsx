import React from 'react';
import aaa from "./img/IM2G_2484.jpg";

const Cases = ({reference}) => {
    return (
        <div ref={reference} className="whiteBackground">
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
    );
};

export default Cases;