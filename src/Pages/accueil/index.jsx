import React from 'react';
import Presentation from "../../Components/presentation"
import Competences from "../../Components/competences"
import Projets from "../../Components/projets"
import Temoignages from "../../Components/temoignages"
import Contact from "../../Components/contactme"

const accueil = () => {
    return (
        <div>
           <Presentation/>
           <Competences/>
           <Projets />
           <Temoignages />
           <Contact />
        </div>
    );
};

export default accueil;