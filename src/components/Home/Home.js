import React from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';

const Home = ({ userDetails, onLogout }) => {
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    onLogout();
    navigate('/');
  };

  const handleDashboardClick = () => {
    // Navigate to the dashboard section (or handle it accordingly)
  };

  const handlePayslipsClick = () => {
    // Navigate to the payslips section (or handle it accordingly)
  };

  const handleEmployeeDetailsClick = () => {
    // Navigate to the employee details section (or handle it accordingly)
  };

  if (!userDetails) {
    navigate('/');
    return null;
  }

  return (
    <div className="home-container">
      <h2>Welcome, {userDetails.username}</h2>
      <p>Role: {userDetails.role}</p>
      <div className="dashboard">
        <button className="dashboard-button" onClick={handleDashboardClick}>
          Dashboard
        </button>
        <button className="dashboard-button" onClick={handlePayslipsClick}>
          Payslips
        </button>
        <button className="dashboard-button" onClick={handleEmployeeDetailsClick}>
          Employee Details
        </button>
      </div>
      <button className="logout-button" onClick={handleLogoutClick}>
        Logout
      </button>
    </div>
  );
};

export default Home;
