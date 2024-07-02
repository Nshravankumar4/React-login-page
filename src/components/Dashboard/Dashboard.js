import React from 'react';

const Dashboard = ({ userDetails }) => {
  return (
    <div>
      <h2>Dashboard</h2>
      <p><strong>Role:</strong> {userDetails.role}</p>
      <p><strong>Projects:</strong> {userDetails.projects}</p>
      <p><strong>Date of Joining:</strong> {userDetails.dateOfJoining}</p>
      <p><strong>Date of Birth:</strong> {userDetails.dateOfBirth}</p>
    </div>
  );
};

export default Dashboard;
