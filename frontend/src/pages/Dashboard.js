import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../utils/AuthContext';
import { patients, actions } from '../utils/api';
import {
  joinRoleRoom,
  onActionUpdate,
  getSocket,
} from '../utils/socket';
import '../styles/index.css';

// Stats Card Component
const StatCard = ({ icon, label, value, trend, color }) => (
  <div style={{
    background: 'var(--white)',
    borderRadius: 'var(--radius-lg)',
    padding: 'var(--spacing-xl)',
    display: 'flex',
    alignItems: 'flex-start',
    gap: 'var(--spacing-lg)',
    borderLeft: `4px solid ${color === 'green' ? 'var(--success)' : color === 'warning' ? 'var(--warning)' : 'var(--primary-blue)'}`,
    transition: 'all var(--transition-base)',
    boxShadow: 'var(--shadow-md)',
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.transform = 'translateY(-2px)';
    e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform = 'translateY(0)';
    e.currentTarget.style.boxShadow = 'var(--shadow-md)';
  }}
  >
    <div style={{
      width: '56px',
      height: '56px',
      borderRadius: 'var(--radius-lg)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
      fontSize: '28px',
      background: color === 'green' ? '#D4EDDA' : color === 'warning' ? '#FFF3CD' : 'var(--primary-blue-light)',
      color: color === 'green' ? 'var(--success)' : color === 'warning' ? 'var(--warning)' : 'var(--primary-blue)',
    }}>
      {icon}
    </div>
    <div style={{ flex: 1 }}>
      <div style={{
        fontSize: 'var(--font-size-sm)',
        color: 'var(--gray-600)',
        marginBottom: 'var(--spacing-xs)',
        fontWeight: '500',
        textTransform: 'uppercase',
        letterSpacing: '0.5px',
      }}>
        {label}
      </div>
      <div style={{
        fontSize: 'var(--font-size-3xl)',
        fontWeight: '700',
        color: 'var(--gray-900)',
        marginBottom: 'var(--spacing-xs)',
      }}>
        {value}
      </div>
      {trend && (
        <div style={{
          fontSize: 'var(--font-size-xs)',
          color: trend.positive ? 'var(--success)' : 'var(--error)',
        }}>
          {trend.positive ? '↑' : '↓'} {trend.text}
        </div>
      )}
    </div>
  </div>
);

