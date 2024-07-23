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
            pres2: 'et je suis Développeur Web Junior ',
            pres3: "A 31 ans, je suis actuellement en reconversion pour travailler dans le milieu du développement web en suivant une formation de dévellopeur web front-end chez Open-Classroom. Diplomé d'un master (bac +5) à l'ESC Clermont et fort de plusieurs années et expériences dans le milieu du marketing digital, j'ai décidé de me réorienter dans le développement web. Lors de cette formation j’ai pu acquérir les bases des languages utilisés dans le developpement du front-end (HTML, CSS, Javascript) et de les appliquer lors de la réalisation de projets. Je suis à la recherche d'un poste de developpeur web junior dans la région lyonnaise ou à l'étranger.",

            comptitre:'MES COMPÉTENCES',
            compsoustitre:'Développement Web',
            lvlavan: 'Niveau : Avancé',
            lvlinter:'Niveau : Intermédiaire',
            lvldeb: 'Niveau : Débutant',
            outilsweb: 'Outils web',
            outilsdig: 'Outils digitaux',
            socialmed:'Réseaux sociaux',
            contentcrea:'Création de contenu',
            stratmarket:'Stratégie marketing',
            nsl:"N'arrêtez jamais d'apprendre. Nouvelles compétences en cours : figma, UI, Next.js, gsap",
            projects: 'PROJETS',

            temoigtitre:"TÉMOIGNAGES",
            txttem:"Cette section n'est pas encore prête. D'autres témoignages seront bientôt ajoutés",

            contacttitre:'CONTACTEZ-MOI !',
            contacttxt:"Une Question ? N'hésitez pas à me contacter",
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
            pres3: "At 31 years old, I am currently retraining to work in the web development sector by following training as a front-end web developer at Open-Classroom. Graduated with a master's degree (bac +5) from ESC Clermont and with several years and experience in the world of digital marketing, I decided to reorient myself in web development. During this training I was able to acquire the basics of the languages ​used in front-end development (HTML, CSS, Javascript) and apply them when carrying out projects. I am looking for a position as a junior web developer in the Lyon region or abroad.",


            comptitre:'MY SKILLS',
            compsoustitre:'Web development',
            lvlavan: 'Advanced level',
            lvlinter:'Intermediate level',
            lvldeb: 'Beginner level',
            outilsweb: 'Web tools',
            outilsdig: 'Digital tools',
            socialmed:'Social media',
            contentcrea:'Content creation',
            stratmarket:'Marketing strategy',
            nsl:'Never stop learning. New skills in progress : figma, UI, Next.js, gsap',
            projects: 'PROJECTS',

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