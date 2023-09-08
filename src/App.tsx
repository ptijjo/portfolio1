import React from 'react';
import Home from './pages/Home';
import Loader from './components/Loader';


const App = () => {

  return (
    <>
      <Loader />
      <Home />
    </>
  );
};

export default App;