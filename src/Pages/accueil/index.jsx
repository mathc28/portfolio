import React from 'react';
import Presentation from "../../Components/presentation"
import Competences2 from "../../Components/competences/index2"
import Projets from "../../Components/projets"
import Temoignages from "../../Components/temoignages"
import Contact from "../../Components/contactme"
import CalendlyBadge from "../../Components/calendly";


const accueil = () => {
    return (
        <div>
           <Presentation/>    
           <Competences2/>
           <Projets />
           <Temoignages />
           <Contact />
           <CalendlyBadge />
        </div>
    );
};

export default accueil;