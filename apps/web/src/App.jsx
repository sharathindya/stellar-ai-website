import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import CareersPage from './pages/CareersPage';
import { CurrencyProvider } from './contexts/CurrencyContext';

function App() {
    return (
        <CurrencyProvider>
            <Router>
                <ScrollToTop />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/careers" element={<CareersPage />} />
                </Routes>
            </Router>
        </CurrencyProvider>
    );
}

export default App;
