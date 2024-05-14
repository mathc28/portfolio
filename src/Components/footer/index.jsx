import React from 'react';
import Logo from "../../assets/logo-perso/logo mc gris .png";
import "./style.scss";
import Linkedin from "../../assets/logo-techno/pngegg.png";
import Github from "../../assets/logo-techno/github-logo.png";
import { useTranslation } from 'react-i18next';


const Index = () => {
    const { t } = useTranslation();

    return (
        <div className='footer'>
            <div className='footer-info'>
                <div className='logoandaddress'>
                    <a href="">
                        <img src={Logo}  className="logof" alt="logo de mathieu c" />
                    </a>
                    Lyon, France
                </div>
                <div className="footer__addr">
                    <h2>Contact</h2>
                    <address>
                        <a className="footer__btn" href="mailto:example@gmail.com"> {t('footerbtn')} </a>
                    </address>
                    <p className='copylarge'> Copyright 2024 &copy; {t('footerright')}</p>
                </div>
                <div className='follow'>
                    <h2> {t('footerfollow')}</h2>
                    <div className='socials'>
                        <img src={Linkedin} className="social" alt="logo de LinkedIn" />
                        <img src={Github} className="social" alt="logo de Github" />
                    </div>
                </div>
                <p className='copysmall'> Copyright 2024 &copy; {t('footerright')}</p>
            </div> 
        </div>
    );
};

export default Index;