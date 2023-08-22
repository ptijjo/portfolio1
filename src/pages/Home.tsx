import React from 'react';
import Loader from '../components/Loader';
import Header from '../components/Header';


const Home = () => {


    return (
        <div className='home'>
            <Loader />
            <Header />
        </div>
    );
};

export default Home;