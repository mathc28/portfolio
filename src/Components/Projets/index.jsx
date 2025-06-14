import React, { useState, useEffect } from "react";
import "./style.scss";
import AOS from "aos";
import "aos/dist/aos.css";

import Photo1 from "../../assets/photo-projets/projet-1.webp";
import Photo2 from "../../assets/photo-projets/projet-2.webp";
import Photo3 from "../../assets/photo-projets/projet-3.webp";
import Photo4 from "../../assets/photo-projets/projet-4.webp";
import Photo5 from "../../assets/photo-projets/projet-5.webp";
import Photo6 from "../../assets/photo-projets/projet-6.webp";
import Photo7 from "../../assets/photo-projets/projet-7.webp";
import Photo8 from "../../assets/photo-projets/projet-8.webp"
import Photo9 from "../../assets/photo-projets/projet-9.webp"; 
import Photo10 from "../../assets/photo-projets/projet-10.webp"; 
import Photo11 from "../../assets/photo-projets/todo-list.webp";
import Photo12 from "../../assets/photo-projets/lapilli.webp";
import Photo13 from "../../assets/photo-projets/fabrik.webp";
import Logohtml from "../../assets/logo-techno/logo-html2.png"; 
import Logocss from "../../assets/logo-techno/logo-css2.png"; 
import Logojs from "../../assets/logo-techno/logo-js2.png";
import Logoreact from "../../assets/logo-techno/logo-react3.png";
import Logoblanc from "../../assets/logo-techno/fond-transparent.png";
import Logovue from "../../assets/logo-techno/logo-vue.svg";
import { useTranslation } from 'react-i18next';

// (Les imports des photos et logos restent inchangés)

const cards = [
    {
      name: "Riding Cities",
      description: 'projrc',
      photoproj: Photo1,
      techno1: "HTML",
      techno2: "CSS",
      link1: "https://github.com/mathc28/Riding_Cities",
      link2: "https://mc-riding-cities.vercel.app/"
    },
    {
      name: "Booki",
      description: 'projbooki',
      photoproj: Photo2,
      techno1: "HTML",
      techno2: "CSS",
      link1: "https://github.com/mathc28/Booki",
      link2: "https://mc-booki.vercel.app"
    },
    {
      name: "OhMyFood Paris",
      description: 'projohmyfood',
      photoproj: Photo3,
      techno1: "HTML",
      techno2: "CSS",
      link1: "https://github.com/mathc28/Ohmyfood",
      link2: "https://mc-ohmyfood.vercel.app"
    },
    {
      name: "Print it",
      description: 'projprintit',
      photoproj: Photo4,
      techno1: "Javascript",
      techno2: "CSS",
      link1:"https://github.com/mathc28/Print_It",
      link2:"https://mc-printit.vercel.app"
    },
    {
      name: "Portfolio Architecte",
      description: 'projportfolioarchitecte',
      photoproj: Photo5,
      techno1: "Javascript",
      techno2: "CSS",
      link1: "https://github.com/mathc28/Portfolio_Sophie_Bluel",
      link2: "https://mc-portfolio-architecte.vercel.app"
    },
    {
      name: "Qwenta",
      description: 'projqwenta',
      photoproj: Photo6,
      techno1: "Plannification",
      techno2: "Figma",
      link1: "https://github.com/mathc28/Qwenta",
      link2: "https://github.com/mathc28/Qwenta"
      
    },{
      name: "Argent Bank",
      description: 'projargbank',
      photoproj: Photo7,
      techno1: "React.js",
      techno2: "CSS",
      link1: "https://github.com/mathc28/ArgentBank",
      link2: "https://mc-argent-bank.vercel.app/",
    },
    {
      name: "Mon Portfolio",
      description: 'projportfolio',
      photoproj: Photo4,
      techno1: "React.js",
      techno2: "CSS",
      link1: "https://github.com/mathc28/portfolio",
      link2: "https://mathcoc.vercel.app/"
    },
    {
      name: "SEO Portfolio ",
      description: 'projseo',
      photoproj: Photo9,
      techno1: "SEO",
      techno2: Logoblanc,
      link1: "https://github.com/mathc28/NinaCarducci",
      link2: "https://mc-ninacarducci.vercel.app/"
    },
    {
      name: "Debug site web ",
      description: 'projdebug',
      photoproj: Photo10,
      techno1: "Plannification",
      techno2: "Javascript",
      link1: "https://github.com/mathc28/724events-p10",
      link2: "https://mc-724events.vercel.app",
    },
    {
      name: "Kasa",
      description: 'projkasa',
      photoproj: Photo8,
      techno1: "React.js",
      techno2: "CSS",
      link1: "https://github.com/mathc28/Kasa",
      link2: "https://mc-kasa.vercel.app",
    },

    {
      name: "Todo List",
      description: 'projtodo',
      photoproj: Photo11,
      techno1: "Vue.js",
      techno2: "CSS",
      link1: "https://github.com/mathc28/todolist",
      link2: "https://mc-todolist.vercel.app",
    },

    {
      name: "Domaine Lapilli",
      description: 'projlapilli',
      photoproj: Photo12,
      techno1: "HTML",
      techno2: "CSS",
      link1: "https://github.com/mathc28/Lapilli",
      link2: "https://domaine-lapilli.com",
    },

    {
      name: "La fabrique du hot-dog",
      description: 'projfabrik',
      photoproj: Photo13,
      techno1: "SEO",
      techno2: "WIX",
      link1: "https://github.com/mathc28",
      link2: "https://www.lafabriqueduhotdog.com",
    },
  ];

