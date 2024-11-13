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
                    <p className='copylarge'> Copyright 2024 &copy; {t('footerright')}</p>
                </div>
                <div className='follow'>
                    <h2> {t('footerfollow')}</h2>
                    <div className='socials'>
                        <a href="https://www.linkedin.com/in/mathieu-cocu-b159625b/" target="_blank">
                            <img src={Linkedin} className="social" alt="logo de LinkedIn" />
                        </a>
                        <a href="https://github.com/mathc28" target="_blank">
                            <img src={Github} className="social" alt="logo de Github" />
                        </a> 
                    </div>
                </div>
                <p className='copysmall'> Copyright 2024 &copy; {t('footerright')}</p>
            </div> 
        </div>
    );
};

export default Index;