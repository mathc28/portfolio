import React from 'react';
import Logo from "../../assets/logo mc gris .png";
import "./style.scss";
import Linkedin from "../../assets/pngegg.png";
import Github from "../../assets/pngwing.com.png";

const index = () => {
    return (
        <div className='footer'>
            <div className='footer-info'>
                <div className='logoandaddress'>
                    <img src={Logo}  className="logof" alt="logo de mathieu c" />
                    Lyon, France
                </div>
                <div className="footer__addr">
                    <h2>Contact</h2>
                    <address>
                        <a className="footer__btn" href="mailto:example@gmail.com">Email Us</a>
                    </address>
                </div>
                <div className='follow'>
                    <h2>Suivez-moi !</h2>
                    <div className='socials'>
                        <img src={Linkedin} className="social" alt="logo de LinkedIn" />
                        <img src={Github} className="social" alt="logo de Github" />
                    </div>
                </div>
            </div>
            <div className="legal">
                <p> Copyright 2024 &copy;.Tous droits réservés.</p>
            </div>
        </div>
    );
};

export default index;