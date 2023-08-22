import React, { useState } from 'react';

const Loader = () => {


    const [loader, setLoader] = useState(true);

    setInterval(() => {
        setLoader(false)
    }, 4000)

    return (
        <div className={(loader) ? 'loader' : "noloader"}>
            <h1>Ibrahima Bangoura</h1>
            <p>Développeur web javascript - React</p>
        </div>
    );
};

export default Loader;