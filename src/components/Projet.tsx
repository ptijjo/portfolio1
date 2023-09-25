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

            <section>
                <h2>{data[projet].titre}</h2>
                <ul>
                    {data[projet].stack.map((stack, index) => (
                        <li key={index}>{stack}</li>
                    ))}
                </ul>
            </section>
            <section>
                <span className='image'>
                    <img src={data[projet].image} alt="projet" />
                    <span className='description'>{data[projet].description}</span>
                </span>
                <div>
                    <p>{data[projet].github}</p>
                    <p>{data[projet].url}</p>
                </div>
            </section>
        </div>
    );
};

export default Projet;