import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./style.scss";
import { useTranslation } from 'react-i18next';

export const ContactUs = () => {
  const { t } = useTranslation();
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_g1c91pb', 'template_7la894t', form.current, {
        publicKey: 'uJvYxBHUCH9pBhh6W',
      })
      .then(
        () => {
          alert('merci pour votre message ! / thank you for your message');
        },
        (error) => {
          alert('Une erreur est survenue, veuillez réessayer / An error has occurred. Please try again', error.text);
        },
      );
  };

  return (
    <div className='contactme' id="contact">
        <h2 className='section-comp-title'> {t('contacttitre')}</h2>
        <div>
            <form ref={form} onSubmit={sendEmail} className='form-contact'>
                <p className='txt-contact'>  {t('contacttxt')}</p>
                <div className='form-nom'> 
                    <label htmlFor='contactname' className='form-label'> {t('contactname')} </label>
                    <input type="text" name="user_name" className='form-input' id='contactname' />
                </div>
                <div className='form-mail'>
                    <label htmlFor='contactmail' className='form-label'>Email</label>
                    <input type="email" name="user_email" className='form-input' id='contactmail'/>
                </div>    
                <div className='form-msg'>
                    <label htmlFor='contactmessage' className='form-label'>Message</label>
                    <textarea name="message" className='form-txtarea' id='contactmessage'/>
                </div>
                <input type="submit" value={t('contactbtn')}  className='form-btn'/>
            </form>
        </div>
    </div>
  );
};

export default ContactUs;