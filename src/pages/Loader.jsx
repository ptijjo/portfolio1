import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Loader = () => {
    const [loader, setLoader] = useState(true);
    const navigate = useNavigate()

    setInterval(() => {
        setLoader(false)
    }, 5000);

    navigate("/home")

    return (
        <div className={(loader) ? 'loader' : "noloader"}>
            <h1>Ibrahima Bangoura</h1>
            <p>Développeur web javascript - React</p>
        </div>
    );
};

export default Loader;