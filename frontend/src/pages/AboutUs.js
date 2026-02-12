import React from 'react';
import Footer from '../components/Footer';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <div className="about-hero-content">
            <h1>About CuraNode</h1>
            <p>Revolutionizing healthcare management through innovative technology</p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="container">
          <div className="mission-content">
            <div className="mission-text">
              <h2>Our Mission</h2>
              <p>
                At CuraNode, we're committed to transforming healthcare delivery by providing 
                cutting-edge digital solutions that empower medical professionals to deliver 
                exceptional patient care. Our mission is to make healthcare more efficient, 
                accessible, and coordinated through innovative technology.
              </p>
              <p>
                We believe that by streamlining clinical workflows and enabling real-time 
                collaboration, we can help healthcare providers focus on what matters most: 
                their patients.
              </p>
            </div>
            <div className="mission-image">
              <div className="mission-card">
                <svg width="100%" height="300" viewBox="0 0 400 300" fill="none">
                  <rect width="400" height="300" rx="12" fill="url(#missionGradient)"/>
                  <circle cx="200" cy="150" r="60" fill="white" opacity="0.2"/>
                  <circle cx="200" cy="150" r="40" fill="white" opacity="0.3"/>
                  <circle cx="200" cy="150" r="20" fill="white" opacity="0.5"/>
                  <defs>
                    <linearGradient id="missionGradient" x1="0" y1="0" x2="400" y2="300">
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

      {/* Values Section */}
      <section className="values-section">
        <div className="container">
          <div className="section-header-center">
            <h2>Our Core Values</h2>
            <p>The principles that guide everything we do</p>
          </div>
          
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeWidth="2"/>
                </svg>
              </div>
              <h3>Security First</h3>
              <p>We prioritize the protection of sensitive patient data with industry-leading security measures and HIPAA compliance.</p>
            </div>

            <div className="value-card">
              <div className="value-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" strokeWidth="2"/>
                  <line x1="7" y1="7" x2="7.01" y2="7" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <h3>Innovation</h3>
              <p>Continuously evolving our platform with the latest technology to meet the changing needs of healthcare.</p>
            </div>

            <div className="value-card">
              <div className="value-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" strokeWidth="2"/>
                  <circle cx="9" cy="7" r="4" strokeWidth="2"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" strokeWidth="2"/>
                </svg>
              </div>
              <h3>Collaboration</h3>
              <p>Fostering seamless communication and coordination between healthcare teams and departments.</p>
            </div>

            <div className="value-card">
              <div className="value-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <polyline points="20 6 9 17 4 12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Excellence</h3>
              <p>Committed to delivering the highest quality solutions that exceed expectations and improve outcomes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="container">
          <div className="section-header-center">
            <h2>Built by Healthcare Experts</h2>
            <p>Our team combines medical expertise with technical innovation</p>
          </div>
          
          <div className="team-stats">
            <div className="team-stat">
              <div className="team-stat-number">15+</div>
              <div className="team-stat-label">Years Combined Healthcare Experience</div>
            </div>
            <div className="team-stat">
              <div className="team-stat-number">50+</div>
              <div className="team-stat-label">Healthcare Facilities Served</div>
            </div>
            <div className="team-stat">
              <div className="team-stat-number">100%</div>
              <div className="team-stat-label">Customer Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="technology-section">
        <div className="container">
          <div className="tech-content">
            <div className="tech-text">
              <h2>Cutting-Edge Technology</h2>
              <p>
                CuraNode is built using modern, scalable architecture designed to handle 
                the demanding requirements of healthcare environments. Our platform leverages:
              </p>
              <ul className="tech-list">
                <li>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <polyline points="20 6 9 17 4 12" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                  Real-time data synchronization across all departments
                </li>
                <li>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <polyline points="20 6 9 17 4 12" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                  Cloud-based infrastructure for 99.9% uptime
                </li>
                <li>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <polyline points="20 6 9 17 4 12" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                  Advanced encryption and security protocols
                </li>
                <li>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <polyline points="20 6 9 17 4 12" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                  Mobile-responsive design for access anywhere
                </li>
                <li>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <polyline points="20 6 9 17 4 12" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                  Intuitive user interface designed for healthcare professionals
                </li>
              </ul>
            </div>
            <div className="tech-image">
              <div className="tech-badge">
                <div className="badge-item">HIPAA Compliant</div>
                <div className="badge-item">ISO Certified</div>
                <div className="badge-item">SOC 2 Type II</div>
                <div className="badge-item">HL7 Compatible</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default AboutUs;
