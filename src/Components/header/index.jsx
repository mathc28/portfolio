import React, { useState } from 'react';
import { Link } from 'react-scroll';
import logo from "../../assets/logo-perso/logo mc gris .png";
import hamburger from "../../assets/menu-hamburger/bars-solid.svg";
import { useTranslation } from 'react-i18next';
import "./style.scss";

const Header = () => {
    const { t, i18n } = useTranslation();
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className={`header ${menuOpen ? 'open' : ''}`}>
            <img src={logo} className="logo" alt="logo de Mathieu C" />
            <button className="menu-toggle" onClick={handleMenuToggle}>
                <img src={hamburger} className="hamburger" alt="menu toggle" />
            </button>
            <div className={`navigation ${menuOpen ? 'open' : ''}`}>
                <ul className='nav'> 
                    <li>
                        <Link to="presentation" href="#presentation" spy={true} smooth={true} duration={500} className='liens'>
                            {t('description')}
                        </Link>
                    </li>
                    <li>
                        <Link to="competences" href="#competences" spy={true} smooth={true} duration={500} offset={-20} className='liens'>
                            {t('competences')}
                        </Link>
                    </li>
                    <li>
                        <Link to="projets" href="#projets" spy={true} smooth={true} duration={500} offset={-50} className='liens'>
                            {t('projets')}
                        </Link>
                    </li>
                    <li>
                        <Link to="temoignages" href="#temoignages" spy={true} smooth={true} duration={500} offset={-20} className='liens'>
                            {t('temoignages')}
                        </Link>
                    </li>
                    <li>
                        <Link to="contact" href="#contact" spy={true} smooth={true} duration={500} offset={-20} className='liens'>
                            {t('contact')}
                        </Link>
                    </li>
                </ul>
                <button
                className='switchlanguage'
                onClick={() => {
                    if (i18n.resolvedLanguage === 'fr') {
                        i18n.changeLanguage('en');
                    } else {
                        i18n.changeLanguage('fr');
                    }
                }}>
                {i18n.resolvedLanguage === 'fr' ? '🇬🇧 / 🇫🇷' : '🇫🇷 / 🇬🇧'}
            </button>
            </div>          
        </div>
    );
};

export default Header;
