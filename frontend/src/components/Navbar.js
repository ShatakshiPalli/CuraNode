import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../utils/AuthContext';
import './Navbar.css';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { isAuthenticated } = useAuth();

  // Don't show navbar on dashboard pages if authenticated
  if (isAuthenticated && location.pathname !== '/') {
    return null;
  }

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-content">
          {/* Logo */}
          <Link to="/" className="navbar-brand">
            <div className="brand-logo">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <rect width="40" height="40" rx="8" fill="var(--primary-blue)"/>
                <path d="M20 12V28M12 20H28" stroke="white" strokeWidth="3" strokeLinecap="round"/>
              </svg>
            </div>
            <span className="brand-name">CuraNode</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="navbar-menu">
            <Link to="/" className={`nav-link ${isActive('/')}`}>
              Home
            </Link>
            <Link to="/about" className={`nav-link ${isActive('/about')}`}>
              About Us
            </Link>
            <Link to="/contact" className={`nav-link ${isActive('/contact')}`}>
              Connect With Us
            </Link>
            <Link to="/login" className="btn btn-primary">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" strokeWidth="2" strokeLinecap="round"/>
                <polyline points="10 17 15 12 10 7" strokeWidth="2" strokeLinecap="round"/>
                <line x1="15" y1="12" x2="3" y2="12" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              Login
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="mobile-menu-btn"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <line x1="18" y1="6" x2="6" y2="18" strokeWidth="2" strokeLinecap="round"/>
                <line x1="6" y1="6" x2="18" y2="18" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <line x1="3" y1="12" x2="21" y2="12" strokeWidth="2" strokeLinecap="round"/>
                <line x1="3" y1="6" x2="21" y2="6" strokeWidth="2" strokeLinecap="round"/>
                <line x1="3" y1="18" x2="21" y2="18" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="mobile-menu">
            <Link 
              to="/" 
              className={`mobile-nav-link ${isActive('/')}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" strokeWidth="2"/>
                <polyline points="9 22 9 12 15 12 15 22" strokeWidth="2"/>
              </svg>
              Home
            </Link>
            <Link 
              to="/about" 
              className={`mobile-nav-link ${isActive('/about')}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <circle cx="12" cy="12" r="10" strokeWidth="2"/>
                <line x1="12" y1="16" x2="12" y2="12" strokeWidth="2" strokeLinecap="round"/>
                <line x1="12" y1="8" x2="12.01" y2="8" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              About Us
            </Link>
            <Link 
              to="/contact" 
              className={`mobile-nav-link ${isActive('/contact')}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" strokeWidth="2"/>
                <polyline points="22,6 12,13 2,6" strokeWidth="2"/>
              </svg>
              Connect With Us
            </Link>
            <Link 
              to="/login" 
              className="mobile-nav-link login-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" strokeWidth="2" strokeLinecap="round"/>
                <polyline points="10 17 15 12 10 7" strokeWidth="2" strokeLinecap="round"/>
                <line x1="15" y1="12" x2="3" y2="12" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              Login
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
