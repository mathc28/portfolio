import React from 'react';
import logo from "../../assets/logo mc gris .png";
import { useTranslation } from 'react-i18next';
import "./style.scss";

const lngs = {
    en: { nativeName: 'English' },
    fr: { nativeName: 'Francais' }
  };

const headercopy = () => {
    const { t,i18n } = useTranslation();
    return (
        <div className='header'>
            <img src={logo} className="logo" alt="logo de Mathieu C" />
            <nav className='navigation'>
                <ul className='nav'> 
                    <li>'
                        <a href="#presentation" className='liens' id='li' >{t('description')}</a>
                    </li>
                    <li>
                        <a href="#competences" className='liens' id='li' > {t('competences')}</a>
                    </li>
                    <li>
                        <a href="#projets" className='liens' id='li' >{t('projets')}</a>
                    </li>
                    <li>
                        <a href="#temoignages" className='liens' id='li' >{t('temoignages')}</a>
                    </li>
                    <li>
                        <a href="#contact" className='liens' id='li'>{t('contact')}</a>
                    </li>
                </ul>
            </nav>
            <div>
                <button className='switchlanguage'
                    onClick={() => {
                        if (i18n.resolvedLanguage === 'fr') {
                            i18n.changeLanguage('en');
                        } else {
                            i18n.changeLanguage('fr');
                        }
                    }}>
                    {i18n.resolvedLanguage === 'fr' ? 'English' : 'Français'}
                </button>
            </div>
        </div>
    );
};

export default headercopy;