// Action Card Component with Medical Design
const ActionCard = ({ action }) => {
  const getPriorityIcon = (priority) => {
    const icons = {
      'low': '🟢',
      'medium': '🟡',
      'high': '🟠',
      'urgent': '🔴',
    };
    return icons[priority] || '🔵';
  };

  const getStatusIcon = (status) => {
    const icons = {
      'pending': '⏳',
      'in-progress': '⚙️',
      'completed': '✅',
      'cancelled': '❌',
    };
    return icons[status] || '📋';
  };

  return (
    <div style={{
      background: 'var(--white)',
      border: '1px solid var(--gray-200)',
      borderRadius: 'var(--radius-lg)',
      padding: 'var(--spacing-lg)',
      marginBottom: 'var(--spacing-md)',
      borderLeft: `4px solid ${
        action.priority === 'urgent' ? 'var(--error)' :
        action.priority === 'high' ? 'var(--warning)' :
        action.priority === 'medium' ? 'var(--info)' :
        'var(--gray-400)'
      }`,
      transition: 'all var(--transition-base)',
      backgroundColor: action.priority === 'urgent' ? 'rgba(231, 76, 60, 0.02)' : 'var(--white)',
      boxShadow: 'var(--shadow-sm)',
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = 'translateX(4px)';
      e.currentTarget.style.boxShadow = 'var(--shadow-md)';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = 'translateX(0)';
      e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
    }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: 'var(--spacing-sm)' }}>
        <h4 style={{ margin: '0', fontSize: 'var(--font-size-base)', fontWeight: '600', color: 'var(--gray-900)' }}>
          {action.title}
        </h4>
        <div style={{ display: 'flex', gap: 'var(--spacing-sm)' }}>
          <span className={`badge badge-${
            action.status === 'completed' ? 'success' :
            action.status === 'in-progress' ? 'info' :
            action.status === 'pending' ? 'warning' : 'danger'
          }`}>
            {getStatusIcon(action.status)} {action.status}
          </span>
          <span className={`badge badge-${
            action.priority === 'urgent' ? 'danger' :
            action.priority === 'high' ? 'warning' :
            action.priority === 'medium' ? 'info' : 'secondary'
          }`} style={{
            background: action.priority === 'urgent' ? '#F8D7DA' :
              action.priority === 'high' ? '#FFF3CD' :
              action.priority === 'medium' ? '#D1ECF1' : 'var(--gray-200)',
            color: action.priority === 'urgent' ? '#721C24' :
              action.priority === 'high' ? '#856404' :
              action.priority === 'medium' ? '#0C5460' : 'var(--gray-700)',
          }}>
            {getPriorityIcon(action.priority)} {action.priority}
          </span>
        </div>
      </div>
      <p style={{ margin: 'var(--spacing-sm) 0', fontSize: 'var(--font-size-sm)', color: 'var(--gray-600)', lineHeight: '1.5' }}>
        {action.description}
      </p>
      <div style={{
        fontSize: 'var(--font-size-sm)',
        color: 'var(--gray-500)',
        marginTop: 'var(--spacing-md)',
        paddingTop: 'var(--spacing-md)',
        borderTop: '1px solid var(--gray-200)',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
        gap: 'var(--spacing-sm)',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-xs)' }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" strokeWidth="2" strokeLinecap="round"/>
          </svg>
          <span style={{ fontWeight: '500' }}>{action.actionType}</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-xs)' }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" strokeWidth="2" strokeLinecap="round"/>
          </svg>
          <span style={{ fontWeight: '500' }}>{action.departmentAssigned}</span>
        </div>
      </div>
    </div>
  );
};

