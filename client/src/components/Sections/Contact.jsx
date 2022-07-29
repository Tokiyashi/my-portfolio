import React from 'react';
import telegramIcon from './img/icons8-telegram-app.svg'
import githubIcon from './img/icons8-github-30.png'
import vkIcon from './img/icons8-vk-com-48.png'

const Contact = ({reference}) => {
    return (
        <div ref={reference} className="blackBackground">
            <div className="contact">
                <h1> Contact Me </h1>
                <div className="mail">
                    <h2> You can write me on my e-mail nrogovskiyn@gmail.com </h2>
                </div>
                <div className="contact__socials">
                    <h2>
                        Also you can find me in social media.
                    </h2>
                    <div className="contact__socials__icons">
                        <a
                            href="https://t.me/tokiyashi"
                        >
                            <img
                                src={telegramIcon}
                                alt="telegram"
                                width="50px"
                            />
                        </a>

                        <a
                            href="https://github.com/Tokiyashi"
                        >
                            <img
                                src={githubIcon}
                                alt="github"
                                width="50px"
                            />
                        </a>
                        <a
                            href="https://vk.com/nikita_kartowka"
                        >
                            <img
                                src={vkIcon}
                                alt="vk"
                                width="50px"
                            />
                        </a>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Contact;