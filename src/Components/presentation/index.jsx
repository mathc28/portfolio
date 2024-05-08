import React from 'react';
import Photo from "../../assets/photo mc.jpeg";
import "./style.scss"


const $ = () => {
    return (
        <div>
            <div className='intro'> 
                <img src={Photo} alt="photo de Mathieu c" className='photo' />
                <div className='textpresentation'>
                    <div className='hi'>Salut, moi c'est</div>
                    <div className='name'>Mathieu cocu</div>
                    <div className='work'>et je suis Dev Web</div>
                    <div className='txt1'> 
                        A 31 ans, je suis actuellement en reconversion pour travailler dans le milieu du développement web. Diplomé d'un master (bac +5) à l'ESC Clermont et fort de plusieurs années et expériences dans le milieur du marketing digital, j'ai décidé de me réorienter.
                        Suite à un bac +2 développeur web à la Digital School de Brest, j’ai pu acquérir les bases de plusieurs langages web (HTML, CSS, Javascript, PHP), la gestion de bases de données mais aussi l’utilisation de logiciels tels que Illustrator, Blender ou Figma que j’utilise régulièrement pour créer des maquettes interactives.
                        J’ai ensuite pu exercer et améliorer ces connaissances avec un stage de 3 mois aux côtés d’un développeur web expérimenté.
                        J’aimerais maintenant continuer ma formation avec une troisième année en bachelor « Développement web » en alternance toujours à la Digital School. 
                    </div>
                </div>  
            </div> 
        </div>
    );
};

export default $;