import React from 'react';
import me from './img/IM2G_2484.jpg'

const Cases = ({reference}) => {
    return (
        <div ref={reference} className="whiteBackground">
            <div className="cases">
                <h3> Case Studies: </h3>
                <div className="case">
                    <div className="case__workInfo">
                        <h4> Cryptocurrency App </h4>
                        <p> In this app you can see all popular crypto-coins. You can sort them and search anything you want. This project uses CoinGecko API.  </p>
                    </div>
                    <img
                        src={me}
                        className="case__img"
                    />
                </div>

                <div id="weather-app" className="case">
                    <div className="case__workInfo">
                        <h4> Weather App </h4>
                        <p> Very simple site that shows some information about weather in selected city. Also you will find a forecast for the next days. </p>
                    </div>
                    <img
                        className="case__img"
                    />
                </div>
            </div>
        </div>
    );
};

export default Cases;