// Doctor Dashboard Component with Health Overview
const DoctorDashboard = () => {
  const [patientsList, setPatientsList] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const loadPatients = async () => {
    setLoading(true);
    try {
      const response = await patients.getAll();
      setPatientsList(response.data);
    } catch (err) {
      console.error('Failed to load patients:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadPatients();
    const socket = getSocket();
    if (socket) {
      socket.on('patient-updated', loadPatients);
    }
    return () => {
      if (socket) socket.off('patient-updated');
    };
  }, []);

  const activePatients = patientsList.filter(p => p.status === 'Active').length;
  const criticalPatients = Math.floor(patientsList.length * 0.15); // Simulated

  return (
    <div style={{ padding: 'var(--spacing-xl)', maxWidth: '1400px', margin: '0 auto', background: 'var(--gray-50)', minHeight: 'calc(100vh - 100px)' }}>
      {/* Header with Quick Stats */}
      <div style={{ marginBottom: 'var(--spacing-2xl)' }}>
        <h2 style={{ marginBottom: 'var(--spacing-xl)', color: 'var(--gray-900)', fontSize: 'var(--font-size-2xl)', fontWeight: '700', display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)' }}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" strokeWidth="2" strokeLinecap="round"/>
            <circle cx="8.5" cy="7" r="4" strokeWidth="2"/>
            <polyline points="17 11 19 13 23 9" strokeWidth="2" strokeLinecap="round"/>
          </svg>
          Doctor Patient Dashboard
        </h2>

        {/* Stats Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: 'var(--spacing-lg)',
          marginBottom: 'var(--spacing-xl)',
        }}>
          <StatCard
            icon="👥"
            label="Total Patients"
            value={patientsList.length}
            color="green"
            trend={{ positive: true, text: '12% increase' }}
          />
          <StatCard
            icon="✅"
            label="Active Patients"
            value={activePatients}
            color="blue"
            trend={{ positive: true, text: 'This week' }}
          />
          <StatCard
            icon="🚨"
            label="Requiring Attention"
            value={criticalPatients}
            color="warning"
            trend={{ positive: false, text: 'Priority cases' }}
          />
          <StatCard
            icon="📊"
            label="Avg Compliance"
            value="92%"
            color="green"
            trend={{ positive: true, text: 'Above target' }}
          />
        </div>
      </div>

      {/* Patient List Section */}
      <div className="card">
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 'var(--spacing-xl)',
          paddingBottom: 'var(--spacing-md)',
          borderBottom: '2px solid var(--gray-200)',
        }}>
          <h3 style={{ margin: '0', color: 'var(--gray-900)', fontSize: 'var(--font-size-xl)', fontWeight: '600' }}>My Patients</h3>
          <button
            onClick={() => navigate('/create-patient')}
            className="btn btn-primary"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M12 5v14M5 12h14" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            Create New Patient
          </button>
        </div>

        {loading ? (
          <div className="spinner-container">
            <div className="spinner"></div>
          </div>
        ) : (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '16px',
          }}>
            {patientsList.map((patient) => (
              <div
                key={patient._id}
                className="patient-card"
                onClick={() => navigate(`/patient/${patient._id}`)}
                style={{ cursor: 'pointer' }}
              >
                <div className="patient-card-header">
                  <div className="patient-avatar">
                    {patient.firstName?.[0]}{patient.lastName?.[0]}
                  </div>
                  <div className="patient-info">
                    <h4>{patient.firstName} {patient.lastName}</h4>
                    <p>🆔 {patient.medicalRecordNumber}</p>
                  </div>
                </div>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '12px',
                  fontSize: '12px',
                  marginTop: '16px',
                  paddingTop: '16px',
                  borderTop: '1px solid var(--gray-100)',
                }}>
                  <div>
                    <span style={{ color: 'var(--gray-400)', fontSize: '11px' }}>Gender</span>
                    <p style={{ margin: '4px 0', fontWeight: '600', color: 'var(--gray-600)' }}>
                      {patient.gender === 'M' ? '👨' : '👩'} {patient.gender}
                    </p>
                  </div>
                  <div>
                    <span style={{ color: 'var(--gray-400)', fontSize: '11px' }}>Blood Type</span>
                    <p style={{ margin: '4px 0', fontWeight: '600', color: 'var(--danger)' }}>
                      {patient.bloodType || 'N/A'}
                    </p>
                  </div>
                </div>
                <div style={{ marginTop: '12px' }}>
                  <span style={{
                    display: 'inline-block',
                    padding: '6px 12px',
                    borderRadius: '20px',
                    fontSize: '11px',
                    fontWeight: '600',
                    backgroundColor: patient.status === 'Active' ? '#d1fae5' : '#fee2e2',
                    color: patient.status === 'Active' ? '#065f46' : '#7f1d1d',
                  }}>
                    {patient.status === 'Active' ? '🟢' : '⚪'} {patient.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

        {!loading && patientsList.length === 0 && (
          <div style={{
            textAlign: 'center',
            padding: '60px 20px',
            color: 'var(--gray-400)',
          }}>
            <div style={{ fontSize: '48px', marginBottom: '16px' }}>👥</div>
            <p style={{ fontSize: '16px', margin: '0' }}>No patients yet</p>
            <p style={{ fontSize: '14px', color: 'var(--gray-400)', marginTop: '8px' }}>
              Create a new patient to get started with managing their care
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

// Department Dashboard Component with Action Management
const DepartmentDashboard = () => {
  const { user } = useAuth();
  const [actionsList, setActionsList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState('all');

  const loadActions = async () => {
    setLoading(true);
    try {
      const response = await actions.getAll();
      setActionsList(response.data);
    } catch (err) {
      console.error('Failed to load actions:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    joinRoleRoom();
    loadActions();

    const socket = getSocket();
    if (socket) {
      onActionUpdate((updatedAction) => {
        setActionsList((prev) =>
          prev.map((a) => (a._id === updatedAction._id ? updatedAction : a))
        );
      });
    }
    return () => {
      if (socket) socket.off('action-updated');
    };
  }, []);

  const statusCounts = {
    pending: actionsList.filter((a) => a.status === 'pending').length,
    'in-progress': actionsList.filter((a) => a.status === 'in-progress').length,
    completed: actionsList.filter((a) => a.status === 'completed').length,
    cancelled: actionsList.filter((a) => a.status === 'cancelled').length,
  };

  const filteredActions = actionsList.filter(
    (action) => selectedStatus === 'all' || action.status === selectedStatus
  );

  return (
    <div style={{ padding: 'var(--spacing-xl)', maxWidth: '1400px', margin: '0 auto', background: 'var(--gray-50)', minHeight: 'calc(100vh - 100px)' }}>
      <h2 style={{ marginBottom: 'var(--spacing-xl)', color: 'var(--gray-900)', fontSize: 'var(--font-size-2xl)', fontWeight: '700', display: 'flex', alignItems: 'center', gap: 'var(--spacing-sm)' }}>
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" strokeWidth="2" strokeLinecap="round"/>
        </svg>
        {user?.role.toUpperCase().replace('-', ' ')} Department
      </h2>

      {/* Stats Cards */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gap: 'var(--spacing-lg)',
        marginBottom: 'var(--spacing-xl)',
      }}>
        <StatCard
          icon="⏳"
          label="Pending"
          value={statusCounts.pending}
          color="warning"
        />
        <StatCard
          icon="⚙️"
          label="In Progress"
          value={statusCounts['in-progress']}
          color="blue"
        />
        <StatCard
          icon="✅"
          label="Completed"
          value={statusCounts.completed}
          color="green"
        />
        <StatCard
          icon="❌"
          label="Cancelled"
          value={statusCounts.cancelled}
          color="blue"
        />
      </div>

      {/* Filter Buttons */}
      <div className="card" style={{ marginBottom: 'var(--spacing-lg)', padding: 'var(--spacing-lg)' }}>
        <div style={{
          display: 'flex',
          gap: 'var(--spacing-sm)',
          flexWrap: 'wrap',
        }}>
          {['all', 'pending', 'in-progress', 'completed', 'cancelled'].map((status) => (
            <button
              key={status}
              onClick={() => setSelectedStatus(status)}
              className={selectedStatus === status ? 'btn btn-primary btn-sm' : 'btn btn-secondary btn-sm'}
            >
              {status.charAt(0).toUpperCase() + status.slice(1).replace('-', ' ')}
            </button>
          ))}
        </div>
      </div>

      {/* Actions List */}
      <div className="card">{loading ? (
          <div className="spinner-container">
            <div className="spinner"></div>
          </div>
        ) : filteredActions.length > 0 ? (
          filteredActions.map((action) => (
            <ActionCard key={action._id} action={action} />
          ))
        ) : (
          <div style={{
            textAlign: 'center',
            padding: 'var(--spacing-2xl) var(--spacing-lg)',
            color: 'var(--gray-400)',
          }}>
            <div style={{ fontSize: '48px', marginBottom: 'var(--spacing-md)' }}>📭</div>
            <p style={{ fontSize: 'var(--font-size-lg)', margin: '0', color: 'var(--gray-600)' }}>No {selectedStatus} actions</p>
            <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--gray-500)', marginTop: 'var(--spacing-sm)' }}>
              All tasks for this status have been completed!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

// Main Dashboard Component
const Dashboard = () => {
  const { user } = useAuth();

  if (user?.role === 'doctor') {
    return <DoctorDashboard />;
  }

  return <DepartmentDashboard />;
};

export default Dashboard;
