import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import ErrorPage from '../pages/ErrorPage';
import Contact from '../pages/Contact';
import Loader from '../pages/Loader';

const RouterDom = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Loader />} />
                <Route path='/home' element={<Home />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='*' element={<ErrorPage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default RouterDom;