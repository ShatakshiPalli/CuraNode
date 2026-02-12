import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">
                Modern Healthcare
                <span className="gradient-text"> Management System</span>
              </h1>
              <p className="hero-description">
                Streamline clinical workflows, coordinate patient care, and enhance healthcare delivery 
                with our comprehensive digital platform designed for modern medical facilities.
              </p>
              <div className="hero-buttons">
                <Link to="/login" className="btn btn-primary btn-lg">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" strokeWidth="2" strokeLinecap="round"/>
                    <polyline points="10 17 15 12 10 7" strokeWidth="2" strokeLinecap="round"/>
                    <line x1="15" y1="12" x2="3" y2="12" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                  Get Started
                </Link>
                <Link to="/about" className="btn btn-secondary btn-lg">
                  Learn More
                </Link>
              </div>
            </div>
            <div className="hero-image">
              <div className="hero-card">
                <svg width="300" height="300" viewBox="0 0 300 300" fill="none">
                  <rect width="300" height="300" rx="20" fill="url(#gradient1)"/>
                  <circle cx="150" cy="120" r="40" fill="white" opacity="0.9"/>
                  <rect x="80" y="180" width="140" height="8" rx="4" fill="white" opacity="0.8"/>
                  <rect x="80" y="200" width="100" height="8" rx="4" fill="white" opacity="0.6"/>
                  <rect x="80" y="220" width="120" height="8" rx="4" fill="white" opacity="0.4"/>
                  <defs>
                    <linearGradient id="gradient1" x1="0" y1="0" x2="300" y2="300">
                      <stop offset="0%" stopColor="#0066CC"/>
                      <stop offset="100%" stopColor="#00A8A8"/>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <div className="section-header-center">
            <h2>Comprehensive Healthcare Solutions</h2>
            <p>Everything you need to deliver exceptional patient care</p>
          </div>
          
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" strokeWidth="2" strokeLinecap="round"/>
                  <circle cx="9" cy="7" r="4" strokeWidth="2"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <h3>Patient Management</h3>
              <p>Complete patient records, history tracking, and seamless information access for healthcare providers.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Real-time Updates</h3>
              <p>Instant notifications and live updates across all departments for coordinated patient care.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" strokeWidth="2"/>
                  <line x1="16" y1="2" x2="16" y2="6" strokeWidth="2" strokeLinecap="round"/>
                  <line x1="8" y1="2" x2="8" y2="6" strokeWidth="2" strokeLinecap="round"/>
                  <line x1="3" y1="10" x2="21" y2="10" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <h3>Task Scheduling</h3>
              <p>Efficient clinical action management with priority tracking and automated workflows.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Secure & Compliant</h3>
              <p>HIPAA-compliant security measures to protect sensitive patient data and medical records.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" strokeWidth="2"/>
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <line x1="12" y1="22.08" x2="12" y2="12" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <h3>Multi-Department</h3>
              <p>Seamless coordination between doctors, nurses, pharmacy, and diagnostic departments.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <line x1="18" y1="20" x2="18" y2="10" strokeWidth="2" strokeLinecap="round"/>
                  <line x1="12" y1="20" x2="12" y2="4" strokeWidth="2" strokeLinecap="round"/>
                  <line x1="6" y1="20" x2="6" y2="14" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <h3>Analytics & Reports</h3>
              <p>Comprehensive insights and reporting tools to improve healthcare delivery and outcomes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">10K+</div>
              <div className="stat-label">Patients Managed</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">500+</div>
              <div className="stat-label">Healthcare Providers</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">99.9%</div>
              <div className="stat-label">System Uptime</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Transform Your Healthcare Facility?</h2>
            <p>Join hundreds of healthcare providers already using CuraNode to deliver better patient care.</p>
            <Link to="/login" className="btn btn-primary btn-lg">
              Start Using CuraNode Today
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default LandingPage;
