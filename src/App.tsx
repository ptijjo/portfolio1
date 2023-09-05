import React from 'react';
import Home from './pages/Home';
import Loader from './components/Loader';


const App = () => {

  //let pageCourante: number = 1;
  // const [etat, setEtat] = useState(pageCourante);

  /* const handleWheel = (e: any) => {
     // Déterminez si la roulette de la souris va vers le haut ou vers le bas
     const delta: number = e.deltaY;
 
     // Si la roulette va vers le bas (delta positif), passez à la page suivante
     if (delta > 0) { setEtat(prevEtat => (prevEtat + 1)) };
 
     // Si la roulette va vers le haut (delta négatif), passez à la page précédente
     if (delta < 0 && etat > 1) {
       setEtat(prevEtat => (prevEtat - 1))
     }
 
   }*/
  return (
    <>
      <Loader />
      <Home />
    </>


  );
};

export default App;