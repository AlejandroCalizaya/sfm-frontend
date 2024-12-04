import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Background from './components/Background';

import Home from './components/Home';
import Manual from './components/Manual';
import Results from './components/Results';

function App() {
  return (
    <Router> {/* Envuelve toda la aplicación en Router */}
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/manual" element={<Manual />} />
        <Route path="/results" element={<Results />} />
      </Routes>
      <Background />
    </Router>
  );
}

export default App;
