import React, { useState } from 'react';


const Loader = () => {
    const [loader, setLoader] = useState(true);

    setInterval(() => {
        setLoader(false)
    }, 5500);



    return (
        <div className={(loader) ? 'loader' : "noloader"}>
            <h1>Ibrahima Bangoura</h1>
            <p>Développeur web javascript - React / Node</p>
        </div>
    );
};

export default Loader;