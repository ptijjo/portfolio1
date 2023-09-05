import React, { useState } from 'react';

const Wheel = () => {

    let pageCourante: number = 0;
    const [etat, setEtat] = useState(pageCourante);

    const handleWheel = (e: any) => {
        // Déterminez si la roulette de la souris va vers le haut ou vers le bas
        const delta: number = e.deltaY;

        // Si la roulette va vers le bas (delta positif), passez à la page suivante
        if (delta > 0) { setEtat(++pageCourante) };

        // Si la roulette va vers le haut (delta négatif), passez à la page précédente
        if (delta < 0 && etat > 1) {
            setEtat(--pageCourante)
        }


    }


    console.log(etat)


    return (
        <div onWheel={handleWheel}>

        </div>
    );
};

export default Wheel;