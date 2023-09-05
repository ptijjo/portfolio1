import React, { useState } from 'react';
const avatar = require("../assets/_DSC4349 (5).JPG");

const Header = () => {

    const [ouvert, setOuvert] = useState(false);

    const OpenFunction = () => {
        (ouvert) ? setOuvert(false) : setOuvert(true)
    };



    return (
        <header className='header'>
            <div className='avatar'>
                <img src={avatar} alt="ibrahima Bangoura" />
                <p>Ibrahima BANGOURA</p>
            </div>
            <nav className='menuOrdi'>
                <ul>
                    <li><a href="#accueil"> Accueil</a></li>
                    <li> <a href='#about'> A propos</a></li>
                    <li><a href='#projet'>Projet</a></li>
                    <li><a href='#contact'> Contact</a></li>
                </ul>
            </nav>
            <nav className='menuMobile' onClick={OpenFunction}>

                {(!ouvert) ? <i className="fa-sharp fa-solid fa-bars"></i> : <i className="fa-sharp fa-solid fa-bars fa-rotate-90"></i>}
                {(ouvert) && <span>
                    <ul>
                        <li><a href="#accueil"> Accueil</a></li>
                        <li> <a href='#about'> A propos</a></li>
                        <li><a href='#projet'>Projet</a></li>
                        <li><a href='#contact'> Contact</a></li>
                    </ul>

                </span>}

            </nav>
        </header>
    );
};

export default Header;