import React, { useState } from 'react';
import data from "../data/Data";



const Projet = () => {

    // on initialise l'index de notre tableau de données à 0
    let [projet, setProjet] = useState(0);

    const handleClick = () => {

        setProjet(prevEtat => (prevEtat + 1));

        if (projet >= data.length - 1) setProjet(0);
    }


    return (
        <div className='projet' id='projet' onClick={handleClick}>

            <span className='image'>
                <img src={data[projet].image} alt="projet" />
                <span className='description'>{data[projet].description}</span>
            </span>

        </div>
    );
};

export default Projet;