const Card1 = () => {
  const { t } = useTranslation();

  // Initialisation d'AOS
  useEffect(() => {
    AOS.init({
        duration: 1000, // Durée de l'animation
        once: false, 
    });
  }, []);

  // State pour gérer le nombre de projets affichés
  const [showAllProjects, setShowAllProjects] = useState(false);

  // Nombre de projets à afficher par défaut
  const initialProjectCount = 6;

  // Inverser la liste une fois pour toutes sans modifier l'original
  const reversedCards = [...cards].reverse();

  // Ensuite, appliquer slice sur la liste inversée si besoin
  const displayedCards = showAllProjects ? reversedCards : reversedCards.slice(0, initialProjectCount);

  return (
    <section className="page card-1-page" data-aos="fade-up">
       <h2 className='section-comp-title'>{t('projects')}</h2>
      <div className="cards">
        {displayedCards.map((card, index) => (
          <label id={card.name} key={index}>
            <input type="checkbox" />
            <div className="card">
              <div className="front">
                <img src={card.photoproj} alt={`photo du projet ${index + 1}`} className="photo-projet" />
                <h3 className="card-title">{card.name}</h3>
                <p className="card-subtitle">{t("ensavplus")}</p>
              </div>
              <div className="back">
                <header>
                  <h2>{card.name}</h2>
                  <span className="material-symbols-outlined"> {t("projetfermer")} </span>
                </header>
                <p className="card-description">{t(card.description)}</p>
                <div className="techno-card">
                  <p>{t("projettechnos")}</p>
                  <div className="technos-projet">
                    <p className="techno-projet">{card.techno1} </p>
                    <p className="techno-projet">{card.techno2} </p>
                  </div>
                </div>
                <div className="link-website">
                  <a href={card.link1}>{t("projetliencode")}</a>
                  <a href={card.link2}>{t("projetliensite")}</a>
                </div>
              </div>
            </div>
          </label>
        ))}
      </div>
      {/* Bouton "Afficher plus" ou "Afficher moins" */}
      {cards.length > initialProjectCount && (
        <div className="btn">
          <button onClick={() => setShowAllProjects(!showAllProjects)} className="show-more-button">
            {showAllProjects ? t("affichezmoins") : t("affichezplus")}
          </button>
        </div>
      )}
    </section>
  );
};

export default Card1;
