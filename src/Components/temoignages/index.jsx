import React from 'react';
import { useTranslation } from 'react-i18next';
import Minigear from "../../assets/testimonials-gears/petit-gear-solid.svg";
import Biggear from "../../assets/testimonials-gears/gros-gear-solid.svg";



import "./styles.scss";

const Index = () => {
    const { t } = useTranslation();
    return (
        <div className='container-témoignages' id="temoignages">
            <h2 className='section-comp-title'>{t('temoigtitre')}</h2>
            <div className="animation">
                <img src={Minigear} alt=""  className="one spin-one"/>
                <img src={Biggear} alt=""  className="two spin-two"/>
                <img src={Minigear} alt=""  className="three spin-one"/>
            </div>
            <p className="newlearn"> {t('txttem')}</p>
        </div>
        
    );
};

export default Index;