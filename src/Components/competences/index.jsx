import React from 'react';
import "./style.scss";
import Html from "../../assets/logo-html.png";
import Css from "../../assets/logo-css.png";
import Javascript from "../../assets/logo-js.png" 
import Reactl from "../../assets/logo-react.png" 

const index = () => {
    return (
        <div>
            <h2 className='section-title'> Mes Compétences </h2>
            <div className='container-compétences'>
                <div className='web-skills'>
                    <div className='web-skills-title'> Développement Web </div>
                    <div className='cards'> 
                        <div className='card'>
                            <img src={Html} alt="logo html" className='logo-techno' />
                            <div className='techno-info'>
                                <h3 className='card-title'> HTML </h3>
                                <p className='level'> Niveau : Intermédiaire </p>
                            </div>
                        </div>
                    </div>
                    <div className='cards'> 
                        <div className='card'>
                        <img src={Css} alt="logo css" className='logo-techno' />
                            <div className='techno-info'>
                                <h3 className='card-title'> CSS </h3>
                                <p className='level'> Niveau : Intermédiaire </p>
                            </div>
                        </div>
                    </div>
                    <div className='cards'> 
                        <div className='card'>
                        <img src={Javascript} alt="logo js" className='logo-techno' />
                            <div className='techno-info'>
                                <h3 className='card-title'> Javascript </h3>
                                <p className='level'> Niveau : débutant </p>
                            </div>
                        </div>
                    </div>
                    <div className='cards'> 
                        <div className='card'>
                        <img src={Reactl} alt="loho react" className='logo-techno' />
                           <div className='techno-info'>
                                <h3 className='card-title'> React </h3>
                                <p className='level'> Niveau : débutant </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='line'></div>
               
                <div className='digital-skills'>
                    <div className='web-skills-title'> Outils Digitaux </div>
                    <div className='cards2'> 
                        <div className='card'>
                            <div className='techno-info2'>
                                <h3 className='card-title'> Social media </h3>
                                <p className='level'> Niveau : Avancé </p>
                            </div>
                            <img src={Html} alt="logo html" className='logo-techno' />
                        </div>
                    </div>
                    <div className='cards2'> 
                        <div className='card'>
                            <div className='techno-info2'>
                                <h3 className='card-title'> Content creation </h3>
                                <p className='level'> Niveau : Avancé </p>
                            </div>
                            <img src={Css} alt="logo css" className='logo-techno' />
                        </div>
                    </div>
                    <div className='cards2'> 
                        <div className='card'>
                            <div className='techno-info2'>
                                <h3 className='card-title'> Newsletter </h3>
                                <p className='level'> Niveau : intermédiaire </p>
                            </div>
                            <img src={Javascript} alt="logo js" className='logo-techno' />
                        </div>
                    </div>
                    <div className='cards2'> 
                        <div className='card'>
                            <div className='techno-info2'>
                                <h3 className='card-title'> Marketing strategy </h3>
                                <p className='level'> Niveau : débutant </p>
                            </div>
                            <img src={Reactl} alt="loho react" className='logo-techno' />
                        </div>
                    </div>
                </div>
            </div>
            <div className='newlearn'>
                Never stop learning. <br /> New skills in progress : figma, UI, Next.js, gsap
            </div>
        </div>
    );
};

export default index;