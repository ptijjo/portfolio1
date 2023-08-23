import React from 'react';
import { useNavigate } from 'react-router-dom';
import MenuMobile from './MenuMobile';

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
            <MenuMobile />
        </div>
    );
};

export default Header;