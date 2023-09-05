import React, { useEffect } from 'react';

const EffetSouris = () => {

    useEffect(() => {
        const curseur: HTMLElement | null = document.querySelector(".effetSouris");

        window.addEventListener("mousemove", (e: MouseEvent) => {
            if (curseur) {
                curseur.style.top = e.y + "px";
                curseur.style.left = e.x + "px";
            }
        })

    }, [])






    return (
        <div className='effetSouris'>

        </div>
    );
};

export default EffetSouris;