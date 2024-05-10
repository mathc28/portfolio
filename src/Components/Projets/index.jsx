import "./style.scss";
import Photo1 from "../../assets/projet-1.png";
import Photo2 from "../../assets/projet-2.png";
import Photo3 from "../../assets/projet-3.png";
import Photo4 from "../../assets/projet-4.png";
import Photo5 from "../../assets/projet-5.png";
import Photo6 from "../../assets/projet-6.png";
import Photo7 from "../../assets/projet-7.png";
import Photo8 from "../../assets/Projet-8.png" 




import Logohtml from "../../assets/logo-html2.png"; 
import Logocss from "../../assets/logo-css2.png"; 
import Logojs from "../../assets/logo-js2.png";
import Logoreact from "../../assets/logo-react2.png"


const cards = [
  {
    name: "Riding Cities",
    description: "Mise à jour de la page Internet de Riding Cities, une association sportive qui promeut le skate en région.",
    more: "Learn More",
    photoproj: Photo1,
    techno1: Logohtml,
    techno2: Logocss,
  },
  {
    name: "Booki",
    description: "Intégration de la nouvelle interface du site web de Booki.",
    more: "Learn More",
    photoproj: Photo2,
    techno1: Logohtml,
    techno2: Logocss,
  },
  {
    name: "OhMyFood Paris",
    description: "Développement d’un site “mobile first” qui répertorie les menus de restaurants gastronomiques.",
    more: "Learn More",
    photoproj: Photo3,
    techno1: Logohtml,
    techno2: Logocss,
  },
  {
    name: "Print it",
    description: "Dynamiser le site Internet statique d’une petite imprimerie familiale nommée Print it avec l’utilisation de Javascript",
    more: "Learn More",
    photoproj: Photo4,
    techno1: Logojs,
    techno2: Logocss,
  },
  {
    name: "Portfolio Architecte",
    description: "Développez front-end d’une équipe qui travaille sur la conception du site portfolio d’une architecte d’intérieur.",
    more: "Learn More",
    photoproj: Photo5,
    techno1: Logojs,
    techno2: Logocss,
  },
  {
    name: "Qwenta",
    description: "Qwenta souhaite faire développer un site permettant aux restaurateurs d’afficher et de mettre en page leurs menus facilement, en quelques clics. ",
    more: "Learn More",
    photoproj: Photo6,
    
  },{
    name: "Argent Bank",
    description: "Développement front-end d’une application bancaire en utilisant React et Redux pour créer une expérience utilisateur dynamique et réactive.",
    more: "Learn More",
    photoproj: Photo7,
    techno1: Logoreact,
    techno2: Logocss,
  },
  {
    name: "Kasa",
    description: "Refonte totale pour passer à une stack complète en JavaScript avec NodeJS côté back-end, et React côté front-end. ",
    more: "Learn More",
    photoproj: Photo8,
    techno1: Logoreact,
    techno2: Logocss,
  },
  {
    name: "Mon Portfolio ",
    description: "Création de mon propre portfolio",
    more: "Learn More",
    photoproj: Photo4,
    techno1: Logoreact,
    techno2: Logocss,
  },
];

const Card1 = () => {
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
                <h4>{card.more}</h4>
              </div>
              <div className="back">
                <header>
                  <h2>{card.name}</h2>
                  <span className="material-symbols-outlined"> close </span>
                </header>
                <p className="card-description">{card.description}</p>
                <div className="techno-card">
                  <p>Technologies utilisées :</p>
                  <div className="technos-projet">
                    <img src={card.techno1} alt="photo du projet 1" className="techno-projet" />
                    <img src={card.techno2} alt="photo du projet 1" className="techno-projet" />
                  </div>
                </div>
                <div className="link-website">
                  <a href="">Visitez le site</a>
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