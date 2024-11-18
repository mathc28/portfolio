import React from 'react';
import "./style.scss";
import Html from "../../assets/logo-techno/logo-html2.svg";
import Css from "../../assets/logo-techno/logo-css2.svg";
import Javascript from "../../assets/logo-techno/logo-js2.svg" 
import Reactl from "../../assets/logo-techno/logo-react2.svg" 
import Fullstar from "../../assets/skills/star-solid.svg"
import Emptystar from "../../assets/skills/star-regular.svg"
import Figma from "../../assets/logo-techno/logo-figma.svg"
import Todo from "../../assets/skills/list-solid.svg"
import Seo from "../../assets/skills/ranking-star-solid.svg"
import Github from "../../assets/logo-techno/github-logo.png"
import Smedia from "../../assets/skills/hashtag-solid.svg"
import Ccreation from "../../assets/skills/thumbs-up-solid.svg"
import Newsletter from "../../assets/skills/envelope-solid.svg"
import Mstrategy from "../../assets/skills/bullseye-solid.svg"

import { useTranslation } from 'react-i18next';

const Index = () => {
    const { t } = useTranslation();
    return (
        <div id="competences">
            <h2 className='section-comp-title'>{t('comptitre')}</h2>
            <div className='container-compétences'>
                <div className='web-skills'>
                    <div className='web-skills-title'>{t('compsoustitre')}</div>
                    <div className='skills'> 
                        <div className='skills-duo'>
                            <div className='skill'>
                                <img src={Html} alt="logo html" className='logo-techno' />
                                <div className='techno-info'>
                                    <h3 className='skill-title'> HTML </h3>
                                    <p className='level'> {t('lvlinter')} </p>
                                    <div className='stars'>
                                        <img src={Fullstar} alt="une étoile pleine" className='star'/>
                                        <img src={Fullstar} alt="une étoile pleine" className='star'/>
                                        <img src={Fullstar} alt="une étoile pleine" className='star'/>
                                        <img src={Emptystar} alt="une étoile vide" className='star'/>
                                        <img src={Emptystar} alt="une étoile vide" className='star'/>
                                    </div>
                                </div>
                            </div>
                        
                    
                            <div className='skill'>
                                <img src={Css} alt="logo css" className='logo-techno' />
                                <div className='techno-info'>
                                    <h3 className='skill-title'> CSS </h3>
                                    <p className='level'> {t('lvlinter')} </p>
                                    <div className='stars'>
                                        <img src={Fullstar} alt="une étoile pleine" className='star'/>
                                        <img src={Fullstar} alt="une étoile pleine" className='star'/>
                                        <img src={Fullstar} alt="une étoile pleine" className='star'/>
                                        <img src={Emptystar} alt="une étoile vide" className='star'/>
                                        <img src={Emptystar} alt="une étoile vide" className='star'/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    
                        <div className='skills-duo'>
                            <div className='skill'>
                                <img src={Javascript} alt="logo js" className='logo-techno' />
                                <div className='techno-info'>
                                    <h3 className='skill-title'> Javascript </h3>
                                    <p className='level'>  {t('lvlinter')} </p>
                                    <div className='stars'>
                                        <img src={Fullstar} alt="une étoile pleine" className='star'/>
                                        <img src={Fullstar} alt="une étoile pleine" className='star'/>
                                        <img src={Fullstar} alt="une étoile pleine" className='star'/>
                                        <img src={Emptystar} alt="une étoile vide" className='star'/>
                                        <img src={Emptystar} alt="une étoile vide" className='star'/>
                                    </div>
                                </div>
                            </div>
                    
                            <div className='skill'>
                                <img src={Reactl} alt="loho react" className='logo-techno' />
                                <div className='techno-info'>
                                    <h3 className='skill-title'> React </h3>
                                    <p className='level'> {t('lvlinter')} </p>
                                    <div className='stars'>
                                        <img src={Fullstar} alt="une étoile pleine" className='star'/>
                                        <img src={Fullstar} alt="une étoile pleine" className='star'/>
                                        <img src={Fullstar} alt="une étoile pleine" className='star'/>
                                        <img src={Emptystar} alt="une étoile vide" className='star'/>
                                        <img src={Emptystar} alt="une étoile vide" className='star'/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='web-skills'>
                    <div className='web-skills-title'> {t('outilsweb')} </div>
                    <div className='skills'> 
                        <div className='skills-duo'>
                            <div className='skill'>
                                <img src={Figma} alt="logo Figma" className='logo-techno' />
                                <div className='techno-info'>
                                    <h3 className='skill-title'> Figma </h3>
                                    <p className='level'> {t('lvldeb')} </p>
                                    <div className='stars'>
                                        <img src={Fullstar} alt="une étoile pleine" className='star'/>
                                        <img src={Fullstar} alt="une étoile pleine" className='star'/>
                                        <img src={Emptystar} alt="une étoile vide" className='star'/>
                                        <img src={Emptystar} alt="une étoile vide" className='star'/>
                                        <img src={Emptystar} alt="une étoile vide" className='star'/>
                                    </div>
                                </div>
                            </div>
                    
                            <div className='skill'>
                            <img src={Todo} alt="logo plannification" className='logo-techno' />
                                <div className='techno-info'>
                                    <h3 className='skill-title'> Plannification </h3>
                                    <p className='level'> {t('lvlinter')}</p>
                                    <div className='stars'>
                                        <img src={Fullstar} alt="une étoile pleine" className='star'/>
                                        <img src={Fullstar} alt="une étoile pleine" className='star'/>
                                        <img src={Fullstar} alt="une étoile pleine" className='star'/>
                                        <img src={Emptystar} alt="une étoile vide" className='star'/>
                                        <img src={Emptystar} alt="une étoile vide" className='star'/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='skills-duo'>
                            <div className='skill'>
                            <img src={Seo} alt="logo js" className='logo-techno' />
                                <div className='techno-info'>
                                    <h3 className='skill-title'> SEO </h3>
                                    <p className='level'> {t('lvldeb')} </p>
                                    <div className='stars'>
                                        <img src={Fullstar} alt="une étoile pleine" className='star'/>
                                        <img src={Fullstar} alt="une étoile pleine" className='star'/>
                                        <img src={Emptystar} alt="une étoile vide" className='star'/>
                                        <img src={Emptystar} alt="une étoile vide" className='star'/>
                                        <img src={Emptystar} alt="une étoile vide" className='star'/>
                                    </div>
                                </div>
                            </div>
                    
                            <div className='skill'>
                            <img src={Github} alt="loho react" className='logo-techno' />
                                <div className='techno-info'>
                                    <h3 className='skill-title'> Github </h3>
                                    <p className='level'> {t('lvldeb')} </p>
                                    <div className='stars'>
                                        <img src={Fullstar} alt="une étoile pleine" className='star'/>
                                        <img src={Fullstar} alt="une étoile pleine" className='star'/>
                                        <img src={Emptystar} alt="une étoile vide" className='star'/>
                                        <img src={Emptystar} alt="une étoile vide" className='star'/>
                                        <img src={Emptystar} alt="une étoile vide" className='star'/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
               
                <div className='digital-skills'>
                    <div className='web-skills-title'> {t('outilsdig')} </div>
                    <div className='skills'> 
                        <div className='skills-duo'>
                            <div className='skill'>
                                <img src={Smedia} alt="logo  social media" className='logo-techno' />
                                <div className='techno-info'>
                                    <h3 className='skill-title'> {t('socialmed')} </h3>
                                    <p className='level'> {t('lvlavan')} </p>
                                    <div className='stars'>
                                        <img src={Fullstar} alt="une étoile pleine" className='star'/>
                                        <img src={Fullstar} alt="une étoile pleine" className='star'/>
                                        <img src={Fullstar} alt="une étoile pleine" className='star'/>
                                        <img src={Fullstar} alt="une étoile pleine" className='star'/>
                                        <img src={Emptystar} alt="une étoile vide" className='star'/>
                                    </div>
                                </div>
                            </div>
                    
                            <div className='skill'>
                                <img src={Ccreation} alt="logo content creation" className='logo-techno' />
                                <div className='techno-info'>
                                    <h3 className='skill-title'> {t('contentcrea')}  </h3>
                                    <p className='level'> {t('lvlavan')} </p>
                                    <div className='stars'>
                                        <img src={Fullstar} alt="une étoile pleine" className='star'/>
                                        <img src={Fullstar} alt="une étoile pleine" className='star'/>
                                        <img src={Fullstar} alt="une étoile pleine" className='star'/>
                                        <img src={Fullstar} alt="une étoile pleine" className='star'/>
                                        <img src={Emptystar} alt="une étoile vide" className='star'/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    
                        <div className='skills-duo'>
                            <div className='skill'>
                                <img src={Newsletter} alt="logo newsletter" className='logo-techno' />
                                <div className='techno-info'>
                                    <h3 className='skill-title'> Newsletter </h3>
                                    <p className='level'> {t('lvlavan')} </p>
                                    <div className='stars'>
                                        <img src={Fullstar} alt="une étoile pleine" className='star'/>
                                        <img src={Fullstar} alt="une étoile pleine" className='star'/>
                                        <img src={Fullstar} alt="une étoile pleine" className='star'/>
                                        <img src={Fullstar} alt="une étoile pleine" className='star'/>
                                        <img src={Emptystar} alt="une étoile vide" className='star'/>
                                    </div>
                                </div>
                            </div>
                        
                            <div className='skill'>
                                <img src={Mstrategy} alt="loho react" className='logo-techno' />
                                <div className='techno-info'>
                                    <h3 className='skill-title'> {t('stratmarket')}</h3>
                                    <p className='level'> {t('lvlavan')} </p>
                                    <div className='stars'>
                                        <img src={Fullstar} alt="une étoile pleine" className='star'/>
                                        <img src={Fullstar} alt="une étoile pleine" className='star'/>
                                        <img src={Fullstar} alt="une étoile pleine" className='star'/>
                                        <img src={Fullstar} alt="une étoile pleine" className='star'/>
                                        <img src={Emptystar} alt="une étoile vide" className='star'/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='newlearn'>{t('nsl')}</div>
            <h2 className='section-comp-title' id="projets">{t('projects')} </h2>
        </div>
    );
};

export default Index;