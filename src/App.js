
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import IndexPage from './components/Index';
import LoginPage from './components/LoginPage';
import CandidateHomePage from './components/CandidateHomePage';
import "./App.css"
function App() {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={LoginPage} />
                <Route path="/candidate/home" element={CandidateHomePage} />
                <Route exact path="/" element={IndexPage} />
            </Routes>
        </Router>
    );
}

export default App;
