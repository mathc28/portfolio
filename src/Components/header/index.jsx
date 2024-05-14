import React, { useState } from 'react';
import logo from "../../assets/logo-perso/logo mc gris .png";
import hamburger from "../../assets/menu hamburger/bars-solid.svg"
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
                <img src={hamburger} className="hamburger" alt="logo de Mathieu C" />
            </button>
            <div className={`navigation ${menuOpen ? 'open' : ''}`}>
                <ul className='nav'> 
                    <li>
                        <a href="#presentation" className='liens' id='li'>{t('description')}</a>
                    </li>
                    <li>
                        <a href="#competences" className='liens' id='li'>{t('competences')}</a>
                    </li>
                    <li>
                        <a href="#projets" className='liens' id='li'> {t('projets')} </a>
                    </li>
                    <li>
                        <a href="#temoignages" className='liens' id='li'> {t('temoignages')} </a>
                    </li>
                    <li>
                        <a href="#contact" className='liens' id='li'> {t('contact')} </a>
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
