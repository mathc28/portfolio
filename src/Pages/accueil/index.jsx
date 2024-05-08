import React from 'react';
import Presentation from "../../Components/presentation"
import Competences from "../../Components/competences"
import Projets from "../../Components/Projets"

const accueil = () => {
    return (
        <div>
           <Presentation/>
           <Competences/>
           <Projets />
            
        </div>
    );
};

export default accueil;