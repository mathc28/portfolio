import "./style.scss";
import Photo1 from "../../assets/photo-projets/projet-1.png";
import Photo2 from "../../assets/photo-projets/projet-2.png";
import Photo3 from "../../assets/photo-projets/projet-3.png";
import Photo4 from "../../assets/photo-projets/projet-4.png";
import Photo5 from "../../assets/photo-projets/projet-5.png";
import Photo6 from "../../assets/photo-projets/projet-6.png";
import Photo7 from "../../assets/photo-projets/projet-7.png";
import Photo8 from "../../assets/photo-projets/projet-8.png"; 
 


import Logohtml from "../../assets/logo-techno/logo-html2.png"; 
import Logocss from "../../assets/logo-techno/logo-css2.png"; 
import Logojs from "../../assets/logo-techno/logo-js2.png";
import Logoreact from "../../assets/logo-techno/logo-react2.png";
import Logoblanc from "../../assets/logo-techno/fond-transparent.png";

import { useTranslation } from 'react-i18next';


const cards = [
  {
    name: "Riding Cities",
    description: 'projrc',
    photoproj: Photo1,
    techno1: Logohtml,
    techno2: Logocss,
    link1: "https://github.com/mathc28/Riding_Cities",
    link2: "https://mc-riding-cities.vercel.app/"
  },
  {
    name: "Booki",
    description: 'projbooki',
    photoproj: Photo2,
    techno1: Logohtml,
    techno2: Logocss,
    link1: "https://github.com/mathc28/Booki",
    link2: "https://mc-booki.vercel.app"
  },
  {
    name: "OhMyFood Paris",
    description: 'projohmyfood',
    photoproj: Photo3,
    techno1: Logohtml,
    techno2: Logocss,
    link1: "https://github.com/mathc28/Ohmyfood",
    link2: "https://mc-ohmyfood.vercel.app"
  },
  {
    name: "Print it",
    description: 'projprintit',
    photoproj: Photo4,
    techno1: Logojs,
    techno2: Logocss,
    link1:"https://github.com/mathc28/Print_It",
    link2:"https://mc-printit.vercel.app"
  },
  {
    name: "Portfolio Architecte",
    description: 'projportfolioarchitecte',
    photoproj: Photo5,
    techno1: Logojs,
    techno2: Logocss,
    link1: "https://github.com/mathc28/Portfolio_Sophie_Bluel",
    link2: "https://mc-portfolio-architecte.vercel.app"
  },
  {
    name: "Qwenta",
    description: 'projqwenta',
    photoproj: Photo6,
    techno1: Logoblanc,
    techno2: Logoblanc,
    link1: "https://github.com/mathc28/Qwenta",
    link2: "https://github.com/mathc28/Qwenta"
    
  },{
    name: "Argent Bank",
    description: 'projargbank',
    photoproj: Photo7,
    techno1: Logoreact,
    techno2: Logocss,
    link1: "https://github.com/mathc28/projet10-argentbank",
    link2: "https://github.com/mathc28/projet10-argentbank",
  },
  {
    name: "Kasa",
    description: 'projkasa',
    photoproj: Photo8,
    techno1: Logoreact,
    techno2: Logocss,
    Link1: "https://github.com/mathc28/Kasa",
    Link2:"https://mc-kasa.vercel.app"
  },
  {
    name: "Mon Portfolio ",
    description: 'projportfolio',
    description: "Création de mon propre portfolio",
    photoproj: Photo4,
    techno1: Logoreact,
    techno2: Logocss,
    link1: "https://github.com/mathc28/portfolio",
    link2: "https://mathcoc.vercel.app/"
  },
];

const Card1 = () => {
  const { t } = useTranslation();

  return (
    <section className="page card-1-page"> 
      <div className="cards">
        {cards.map((card) => (
          <label id={card.name}>
            <input type="checkbox" />
            <div className="card">
              <div className="front">
                <img src={card.photoproj} alt="photo du projet 1" className="photo-projet" />
                <h3 className="card-title">{card.name}</h3>
                <h4 className="card-subtitle">{t('ensavplus')}</h4>
              </div>
              <div className="back">
                <header>
                  <h2>{card.name}</h2>
                  <span className="material-symbols-outlined"> {t('projetfermer')} </span>
                </header>
                <p className="card-description">{t(card.description)}</p>
                <div className="techno-card">
                  <p> {t('projettechnos')}</p>
                  <div className="technos-projet">
                    <img src={card.techno1} alt="photo du projet 1" className="techno-projet" />
                    <img src={card.techno2} alt="photo du projet 1" className="techno-projet" />
                  </div>
                </div>
                <div className="link-website">
                  <a href={card.link1} target="_blank"> {t('projetliencode')}</a>
                  <a href={card.link2} target="_blank"> {t('projetliensite')}</a>
                </div>
              </div>
            </div>
          </label>
        ))}
      </div>
    </section>
  );
};


export default Card1;