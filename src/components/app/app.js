import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import Nav from '../nav/Nav';
import Loading from '../loading/Loading';
import Footer from '../footer/Footer';

import MainPage from '../pages/MainPage';
const OurCoffeePage = lazy(() => import('../pages/OurCoffeePage'));
const SinglePage = lazy(() => import('../pages/SinglePage'));
const GoodCoffeePage = lazy(() => import('../pages/GoodCoffeePage'));

const App = () => {
    return (
        <>
            <Nav type="header"/>
            <Suspense fallback={<Loading />}>
                <Routes>
                    <Route path="/" element={<MainPage />}/>
                    <Route path="/about" element={<OurCoffeePage />}/>
                    <Route path="/about/:id" element={<SinglePage />}/>
                    <Route path="/goodscoffe" element={<GoodCoffeePage />}/>
                </Routes>
            </Suspense>
            <Footer/>
        </>
    );
}

export default App;