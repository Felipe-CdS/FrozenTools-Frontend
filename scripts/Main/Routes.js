import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";


import LandingPage from '../Views/LandingPage.js';
import Collections from '../Views/Collections/index.js';
import ProfilePage from '../Views/Profile/index.js';
import NewCollection from '../Views/NewCollection/index.js';
import PremiumPage from '../Views/Premium/index.js';

class RoutesObj extends React.Component {
    render(){
        return(
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/collections" element={<Collections />} />
                    <Route path="/profile" element={<ProfilePage />} />
                    <Route path="/new-collection" element={<NewCollection />} />
                    <Route path="/premium" element={<PremiumPage />} />
                </Routes>
            </BrowserRouter>
        );  
    }
}

export default RoutesObj;