// Importation des composants et des éléments nécessaires depuis React Router
import { Routes, Route } from "react-router-dom";

import Accueil from "../Pages/accueil";
import Projets from "../Pages/projets";


/**
 * Configuration des routes de l'application
 */
function Router (){
    return <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/projets/:id" element={<Projets />} />
    </Routes>
}

export default Router