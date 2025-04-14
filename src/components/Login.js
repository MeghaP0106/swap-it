// src/components/Login.js
import React, { useState } from 'react';
import './AuthPages.css';
import { Link, useNavigate } from 'react-router-dom';

function Login({ handleLogin, users }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    
    // Find user with matching email
    const user = users.find(u => u.email === formData.email);
    
    // Check if user exists and password matches
    if (user && user.password === formData.password) {
      handleLogin(user);
      navigate('/');
    } else {
      setError('Invalid email or password');
    }
  };
  
  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Login to Your Account</h2>
        
        {error && <div className="error-message">{error}</div>}
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input 
              type="password" 
              id="password" 
              name="password" 
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          
          <button type="submit" className="btn btn-primary btn-block">
            Login
          </button>
          
          <div className="auth-footer">
            Don't have an account? <Link to="/register">Register</Link>
          </div>
        </form>
      </div>
      
      <div className="sample-accounts">
        <h3>Demo Accounts</h3>
        <p>Use any of these accounts to explore the platform:</p>
        <ul>
          <li><strong>Email:</strong> jane@example.com <strong>Password:</strong> password123</li>
          <li><strong>Email:</strong> john@example.com <strong>Password:</strong> password123</li>
        </ul>
      </div>
    </div>
  );
}

export default Login;
