import React from 'react';
import logo from "../../assets/logo mc gris .png";
import "./style.scss"

const index = () => {
    return (
        <div className='header'>
            <img src={logo} className="logo" alt="logo de Mathieu C" />
            <nav className='navigation'>
                <ul className='nav'> 
                    <li>
                        <a href="#presentation" className='liens' id='li' >Présentation</a>
                    </li>
                    <li>
                        <a href="#competences" className='liens' id='li' >compétences</a>
                    </li>
                    <li>
                        <a href="#projets" className='liens' id='li' >Projets</a>
                    </li>
                    <li>
                        <a href="#temoignages" className='liens' id='li' >témoignages</a>
                    </li>
                    <li>
                        <a href="#contact" className='liens' id='li'>contactez-moi</a>
                    </li>
                </ul>
            </nav>
            <button className='switchlanguage'>FR/EN</button>
        </div>
    );
};

export default index;