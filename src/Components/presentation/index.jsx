import React from 'react';
import Photo from "../../assets/photo mc.jpeg";
import { useTranslation } from 'react-i18next';
import Type from "../machineecrire"
import "./style.scss"

const lngs = {
    en: { nativeName: 'English' },
    fr: { nativeName: 'Francais' }
  };


const Presentation = () => {
    const {t} = useTranslation();
    return (
        <div id="presentation">
            <div className='intro'> 
                <img src={Photo} alt="photo de Mathieu c" className='photo' />
                <div className='textpresentation'>
                    <div className='hi'>{t('pres1')}</div>
                    <div className='name'>MATHIEU COCU</div>
                    <div className='work'><Type/></div>
                    <div className='txt1'>{t('pres3')}</div>
                </div>  
            </div> 
        </div>
    );
};

export default Presentation;