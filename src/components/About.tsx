import React from 'react';
import ScrollReveal from 'scrollreveal';

ScrollReveal().reveal('.about', { delay: 1000 });



const About = () => {
    return (
        <div className='about' id='about'>
            <span>
                <h3>Apprendre à me connaitre</h3>
                Depuis mon plus jeune âge je suis passionné par le développement informatique et après une reconversion
                professionnelle en développeur web, je bénéficie d'une
                expérience pratique dans la réalisation d'activités acquise au cours de
                divers projets et formations. Doté d'une grande capacité d'adaptation, je
                sais me montrer proactif et digne de confiance dans la réalisation de mes
                missions.


                Je suis ouvert aux opportunités d’emploi où je peux Contribuez, apprenez et grandissez. Si vous avez une bonne opportunité que correspond à mes compétences et à mon expérience alors n’hésitez pas à me contacter.

                Découvrez certains de mes travaux dans la section Projets.
            </span>
            <aside>
                <h3>Skills</h3>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>SASS</li>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>Nodejs - Express</li>
                    <li>MongoDb</li>
                    <li>MySql</li>
                    <li>Git</li>
                    <li>Github</li>
                    <li>SEO</li>
                    <li>Terminal</li>
                </ul>
            </aside>

        </div>
    );
};

export default About;