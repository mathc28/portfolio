import React from 'react';
import Typewriter from "typewriter-effect";
import { useTranslation } from 'react-i18next';

import "./style.scss"


const Type = () => {
    const { t } = useTranslation();
    return (
        <div>
            <div className='typeEFfect'>
                <Typewriter
                    options={{
                        strings: ["front-end web developper"],
                        autoStart: true,
                        loop: true, 
                        delay: 70, 
                        deleteSpeed:20,
                    }}
                
                
                />

            </div>
            
        </div>
    );
};

export default Type;