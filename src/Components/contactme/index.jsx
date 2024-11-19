import React, { useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import "./style.scss";
import { useTranslation } from 'react-i18next';
import AOS from "aos";
import "aos/dist/aos.css";
import Swal from 'sweetalert2'




export const ContactUs = () => {
  const { t } = useTranslation();
  useEffect(() => {
    AOS.init({
        duration: 1000, // Durée de l'animation
        once: false, 
    });
  }, []);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_g1c91pb', 'template_8r174vg', form.current, {
        publicKey: 'uJvYxBHUCH9pBhh6W',
      })
      .then(
        () => {
          Swal.fire({
            title: "Thank you for your message !",
            text: "I'll come back to you asap",
            icon: "success"
          });
        },
        (error) => {
          Swal.fire({
            title: "An error has occurred",
            text: "Please try again",
            icon: "error"
          }, error.text);
        },
      );
  };

  return (
    <div className='contactme' id="contact" data-aos="fade-up">
        <h2 className='section-comp-title'> {t('contacttitre')}</h2>
        <div>
            <form ref={form} onSubmit={sendEmail} className='form-contact'>
                <p className='txt-contact'>  {t('contacttxt')}</p>
                <div className='form-nom'> 
                    <label htmlFor='contactname' className='form-label'> {t('contactname')} </label>
                    <input type="text" name="user_name" className='form-input' id='contactname' required />
                </div>
                <div className='form-mail'>
                    <label htmlFor='contactmail' className='form-label'>Email</label>
                    <input type="email" name="user_email" className='form-input' id='contactmail' required />
                </div>    
                <div className='form-msg'>
                    <label htmlFor='contactmessage' className='form-label'>Message</label>
                    <textarea name="message" className='form-txtarea' id='contactmessage' required />
                </div>
                <input type="submit" value={t('contactbtn')} className='form-btn'/>
            </form>
        </div>
    </div>
  );
};

export default ContactUs;
