import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: 'fr',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      fr: {
        translation: {
            description:'Description',
            competences: 'Compétences',
            projets: 'Projets',
            temoignages: 'Témoignages',
            contact:'Contact',

            pres1: "Salut, moi c'est",
            pres2: 'et je suis Freelance ',
            pres3: "🎯 <strong>Développeur front-end & intégrateur WordPress freelance</strong><br/>Je conçois des sites web modernes, rapides et sur-mesure pour les entrepreneurs, PME, indépendants et agences qui souhaitent renforcer leur présence en ligne.<br/><br/>💡 De la création de sites vitrines à la refonte complète, en passant par l’intégration de thèmes WordPress personnalisés, j’interviens à chaque étape avec rigueur et créativité.<br/><br/>🔧 Mon objectif : vous livrer un site performant, responsive, optimisé pour le SEO, facile à administrer et aligné avec vos besoins métier.<br/><br/>📍 Basé à Lyon, je travaille <strong>à distance ou sur place</strong>, partout en France et dans la francophonie.",
            comptitre:'MES COMPÉTENCES',
            compsoustitre:'Développement Web',
            lvlavan: 'Niveau : Avancé',
            lvlinter:'Niveau : Intermédiaire',
            lvldeb: 'Niveau : Débutant',
            outilsweb: 'Outils Web',
            outilsdig: 'Outils Digitaux',
            socialmed:'Social Media',
            contentcrea:'Contenu',
            stratmarket:'Stratégie',
            skillsintro: "Fort d’une formation solide en développement front-end et d’une expérience concrète sur des projets variés, j’ai acquis un ensemble de compétences techniques et créatives me permettant de concevoir des sites web performants, esthétiques et bien structurés.<br/><br/>De l’intégration HTML/CSS au développement en JavaScript/React, en passant par la création de sites WordPress sur mesure, je maîtrise chaque étape de la réalisation d’un site moderne, responsive et optimisé pour le référencement.",
            nsl:"N'arrêtez jamais d'apprendre. Nouvelles compétences en cours : Typescript, Next.js, gsap",
            projects: 'MES PROJETS',
            ensavplus: 'En savoir plus',
            projetfermer:'fermer',
            projettechnos:'Technologies utilisées :',
            projetliencode:'Voir le code',
            projetliensite:'Voir le site',

            projrc: 'Mise à jour de la page Internet de Riding Cities, une association sportive qui promeut le skate en région.',
            projbooki :'Intégration de la nouvelle interface du site web de Booki.',
            projohmyfood:'Développement d’un site “mobile first” qui répertorie les menus de restaurants gastronomiques.',
            projprintit: 'Dynamiser le site Internet statique d’une petite imprimerie familiale nommée Print it avec l’utilisation de Javascript.',
            projportfolioarchitecte:"Mise-à-jour technologique d'un site portfolio d'une architecte d'intérieur",
            projqwenta:'Qwenta souhaite faire développer un site permettant aux restaurateurs d’afficher et de mettre en page leurs menus facilement, en quelques clics.',
            projargbank: 'Développement front-end d’une application bancaire en utilisant React et Redux pour créer une expérience utilisateur dynamique et réactive.',
            projkasa:'Refonte totale pour passer à une stack complète en JavaScript avec NodeJS côté back-end, et React côté front-end.',
            projportfolio:'Création de mon propre portfolio',
            projseo:"Amélioration du référencement d'un portfolio d'une photographe bordelaise",
            projdebug:"Débug d'un site web d'agence événementielle et rédaction d'un cahier de recette",
            projtodo:"Création d'une todo list en utilisant Vue.js",
            projlapilli:"Création d'un site vitrine pour un couple de vignerons indépendants en Auvergne.",
            projfabrik:"Audit SEO + application de l'audit sur le site web sur Wix",
            affichezplus: "Découvrez plus de projets",
            affichezmoins: "Afficher moins de projets",

            temoigtitre:"TÉMOIGNAGES",
            txttem:"Cette section n'est pas encore prête. D'autres témoignages seront bientôt ajoutés",

            contacttitre:'CONTACTEZ-MOI !',
            contacttxt:"Une question ? N'hésitez pas à me contacter",
            contactname:'Nom',
            contactbtn:'Envoyer',

            footerbtn:'Contactez-moi',
            footerright:'.Tous droits réservés.',
            footerfollow: 'Suivez-moi !',
        }
      },
      en: {
        translation: {
            description:'About Me',
            competences: 'Skills',
            projets:'Projects',
            temoignages: 'Testimonials',
            contact:'Contact',
            pres1: "Hi, I am",
            pres2: 'and I am a Junior Web Developer',
            pres3: "At 31 years old, I am undergoing a career change to enter the field of web development. Currently enrolled in a front-end web developer training program at OpenClassrooms and holding a master's degree from ESC Clermont, I have chosen to pivot towards web development to take on new professional challenges. During this training, I have gained a strong understanding of front-end programming languages such as HTML, CSS, and JavaScript, and I have been able to apply these skills to the completion of concrete projects. I am now seeking a junior web developer position in the Lyon region or internationally.",


            comptitre:'MY SKILLS',
            compsoustitre:'Web development',
            lvlavan: 'Advanced level',
            lvlinter:'Intermediate level',
            lvldeb: 'Beginner level',
            outilsweb: 'Web tools',
            outilsdig: 'Digital tools',
            socialmed:'Social media',
            contentcrea:'Content',
            stratmarket:' Strategy',
            nsl:'Never stop learning. New skills in progress : Typescript, Next.js, gsap',
            projects: 'PROJECTS',
            ensavplus: 'Learn more',
            projetfermer:'close',
            projettechnos:'Technologies used:',
            projetliencode:'Go to code',
            projetliensite:'Go to website',

            projrc: 'Update of the Riding Cities website, a sports association promoting skateboarding in the region.',
            projbooki :'Integration of the new interface for the Booki website.',
            projohmyfood:'Development of a "mobile first" website that lists gourmet restaurant menus.',
            projprintit: 'Enhance the static website of a small family-owned print shop named Print it by using JavaScript.',
            projportfolioarchitecte:"Technological update of an interior designer's portfolio website.",
            projqwenta:'Qwenta aims to develop a website that allows restaurateurs to easily display and format their menus with just a few clicks.',
            projargbank: 'Front-end development of a banking application using React and Redux to create a dynamic and responsive user experience.',
            projkasa:'Complete overhaul to transition to a full JavaScript stack with Node.js on the back end and React on the front end.',
            projportfolio:'Creation of my own portfolio.',
            projseo:"Improving the SEO of a Bordeaux photographer’s portfolio",
            projdebug:"Debugging an event agency website",
            projtodo:"Creating a todo list using Vue.js",
            projlapilli:"Creation of a showcase site for a couple of independent winegrowers in Auvergne.",
            projfabrik:"SEO Audit + Application of the Audit to the Website on Wixn",
            affichezplus: "discover more projects",
            affichezmoins: "show less projects",

            temoigtitre:"TESTIMONIALS",
            txttem:'This section is not ready yet. More tesimonials will be add soon',

            contacttitre:'CONTACT-ME !',
            contacttxt:"A question ? Feel free to contact me",
            contactname:'Name',
            contactbtn:'Send',

            footerbtn:'Email Us',
            footerright:'.All rights reserved',
            footerfollow: 'Follow me !'


    
        }
      }
    }
  });

export default i18n;