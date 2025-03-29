import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-logo">
            <Link to="/">crisp</Link>
          </div>
          
          <div className="footer-language">
            <button className="language-selector">
              <img src="/us-flag.png" alt="US Flag" />
              English (United States)
            </button>
          </div>
        </div>

        <div className="footer-content">
          <div className="footer-section">
            <h3>Product</h3>
            <ul>
              <li><Link to="/testimonials">Testimonials 4.5★</Link></li>
              <li><Link to="/comparisons">Comparisons</Link></li>
              <li><Link to="/alternatives">Alternatives</Link></li>
              <li><Link to="/integrations">Integrations</Link></li>
              <li><Link to="/developer-hub">Developer Hub</Link></li>
              <li><Link to="/demo">Ask a demo</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Company</h3>
            <ul>
              <li><Link to="/about">About us</Link></li>
              <li><Link to="/contact">Contact us</Link></li>
              <li><Link to="/careers">Careers</Link></li>
              <li><Link to="/brand">Brand Assets</Link></li>
              <li><Link to="/partnerships">Partnerships</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Resources</h3>
            <ul>
              <li><Link to="/blog">Read our blog</Link></li>
              <li><Link to="/help">Help Center</Link></li>
              <li><Link to="/security">Security</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Legal</h3>
            <ul>
              <li><Link to="/terms">Terms of use</Link></li>
              <li><Link to="/privacy">Privacy</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-social">
            <a href="https://facebook.com/crisp" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://twitter.com/crisp" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://youtube.com/crisp" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="https://github.com/crisp" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
          </div>

          <div className="footer-status">
            <Link to="/status">System status</Link>
          </div>

          <div className="footer-copyright">
            © 2025 Crisp IM SAS
          </div>

          <div className="footer-made">
            <span>🇪🇺 Made in Europe</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 