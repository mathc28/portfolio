// Importation des composants et des éléments nécessaires depuis React Router
import { Routes, Route } from "react-router-dom";

import Accueil from "../Pages/accueil";


/**
 * Configuration des routes de l'application
 */
function Router (){
    return <Routes>
        <Route path="/" element={<Accueil/>} />
    </Routes>
}

export default Router

