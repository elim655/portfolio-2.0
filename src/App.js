import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Skills from './components/Skills';
import Leadership from './components/Leadership';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/portfolio-2.0" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/leadership" element={<Leadership />} />
      </Routes>
    </Router>
  );
}

export default App;