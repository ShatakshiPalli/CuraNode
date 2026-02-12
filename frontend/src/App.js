import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './utils/AuthContext';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import PatientDetail from './pages/PatientDetail';
import CreatePatient from './pages/CreatePatient';
import './styles/index.css';
import './styles/App.css';

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return <div style={{ padding: '40px 20px', textAlign: 'center' }}>
      <div className="spinner" style={{ margin: '0 auto' }}></div>
    </div>;
  }

  return isAuthenticated ? children : <Navigate to="/login" />;
};

const App = () => {
  const { user } = useAuth();

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/login';
  };

  return (
    <Router>
      <Navbar />
      
      {user && (
        <header className="app-header">
          <div className="container">
            <div className="header-content">
              <div className="brand">
                <div className="brand-icon">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <rect width="40" height="40" rx="8" fill="var(--primary-blue)"/>
                    <path d="M20 12V28M12 20H28" stroke="white" strokeWidth="3" strokeLinecap="round"/>
                  </svg>
                </div>
                <div>
                  <h1 className="brand-title">CuraNode</h1>
                  <p className="brand-subtitle">Healthcare Management Portal</p>
                </div>
              </div>
              <nav className="header-nav">
                <div className="user-profile">
                  <div className="user-avatar">
                    {user.firstName?.[0]}{user.lastName?.[0]}
                  </div>
                  <div className="user-info">
                    <div className="user-name">
                      {user.firstName} {user.lastName}
                    </div>
                    <div className="user-role">
                      {user.role}
                    </div>
                  </div>
                </div>
                <button onClick={handleLogout} className="btn btn-secondary">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" strokeWidth="2" strokeLinecap="round"/>
                    <polyline points="16 17 21 12 16 7" strokeWidth="2" strokeLinecap="round"/>
                    <line x1="21" y1="12" x2="9" y2="12" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                  Logout
                </button>
              </nav>
            </div>
          </div>
        </header>
      )}

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/patient/:patientId"
          element={
            <ProtectedRoute>
              <PatientDetail />
            </ProtectedRoute>
          }
        />
        <Route
          path="/create-patient"
          element={
            <ProtectedRoute>
              <CreatePatient />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
