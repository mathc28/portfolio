import React, { useEffect } from "react";
import './style2.css';
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from 'react-i18next';


const Skills = () => {
    const { t } = useTranslation();
    // Initialisation d'AOS
    useEffect(() => {
        AOS.init({
            duration: 1000, // Durée de l'animation
            once: true, // Animation jouée une seule fois
        });
    }, []);

  const skills = [
    { name: 'HTML/CSS', level: '85%' },
    { name: 'JavaScript', level: '60%' },
    { name: 'React.js', level: '70%' },
    { name: 'Wordpress', level: '50%' },
    { name: 'Typescript', level: '20%' },
  ];

  const skills2 = [
    { name: 'Plannification', level: '80%' },
    { name: 'SEO', level: '65%' },
    { name: 'Github', level: '50%' },
    { name: 'figma', level: '30%' },
  ];

  const skills3 = [
    { name: 'Social Media', level: '85%' },
    { name: 'Création de contenu', level: '70%' },
    { name: 'Newsletter', level: '65%' },
    { name: 'Stratégie', level: '60%' },
  ];

  return (
    <div className='competences-containers'>
        <h2 className='section-comp-title'>{t('comptitre')}</h2>
        <div className="skills-intro" dangerouslySetInnerHTML={{ __html: t("skillsintro") }} />
        <div className='competences-skills'>
            <div className="skills-container">
                <h2>WEB SKILLS</h2>
                {skills.map((skill, index) => (
                    <div key={index} className="skill">
                        <span>{skill.name}</span>
                        <div className="progress-bar">
                            <div className="progress" style={{ width: skill.level.replace('%', '') + '%' }}></div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="skills-container">
                <h2>WEB TOOLS</h2>
                {skills2.map((skill, index) => (
                    <div key={index} className="skill">
                        <span>{skill.name}</span>
                        <div className="progress-bar">
                            <div className="progress" style={{ width: skill.level.replace('%', '') + '%' }}></div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="skills-container">
                <h2>MARKETING SKILLS</h2>
                {skills3.map((skill, index) => (
                    <div key={index} className="skill">
                        <span>{skill.name}</span>
                        <div className="progress-bar">
                            <div className="progress" style={{ width: skill.level.replace('%', '') + '%' }}></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>


  );
};

export default Skills;
