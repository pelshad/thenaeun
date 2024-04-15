import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Main from '../pages/Main';
import Child from '../pages/clinic/Child';
import Teenager from '../pages/clinic/Teenager';
import Vaccination from '../pages/clinic/Vaccination';
import Come from '../pages/come/Come';
import Allergy from '../pages/diagnosis/Allergy';
import Digestion from '../pages/diagnosis/Digestion';
import Kideys from '../pages/diagnosis/Kideys';
import Obesity from '../pages/diagnosis/Obesity';
import Sap from '../pages/diagnosis/Sap';
import Intro from '../pages/intro/Intro';

const App = () => {
    return (
        <div className='App'>
            <Header />
                <Routes>
                        <Route path="/*" element={<Main />} />
                        <Route path="/clinic/child" element={<Child />} />
                        <Route path="/clinic/teenager" element={<Teenager />} />
                        <Route path="/clinic/vaccination" element={<Vaccination />} />
                        <Route path="/come" element={<Come />} />
                        <Route path="/diagnosis/allergy" element={<Allergy />} />
                        <Route path="/diagnosis/digestion" element={<Digestion />} />
                        <Route path="/diagnosis/kideys" element={<Kideys />} />
                        <Route path="/diagnosis/obesity" element={<Obesity />} />
                        <Route path="/diagnosis/sap" element={<Sap />} />
                        <Route path="/intro" element={<Intro />} />

                </Routes>
            <Footer />
        </div>
    );
};

export default App;