import React, { useState } from 'react';
import Header from '../components/Header';
import Accueil from '../components/Accueil';
import Social from '../components/Social';
import About from '../components/About';
import Projet from '../components/Projet';
import Contact from '../components/Contact';



const Home = () => {




    const [loader, setLoader] = useState(false);

    setInterval(() => {
        setLoader(true)
    }, 5500);


    return (
        <main className={(!loader) ? "notHome" : 'home'}>

            <Header />
            <Accueil />
            <Social />
            <About />
            <Projet />
            <Contact />
        </main>
    );
};

export default Home;