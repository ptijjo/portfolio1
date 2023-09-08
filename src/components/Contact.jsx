import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {

    const form = useRef();


    const sendEmail = (e) => {
        e.preventDefault();

        const formMess = document.querySelector('.form-message');

        emailjs.sendForm("service_uiw2m8d", "template_hygwczb", form.current, process.env.REACT_APP_ID)
            .then((result) => {

                form.current.reset();
                formMess.innerHTML = `<p class="success"> Message envoyé ! </p>`

                setTimeout(() => {
                    formMess.innnerHTML = "";
                }, 2500)

            }, (error) => {
                console.log(error.text);
                formMess.innerHTML = `<p class="error"> Une erreur s'est produite veuillez essayer ultérieurement ! </p>`

                setTimeout(() => {
                    formMess.innnerHTML = "";
                }, 2500)
            });
    };



    return (
        <div className='contact' id='contact'>
            <h2>contactez-moi</h2>
            <form ref={form} onSubmit={sendEmail} className="form-content">
                <label htmlFor="nom">Nom</label>
                <input type="text" name="nom" id="nom" required autoComplete='off' />
                <label htmlFor="prenom">Prenom</label>
                <input type="text" name="prenom" id="prenom" required autoComplete='off' />
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" required autoComplete='off' />
                <label htmlFor="message">Message</label>
                <textarea name="message" id="message" required />
                <input type="submit" value="Envoyer" className='button' />
            </form>
            <div className="form-message"></div>
        </div>
    );
};

export default Contact;