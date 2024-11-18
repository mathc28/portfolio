import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Minigear from "../../assets/testimonials-gears/petit-gear-solid.svg";
import Biggear from "../../assets/testimonials-gears/gros-gear-solid.svg";
import AOS from "aos";
import "aos/dist/aos.css";
import "./styles.scss";

const Index = () => {
    const { t } = useTranslation();

      // Initialisation d'AOS
    useEffect(() => {
        AOS.init({
            duration: 1000, // Durée de l'animation
            once: false, 
        });
    }, []);

    return (
        <div className='container-témoignages' id="temoignages" data-aos="fade-up">
            <h2 className='section-comp-title'>{t('temoigtitre')}</h2>
            <div className="animation">
                <img src={Minigear} alt="ecrou gris de gauche"  className="one spin-one"/>
                <img src={Biggear} alt="ecrou jaune"  className="two spin-two"/>
                <img src={Minigear} alt="ecrou gris de droite"  className="three spin-one"/>
            </div>
            <p className="newlearn"> {t('txttem')}</p>
        </div>
        
    );
};

export default Index;