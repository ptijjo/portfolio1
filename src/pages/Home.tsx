import React from 'react';
import Header from '../components/Header';
const avatar = require("../assets/_DSC4349 (5).JPG");


const Home = () => {

    return (
        <div className='home'>
            <Header />
            <div className='maphoto'>
                <img src={avatar} alt="ibahima Bangoura" />
            </div>
        </div>
    );
};

export default Home;