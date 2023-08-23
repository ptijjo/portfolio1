import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MenuMobile = () => {

    const navigate = useNavigate()

    const [ouvert, setOuvert] = useState(false);

    const OpenFunction = () => {
        (ouvert) ? setOuvert(false) : setOuvert(true)
    };


    return (
        <div className='menuMobile'>
            <div className='btnMenu' onClick={OpenFunction}>
                {(!ouvert) ? <i className="fa-sharp fa-solid fa-bars"></i> : <i className="fa-sharp fa-solid fa-bars fa-rotate-90"></i>}
                {(ouvert) && <span>
                    <ul>
                        <li onClick={() => (navigate("/home"))}>Accueil</li>
                        <li>Projet</li>
                        <li onClick={() => (navigate("/contact"))}>Contact</li>
                    </ul>

                </span>}
            </div>
        </div>
    );
};

export default MenuMobile;