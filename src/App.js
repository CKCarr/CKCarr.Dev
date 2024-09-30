import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CustomNavbar from './components/CustomNavbar';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import AboutMePage from './pages/AboutMePage';
import Footer from './components/Footer';
import './App.css';

import './styles/styles.css';

function App() {
  return (
    <div className="min-h-screen bg-midnightblue text-white">
        <Router>
        <CustomNavbar  />
        <div className='mb-5'></div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/about" element={<AboutMePage />} />
        </Routes>
        <Footer />
      </Router>

    </div>


  );
}

export default App;

