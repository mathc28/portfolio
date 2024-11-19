import React from 'react';
import { useTranslation } from 'react-i18next';
import "./style.scss"
import { useScramble } from 'use-scramble';



const Type = () => {
    const { t } = useTranslation();
    // hook returns a ref
    const { ref } = useScramble({ 
    text: "Frontend Web Developper", 
    range: [65,125],
    speed: 1,
    tick: 10,
    step: 1,
    scramble: 10,
    seed: 6,
    chance: 1,
    overdrive: false,
    overflow: true,
  });

  // apply the ref to a node
  return <p ref={ref} />
};

export default Type;
  