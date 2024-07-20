// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/login';
import Whiteboard from './pages/Whiteboard';
import StudentProfile from './pages/StudentProfile';
import ExpertProfile from './pages/ExpertProfile';
import Layout from './Layout';
import Onboarding from './pages/Onboarding';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Onboarding />} />
        <Route path="/home" element={<Layout><Home /></Layout>} />
        <Route path="/login" element={<Layout><Login /></Layout>} />
        <Route path="/whiteboard" element={<Layout><Whiteboard /></Layout>} />
        <Route path="/profile" element={<Layout><StudentProfile /></Layout>} />
        <Route path="/expert-profile" element={<Layout><ExpertProfile /></Layout>} />
      </Routes>
    </Router>
  );
};


export default App;