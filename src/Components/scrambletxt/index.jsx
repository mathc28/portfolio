import React from 'react';
import { useTranslation } from 'react-i18next';
import "./style.scss"
import { useScramble } from 'use-scramble';



const Type = () => {
    const { t } = useTranslation();
    // hook returns a ref
    const { ref } = useScramble({ 
    text: "Freelance Web Developer", 
    range: [33,90],
    speed: 3,
    tick: 8,
    step: 2,
    scramble: 6,
    seed: 3,
    chance: 0.5,
    overdrive: false,
    overflow: false,
  });

  // apply the ref to a node
  return <p ref={ref} />
};

export default Type;
  