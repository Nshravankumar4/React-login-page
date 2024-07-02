import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './EmployeeLogin.css';

const users = [
  { username: 'user1', password: 'password1', role: 'admin' },
  { username: 'user2', password: 'password2', role: 'employee' },
  { username: 'user3', password: 'password3', role: 'employee' },
  { username: 'user4', password: 'password4', role: 'employee' },
  { username: 'user5', password: 'password5', role: 'employee' },
  { username: 'user6', password: 'password6', role: 'employee' },
  { username: 'user7', password: 'password7', role: 'employee' },
  { username: 'user8', password: 'password8', role: 'employee' },
  { username: 'user9', password: 'password9', role: 'employee' },
  { username: 'user10', password: 'password10', role: 'employee' },
];

const EmployeeLogin = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const user = users.find((u) => u.username === username && u.password === password);

    if (user) {
      onLogin(user);
      navigate('/home');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="container">
      <form className="login-form" onSubmit={handleLogin}>
        <h2>Login</h2>
        <div>
          <label>Username:</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        {error && <p className="error-message">{error}</p>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default EmployeeLogin;
