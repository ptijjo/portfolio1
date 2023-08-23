import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {

    const navigate = useNavigate();


    return (
        <div className='header'>
            <p onClick={() => (navigate("/"))}>Ibrahima BANGOURA</p>
            <nav>
                <ul>
                    <li onClick={() => (navigate("/home"))}>Accueil</li>
                    <li>Projet</li>
                    <li onClick={() => (navigate("/contact"))}>Contact</li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;