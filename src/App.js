import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from './components/Header';
import About from './components/About';
import Home from './components/Home';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css'
import './styles/main.css'
import './styles/header.css'





function App() {
  return (
    <Router>
          <div className="d-flex flex-column min-vh-100">
            <Header />
            <main>
              <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
              </Routes>
            </main>
            <Footer />
          </div>
    </Router>

  );
}

export default App;
