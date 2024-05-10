import React from 'react';
import { useTranslation } from 'react-i18next';
import Minigear from "../../assets/petit-gear-solid.svg";
import Biggear from "../../assets/gros-gear-solid.svg";



import "./styles.scss";

const Index = () => {
    const { t } = useTranslation();
    return (
        <div className='container-témoignages' id="temoignages">
            <h2 className='section-title'>{t('temoigtitre')}</h2>
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