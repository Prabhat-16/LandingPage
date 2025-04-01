import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          crisp
        </Link>
        
        <div className="nav-menu">
          <div className="nav-item has-submenu">
            <Link to="/features" className="nav-link">
              Features <span className="dropdown-arrow">▼</span>
            </Link>
            <div className="submenu">
              <div className="submenu-items">
                <Link to="/widget" className="submenu-item">
                  <i className="fas fa-comment"></i>
                  <div>
                    <span>Widget</span>
                    <p>Live chat & chatbot for your website</p>
                  </div>
                </Link>
                <Link to="/ai-chatbot" className="submenu-item">
                  <i className="fas fa-robot"></i>
                  <div>
                    <span>AI Chatbot</span>
                    <p>Train AI to answer questions</p>
                  </div>
                </Link>
                <Link to="/crm" className="submenu-item">
                  <i className="fas fa-users"></i>
                  <div>
                    <span>CRM</span>
                    <p>Manage your contacts</p>
                  </div>
                </Link>
                <Link to="/shared-inbox" className="submenu-item">
                  <i className="fas fa-inbox"></i>
                  <div>
                    <span>Shared Inbox</span>
                    <p>Collaborate with your team</p>
                  </div>
                </Link>
                <Link to="/ai" className="submenu-item">
                  <i className="fas fa-brain"></i>
                  <div>
                    <span>AI</span>
                    <p>AI-powered assistance</p>
                  </div>
                </Link>
                <Link to="/campaigns" className="submenu-item">
                  <i className="fas fa-bullhorn"></i>
                  <div>
                    <span>Campaigns</span>
                    <p>Engage with your customers</p>
                  </div>
                </Link>
                <Link to="/knowledge" className="submenu-item">
                  <i className="fas fa-book"></i>
                  <div>
                    <span>Knowledge</span>
                    <p>Create help articles</p>
                  </div>
                </Link>
                <Link to="/ticketing" className="submenu-item">
                  <i className="fas fa-ticket-alt"></i>
                  <div>
                    <span>Ticketing system</span>
                    <p>Manage support tickets</p>
                  </div>
                </Link>
                <Link to="/status" className="submenu-item">
                  <i className="fas fa-signal"></i>
                  <div>
                    <span>Status Page</span>
                    <p>Show your uptime status</p>
                  </div>
                </Link>
                <Link to="/sdk" className="submenu-item">
                  <i className="fas fa-code"></i>
                  <div>
                    <span>Chat SDK</span>
                    <p>Build custom experiences</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="nav-item">
            <Link to="/apps" className="nav-link">Apps</Link>
          </div>
          <div className="nav-item">
            <Link to="/pricing" className="nav-link">Pricing</Link>
          </div>
          <div className="nav-item">
            <Link to="/integrations" className="nav-link">Integrations</Link>
          </div>
          <div className="nav-item">
            <Link to="/help" className="nav-link">
              Help <span className="dropdown-arrow">▼</span>
            </Link>
          </div>
        </div>

        <div className="nav-auth">
          <div className="search-box">
            <input type="text" placeholder="Search our website" />
            <span className="shortcut-hint">ctrl+k</span>
          </div>
          {/* <Link to="/login" className="nav-login">Log In</Link>
          <Link to="/trial" className="nav-trial-btn">Start Free Trial</Link> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 