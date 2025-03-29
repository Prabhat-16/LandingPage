import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main className="main-content">
          {/* Your page content will go here */}
          <div className="hero-section">
            <div className="hero-content">
              <h1>The future of customer support is here</h1>
              <p>The all-in-one AI-powered business messaging platform that gathers teams, conversations, data and knowledge, around one place.</p>
              <button className="cta-button">Use Crisp for free</button>
              <span className="trial-text">14 days free trial — No commitment</span>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;