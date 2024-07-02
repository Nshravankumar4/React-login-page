import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import EmployeeLogin from './components/EmployeeLogin/EmployeeLogin';

function App() {
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    const storedUserDetails = localStorage.getItem('userDetails');
    if (storedUserDetails) {
      setUserDetails(JSON.parse(storedUserDetails));
    }
  }, []);

  const handleLogin = (userDetails) => {
    setUserDetails(userDetails);
    localStorage.setItem('userDetails', JSON.stringify(userDetails));
  };

  const handleLogout = () => {
    setUserDetails(null);
    localStorage.removeItem('userDetails');
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<EmployeeLogin onLogin={handleLogin} />} />
          <Route path="/home" element={userDetails ? <Home userDetails={userDetails} onLogout={handleLogout} /> : <Navigate to="/" />} />
          {/* Add routes for dashboard, payslips, and employee details if needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
