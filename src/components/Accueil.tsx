import React from 'react';
import Defiler from './Defiler';
import ScrollReveal from 'scrollreveal'

const Accueil = () => {



    ScrollReveal().reveal(".titre", { delay: 500 })
    ScrollReveal().reveal(".presentation", { delay: 800 })

    return (
        <div className='accueil' id='accueil'>
            <h1 className='titre'>Salut, je suis Ibrahima et je suis developpeur web Fullstack </h1>
            <p className='presentation'>


                Je suis un développeur Web fullstack qui construit des sites Web et des applications Web qui mène au succès de l’ensemble du produit.
            </p>


            <Defiler />
        </div>
    );
};

export default Accueil;